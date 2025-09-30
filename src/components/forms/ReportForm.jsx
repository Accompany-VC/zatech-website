import React, { useState, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './ReportForm.css';
import { submitReport, REPORT_TYPES } from '../../services/reportService.js';
import { SecurityUtils } from '../../utils/securityUtils.js';
import { useReCaptcha } from '../common/ReCaptchaContext.js';

function ReportForm({ className }) {
  const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();
  const [formData, setFormData] = useState({
    report_type: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const descriptionRef = useRef(null);

  // Auto-resize the description textarea vertically based on content
  useEffect(() => {
    const el = descriptionRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }, [formData.description]);

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
      let recaptchaToken = null;
      if (recaptchaLoaded) {
        try {
          recaptchaToken = await executeRecaptcha('submit_report');
        } catch {
          setMessage({
            type: 'error',
            text: 'Bot protection verification failed. Please try again.'
          });
          return;
        }
      }

      // Validate input
      const validation = SecurityUtils.validateReportData(formData);
      if (!validation.isValid) {
        setMessage({
          type: 'error', 
          text: validation.errors.join(', ')
        });
        return;
      }

      // Submit the report
      const result = await submitReport(formData, recaptchaToken);
      
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
    } catch {
      setMessage({
        type: 'error',
        text: 'An unexpected error occurred. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, isSubmitting, recaptchaLoaded, executeRecaptcha]);

  return (
    <div className={`report-form ${className || ''}`.trim()}>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="report_type">Report Type</label>
          <select
            id="report_type"
            name="report_type"
            value={formData.report_type}
            onChange={handleChange}
            required
            className="report-type-select"
          >
            <option value="" disabled hidden>
              Select a report type
            </option>
            {Object.entries(REPORT_TYPES).map(([key, value]) => (
              <option key={key} value={value}>
                {value.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Please provide details about the incident. Be as specific as possible to help us investigate effectively."
            rows={4}
            required
            maxLength={1000}
            className="report-description"
            ref={descriptionRef}
          />
          <small className="char-count">
            {formData.description.length}/1000
          </small>
        </div>

        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        <button 
          type="submit" 
          disabled={isSubmitting || !recaptchaLoaded}
          className="submit-btn"
        >
          {isSubmitting ? 'Submitting...' : 
           !recaptchaLoaded ? 'Loading security...' : 
           'Submit Report'}
        </button>
        
        {!recaptchaLoaded && import.meta.env.PROD && (
          <div className="recaptcha-status">
            <small>Loading security verification...</small>
          </div>
        )}
      </form>

      <div className="privacy-notice">
        <p>
          This report is completely anonymous. We do not collect or store any personal information 
          that could identify you. Your IP address is not recorded.
        </p>
        <a href="#" className="privacy-link">Privacy Notice</a>
      </div>
    </div>
  );
}

ReportForm.propTypes = {
  className: PropTypes.string,
};

export default ReportForm;