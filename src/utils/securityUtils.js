// Enhanced security utilities with CSP-compliant validation
import DOMPurify from 'dompurify';
import { RECAPTCHA_SCORE_THRESHOLD } from '../config/recaptcha.js';

export class SecurityUtils {
  
  // CSP-compliant input sanitization
  static sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    
    // DOMPurify configuration that works well with CSP
    const config = {
      ALLOWED_TAGS: [], // No HTML tags allowed
      ALLOWED_ATTR: [], // No attributes allowed
      KEEP_CONTENT: true, // Keep text content
      RETURN_DOM: false, // Return string, not DOM
      RETURN_DOM_FRAGMENT: false,
      SANITIZE_DOM: true // Extra DOM sanitization
    };
    
    return DOMPurify.sanitize(input, config).trim();
  }

  // Enhanced pattern detection that works with CSP
  static containsSuspiciousPatterns(text) {
    // CSP will block most of these, but we still validate for good practice
    const suspiciousPatterns = [
      // Script injection attempts
      /<script[^>]*>/i,
      /<\/script>/i,
      /javascript:/i,
      /vbscript:/i,
      /data:text\/html/i,
      
      // Event handlers (CSP will block, but we check anyway)
      /on\w+\s*=/i,
      /fscommand/i,
      
      // Data exfiltration attempts
      /document\./i,
      /window\./i,
      /eval\s*\(/i,
      /expression\s*\(/i,
      
      // Template injection
      /\$\{/,
      /\{\{/,
      /%3Cscript/i,
      
      // Protocol violations
      /file:\/\//i,
      /ftp:\/\//i
    ];
    
    return suspiciousPatterns.some(pattern => pattern.test(text));
  }

  // CSP violation handler
  static handleCSPViolation(violation) {
    // Log CSP violations for monitoring
    console.warn('CSP Violation:', {
      blockedURI: violation.blockedURI,
      violatedDirective: violation.violatedDirective,
      originalPolicy: violation.originalPolicy,
      sourceFile: violation.sourceFile,
      lineNumber: violation.lineNumber
    });
    
    // In production, you might want to send this to your monitoring service
    // Example: sendToMonitoring('csp-violation', violation);
  }

  // Initialize CSP violation monitoring
  static initCSPMonitoring() {
    if (typeof window !== 'undefined') {
      document.addEventListener('securitypolicyviolation', (e) => {
        this.handleCSPViolation(e);
      });
    }
  }

  // Validate reCAPTCHA token and score
  static validateRecaptchaScore(score) {
    if (typeof score !== 'number') {
      return { valid: false, reason: 'Invalid reCAPTCHA score format' };
    }
    
    if (score < RECAPTCHA_SCORE_THRESHOLD) {
      return { 
        valid: false, 
        reason: `reCAPTCHA score too low: ${score}. Minimum required: ${RECAPTCHA_SCORE_THRESHOLD}` 
      };
    }
    
    return { valid: true, score };
  }

  // Validate report data with security checks
  static validateReportData(data, recaptchaScore = null) {
    const errors = [];
    
    // Validate reCAPTCHA if provided
    if (recaptchaScore !== null) {
      const recaptchaValidation = this.validateRecaptchaScore(recaptchaScore);
      if (!recaptchaValidation.valid) {
        errors.push('Security validation failed. Please try again.');
      }
    }
    
    // Sanitize inputs
    const sanitizedData = {
      report_type: this.sanitizeInput(data.report_type),
      description: this.sanitizeInput(data.description)
    };
    
    // Validate report type
    const validTypes = ['harassment', 'discrimination', 'inappropriate_content', 'spam', 'violence', 'hate_speech', 'other'];
    if (!sanitizedData.report_type || !validTypes.includes(sanitizedData.report_type)) {
      errors.push('Invalid report type');
    }
    
    // Validate description
    if (!sanitizedData.description || sanitizedData.description.length < 10) {
      errors.push('Description must be at least 10 characters');
    }
    
    if (sanitizedData.description.length > 1000) {
      errors.push('Description too long (max 1000 characters)');
    }
    
    // Check for potential injection attempts
    if (this.containsSuspiciousPatterns(sanitizedData.description)) {
      errors.push('Invalid characters detected');
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      sanitizedData
    };
  }
  
  // Check for suspicious patterns (CSP provides primary protection)
  static containsSuspiciousPatterns(text) {
    // CSP will block most of these, but we still validate for defense in depth
    const suspiciousPatterns = [
      // Script injection attempts
      /<script[^>]*>/i,
      /<\/script>/i,
      /javascript:/i,
      /vbscript:/i,
      /data:text\/html/i,
      
      // Event handlers (CSP will block, but we check anyway)
      /on\w+\s*=/i,
      /fscommand/i,
      
      // Data exfiltration attempts
      /document\./i,
      /window\./i,
      /eval\s*\(/i,
      /expression\s*\(/i,
      
      // Template injection
      /\$\{/,
      /\{\{/,
      /%3Cscript/i,
      
      // Protocol violations
      /file:\/\//i,
      /ftp:\/\//i
    ];
    
    return suspiciousPatterns.some(pattern => pattern.test(text));
  }
  
  // Enhanced rate limiting with reCAPTCHA consideration
  static checkRateLimit(key, maxAttempts = 3, windowMs = 300000, hasValidRecaptcha = false) { 
    // If reCAPTCHA is valid, allow more attempts
    const adjustedMaxAttempts = hasValidRecaptcha ? maxAttempts * 2 : maxAttempts;
    
    const now = Date.now();
    const attempts = JSON.parse(localStorage.getItem(`rateLimit_${key}`) || '[]');
    
    // Remove old attempts
    const recentAttempts = attempts.filter(timestamp => now - timestamp < windowMs);
    
    if (recentAttempts.length >= adjustedMaxAttempts) {
      return {
        allowed: false,
        resetTime: Math.ceil((recentAttempts[0] + windowMs - now) / 1000),
        attemptsRemaining: 0
      };
    }
    
    // Record this attempt
    recentAttempts.push(now);
    localStorage.setItem(`rateLimit_${key}`, JSON.stringify(recentAttempts));
    
    return { 
      allowed: true,
      attemptsRemaining: adjustedMaxAttempts - recentAttempts.length
    };
  }
  
  // Generate a fingerprint for additional security tracking
  static generateFingerprint() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Security fingerprint', 2, 2);
    
    return btoa(JSON.stringify({
      canvas: canvas.toDataURL(),
      screen: `${screen.width}x${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
      platform: navigator.platform,
      timestamp: Date.now()
    })).slice(0, 32);
  }
}