// Simple security utilities for client-side validation
// Firebase handles the real security enforcement
import { REPORT_TYPES } from '../constants/index.js';

export class SecurityUtils {
  /**
   * Basic input sanitization - trim and limit length
   */
  static sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    return input.trim().slice(0, 1000);
  }

  /**
   * Simple validation for report data
   * Firebase security rules will do the real validation
   */
  static validateReportData(data) {
    const errors = [];
    const safeData = data || {};

    // Get raw data for validation (before sanitization)
    const rawReportType = safeData.report_type || '';
    const rawDescription = safeData.description || '';

    // Sanitize inputs for return
    const sanitizedData = {
      report_type: this.sanitizeInput(rawReportType),
      description: this.sanitizeInput(rawDescription)
    };

    // Basic validation on raw data
    if (!rawReportType.trim() || !Object.values(REPORT_TYPES).includes(rawReportType.trim())) {
      errors.push('Please select a valid report type');
    }

    const desc = rawDescription.trim();
    if (desc.length < 10) {
      errors.push('Description must be at least 10 characters');
    }
    if (desc.length > 1000) {
      errors.push('Description must be less than 1000 characters');
    }

    return { 
      isValid: errors.length === 0, 
      errors, 
      sanitizedData 
    };
  }
}