// Security utilities for input validation and rate limiting
import DOMPurify from 'dompurify';
import { RECAPTCHA_SCORE_THRESHOLD } from '../config/recaptcha.js';

export class SecurityUtils {
  
  // Input sanitization using DOMPurify
  static sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    
    const config = {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
      KEEP_CONTENT: true,
      RETURN_DOM: false,
      RETURN_DOM_FRAGMENT: false,
      SANITIZE_DOM: true
    };
    
    return DOMPurify.sanitize(input, config).trim();
  }

  // Pattern detection for suspicious content
  static containsSuspiciousPatterns(text) {
    const suspiciousPatterns = [
      /<script[^>]*>/i,
      /<\/script>/i,
      /javascript:/i,
      /vbscript:/i,
      /data:text\/html/i,
      /on\w+\s*=/i,
      /fscommand/i,
      /document\./i,
      /window\./i,
      /eval\s*\(/i,
      /expression\s*\(/i,
      /\$\{/,
      /\{\{/,
      /%3Cscript/i,
      /file:\/\//i,
      /ftp:\/\//i
    ];
    
    return suspiciousPatterns.some(pattern => pattern.test(text));
  }

  // Validate reCAPTCHA score
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
  
  // Rate limiting with reCAPTCHA consideration
  static checkRateLimit(key, maxAttempts = 3, windowMs = 300000, hasValidRecaptcha = false) { 
    const adjustedMaxAttempts = hasValidRecaptcha ? maxAttempts * 2 : maxAttempts;
    
    const now = Date.now();
    const attempts = JSON.parse(localStorage.getItem(`rateLimit_${key}`) || '[]');
    
    const recentAttempts = attempts.filter(timestamp => now - timestamp < windowMs);
    
    if (recentAttempts.length >= adjustedMaxAttempts) {
      return {
        allowed: false,
        resetTime: Math.ceil((recentAttempts[0] + windowMs - now) / 1000),
        attemptsRemaining: 0
      };
    }
    
    recentAttempts.push(now);
    localStorage.setItem(`rateLimit_${key}`, JSON.stringify(recentAttempts));
    
    return { 
      allowed: true,
      attemptsRemaining: adjustedMaxAttempts - recentAttempts.length
    };
  }
  
  // Generate security fingerprint
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