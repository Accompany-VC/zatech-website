import { describe, it, expect } from 'vitest'
import { SecurityUtils } from '../utils/securityUtils.js'
import { REPORT_TYPES } from '../constants/index.js'

describe('SecurityUtils', () => {
  describe('sanitizeInput', () => {
    it('should trim whitespace from input', () => {
      const input = '  hello world  '
      const result = SecurityUtils.sanitizeInput(input)
      expect(result).toBe('hello world')
    })

    it('should limit input length to 1000 characters', () => {
      const longInput = 'a'.repeat(1500)
      const result = SecurityUtils.sanitizeInput(longInput)
      expect(result).toHaveLength(1000)
    })

    it('should handle non-string input gracefully', () => {
      expect(SecurityUtils.sanitizeInput(123)).toBe(123)
      expect(SecurityUtils.sanitizeInput(null)).toBe(null)
      expect(SecurityUtils.sanitizeInput(undefined)).toBe(undefined)
    })

    it('should handle empty string', () => {
      expect(SecurityUtils.sanitizeInput('')).toBe('')
    })
  })

  describe('validateReportData', () => {
    const validReportData = {
      report_type: REPORT_TYPES.HARASSMENT,
      description: 'This is a valid report description that is long enough.'
    }

    it('should validate correct report data', () => {
      const result = SecurityUtils.validateReportData(validReportData)
      expect(result.isValid).toBe(true)
      expect(result.errors).toHaveLength(0)
      expect(result.sanitizedData.report_type).toBe(REPORT_TYPES.HARASSMENT)
    })

    it('should reject invalid report type', () => {
      const invalidData = {
        ...validReportData,
        report_type: 'invalid_type'
      }
      const result = SecurityUtils.validateReportData(invalidData)
      expect(result.isValid).toBe(false)
      expect(result.errors).toContain('Please select a valid report type')
    })

    it('should reject empty report type', () => {
      const invalidData = {
        ...validReportData,
        report_type: ''
      }
      const result = SecurityUtils.validateReportData(invalidData)
      expect(result.isValid).toBe(false)
      expect(result.errors).toContain('Please select a valid report type')
    })

    it('should reject description that is too short', () => {
      const invalidData = {
        ...validReportData,
        description: 'short'
      }
      const result = SecurityUtils.validateReportData(invalidData)
      expect(result.isValid).toBe(false)
      expect(result.errors).toContain('Description must be at least 10 characters')
    })

    it('should reject description that is too long', () => {
      const invalidData = {
        ...validReportData,
        description: 'a'.repeat(1001)
      }
      const result = SecurityUtils.validateReportData(invalidData)
      expect(result.isValid).toBe(false)
      expect(result.errors).toContain('Description must be less than 1000 characters')
    })

    it('should handle null/undefined input', () => {
      const result = SecurityUtils.validateReportData(null)
      expect(result.isValid).toBe(false)
      expect(result.errors.length).toBeGreaterThan(0)
    })

    it('should sanitize input data', () => {
      const dirtyData = {
        report_type: `  ${REPORT_TYPES.SPAM}  `,
        description: '  This description has extra whitespace  '
      }
      const result = SecurityUtils.validateReportData(dirtyData)
      expect(result.sanitizedData.report_type).toBe(REPORT_TYPES.SPAM)
      expect(result.sanitizedData.description).toBe('This description has extra whitespace')
    })

    it('should validate all report types', () => {
      Object.values(REPORT_TYPES).forEach(reportType => {
        const data = {
          report_type: reportType,
          description: 'Valid description for testing purposes.'
        }
        const result = SecurityUtils.validateReportData(data)
        expect(result.isValid).toBe(true)
      })
    })
  })
})