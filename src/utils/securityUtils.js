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

    // Sanitize inputs
    const sanitizedData = {
      report_type: this.sanitizeInput(safeData.report_type || ''),
      description: this.sanitizeInput(safeData.description || '')
    };

    // Basic validation
    if (!sanitizedData.report_type || !Object.values(REPORT_TYPES).includes(sanitizedData.report_type)) {
      errors.push('Please select a valid report type');
    }

    const desc = sanitizedData.description;
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