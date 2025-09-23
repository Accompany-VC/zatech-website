import React, { useState, useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { submitReport, REPORT_TYPES } from '../../services/reportService.js';
import { SecurityUtils } from '../../utils/securityUtils.js';

function ReportForm() {
  const [formData, setFormData] = useState({
    report_type: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear message when user starts typing
    if (message.text) {
      setMessage({ type: '', text: '' });
    }
  }, [message.text]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return; // Prevent double submission
    
    setIsSubmitting(true);
    
    try {
      // Execute reCAPTCHA
      let recaptchaScore = null;
      if (executeRecaptcha) {
        try {
          const token = await executeRecaptcha('report_submission');
          // In production, verify this token on your backend
          // For now, we simulate a score (backend verification needed)
          recaptchaScore = 0.9; // Simulated score
        } catch (recaptchaError) {
          setMessage({
            type: 'error',
            text: 'Security verification failed. Please refresh the page and try again.'
          });
          return;
        }
      }

      // Validate form data with reCAPTCHA score
      const validation = SecurityUtils.validateReportData(formData, recaptchaScore);
      if (!validation.isValid) {
        setMessage({
          type: 'error',
          text: validation.errors.join(', ')
        });
        return;
      }

      // Check rate limiting
      const hasValidRecaptcha = recaptchaScore && recaptchaScore >= 0.5;
      const rateLimit = SecurityUtils.checkRateLimit('report_submission', 3, 300000, hasValidRecaptcha);
      if (!rateLimit.allowed) {
        setMessage({
          type: 'error',
          text: `Too many submission attempts. Please wait ${rateLimit.resetTime} seconds before trying again.`
        });
        return;
      }

      // Submit the report
      const result = await submitReport(formData, recaptchaScore);
      
      if (result.success) {
        setMessage({
          type: 'success',
          text: 'Your report has been submitted successfully. Thank you for helping make our community safer.'
        });
        // Reset form
        setFormData({
          report_type: '',
          description: ''
        });
      } else {
        setMessage({
          type: 'error',
          text: result.error || 'An error occurred while submitting your report. Please try again.'
        });
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'An unexpected error occurred. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [executeRecaptcha, formData, isSubmitting, message.text]);

  return (
    <div className="report-form">
      <h2>Submit Anonymous Report</h2>
      <p>Help us maintain a safe and respectful community by reporting inappropriate content or behavior.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="report_type">Type of Report *</label>
          <select
            id="report_type"
            name="report_type"
            value={formData.report_type}
            onChange={handleChange}
            required
          >
            <option value="">Select a report type</option>
            {Object.entries(REPORT_TYPES).map(([key, value]) => (
              <option key={key} value={value}>
                {value.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Please provide details about the incident. Be as specific as possible to help us investigate effectively."
            rows={6}
            required
            maxLength={1000}
          />
          <small className="char-count">
            {formData.description.length}/1000 characters
          </small>
        </div>

        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="submit-btn"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Report'}
        </button>
      </form>

      <div className="privacy-notice">
        <h3>Privacy Notice</h3>
        <p>
          This report is completely anonymous. We do not collect or store any personal information 
          that could identify you. Your IP address is not recorded.
        </p>
      </div>
    </div>
  );
}

export default ReportForm;