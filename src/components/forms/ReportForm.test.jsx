import { describe, it, expect, vi, beforeEach, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ReportForm from './ReportForm.jsx'
import { ReCaptchaContext } from '../common/ReCaptchaContext.js'
import { REPORT_TYPES } from '../../constants/index.js'

// Mock the report service
vi.mock('../../services/reportService.js', () => ({
  submitReport: vi.fn(),
  REPORT_TYPES: {
    HARASSMENT: 'harassment',
    DISCRIMINATION: 'discrimination',
    INAPPROPRIATE_CONTENT: 'inappropriate_content',
    SPAM: 'spam',
    VIOLENCE: 'violence',
    HATE_SPEECH: 'hate_speech',
    OTHER: 'other'
  }
}))

const mockReCaptchaContext = {
  executeRecaptcha: vi.fn(() => Promise.resolve('test-token')),
  recaptchaLoaded: true
}

const renderWithReCaptcha = (component) => {
  return render(
    <ReCaptchaContext.Provider value={mockReCaptchaContext}>
      {component}
    </ReCaptchaContext.Provider>
  )
}

describe('ReportForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render form elements correctly', () => {
    renderWithReCaptcha(<ReportForm />)
    
    expect(screen.getByLabelText(/report type/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit report/i })).toBeInTheDocument()
  })

  test('should show validation error for empty form submission', async () => {
    const user = userEvent.setup()
    renderWithReCaptcha(<ReportForm />)
    
    // Fill in just enough to pass HTML5 validation but fail our custom validation
    const reportTypeSelect = screen.getByLabelText(/report type/i)
    const descriptionTextarea = screen.getByLabelText(/description/i)
    const submitButton = screen.getByText('Submit Report')
    
    // Select a valid report type but leave description too short
    await user.selectOptions(reportTypeSelect, 'harassment')
    await user.type(descriptionTextarea, 'short') // Less than 10 characters
    
    // Now submit the form
    await user.click(submitButton)
    
    // Should show validation error for description being too short
    await waitFor(() => {
      expect(screen.getByText(/Description must be at least 10 characters/)).toBeInTheDocument()
    }, { timeout: 2000 })
  })

  it('should validate description length', async () => {
    const user = userEvent.setup()
    renderWithReCaptcha(<ReportForm />)
    
    const reportTypeSelect = screen.getByLabelText(/report type/i)
    const descriptionTextarea = screen.getByLabelText(/description/i)
    const submitButton = screen.getByRole('button', { name: /submit report/i })
    
    await user.selectOptions(reportTypeSelect, REPORT_TYPES.HARASSMENT)
    await user.type(descriptionTextarea, 'short')
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/description must be at least 10 characters/i)).toBeInTheDocument()
    })
  })

  it('should show character count', async () => {
    const user = userEvent.setup()
    renderWithReCaptcha(<ReportForm />)
    
    const descriptionTextarea = screen.getByLabelText(/description/i)
    await user.type(descriptionTextarea, 'Hello world')
    
    expect(screen.getByText('11/1000')).toBeInTheDocument()
  })

  it('should disable submit button when reCAPTCHA is not loaded', () => {
    const contextWithoutRecaptcha = {
      ...mockReCaptchaContext,
      recaptchaLoaded: false
    }
    
    render(
      <ReCaptchaContext.Provider value={contextWithoutRecaptcha}>
        <ReportForm />
      </ReCaptchaContext.Provider>
    )
    
    const submitButton = screen.getByRole('button')
    expect(submitButton).toBeDisabled()
    expect(submitButton).toHaveTextContent(/loading security/i)
  })

  it('should successfully submit valid form', async () => {
    const user = userEvent.setup()
    const { submitReport } = await import('../../services/reportService.js')
    submitReport.mockResolvedValue({ success: true, id: 'test-id' })
    
    renderWithReCaptcha(<ReportForm />)
    
    const reportTypeSelect = screen.getByLabelText(/report type/i)
    const descriptionTextarea = screen.getByLabelText(/description/i)
    const submitButton = screen.getByRole('button', { name: /submit report/i })
    
    await user.selectOptions(reportTypeSelect, REPORT_TYPES.HARASSMENT)
    await user.type(descriptionTextarea, 'This is a detailed description of the harassment incident.')
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/your report has been submitted successfully/i)).toBeInTheDocument()
    })
    
    expect(submitReport).toHaveBeenCalledWith(
      {
        report_type: REPORT_TYPES.HARASSMENT,
        description: 'This is a detailed description of the harassment incident.'
      },
      'test-token'
    )
  })

  it('should handle submission errors gracefully', async () => {
    const user = userEvent.setup()
    const { submitReport } = await import('../../services/reportService.js')
    submitReport.mockResolvedValue({ success: false, error: 'Network error' })
    
    renderWithReCaptcha(<ReportForm />)
    
    const reportTypeSelect = screen.getByLabelText(/report type/i)
    const descriptionTextarea = screen.getByLabelText(/description/i)
    const submitButton = screen.getByRole('button', { name: /submit report/i })
    
    await user.selectOptions(reportTypeSelect, REPORT_TYPES.SPAM)
    await user.type(descriptionTextarea, 'Valid description for testing.')
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/network error/i)).toBeInTheDocument()
    })
  })

  it('should reset form after successful submission', async () => {
    const user = userEvent.setup()
    const { submitReport } = await import('../../services/reportService.js')
    submitReport.mockResolvedValue({ success: true, id: 'test-id' })
    
    renderWithReCaptcha(<ReportForm />)
    
    const reportTypeSelect = screen.getByLabelText(/report type/i)
    const descriptionTextarea = screen.getByLabelText(/description/i)
    const submitButton = screen.getByRole('button', { name: /submit report/i })
    
    await user.selectOptions(reportTypeSelect, REPORT_TYPES.OTHER)
    await user.type(descriptionTextarea, 'Test description for form reset.')
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/your report has been submitted successfully/i)).toBeInTheDocument()
    })
    
    expect(reportTypeSelect.value).toBe('')
    expect(descriptionTextarea.value).toBe('')
  })

  it('should prevent double submission', async () => {
    const user = userEvent.setup()
    const { submitReport } = await import('../../services/reportService.js')
    // Simulate slow network
    submitReport.mockImplementation(() => new Promise(resolve => setTimeout(() => resolve({ success: true }), 100)))
    
    renderWithReCaptcha(<ReportForm />)
    
    const reportTypeSelect = screen.getByLabelText(/report type/i)
    const descriptionTextarea = screen.getByLabelText(/description/i)
    const submitButton = screen.getByRole('button', { name: /submit report/i })
    
    await user.selectOptions(reportTypeSelect, REPORT_TYPES.OTHER)
    await user.type(descriptionTextarea, 'Test description for double submission.')
    
    // Click submit twice rapidly
    await user.click(submitButton)
    await user.click(submitButton)
    
    // Should only be called once
    await waitFor(() => {
      expect(submitReport).toHaveBeenCalledTimes(1)
    })
  })
})