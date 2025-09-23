// reCAPTCHA configuration
export const recaptchaConfig = {
  siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  // reCAPTCHA v3 configuration options
  badge: 'bottomright', // 'bottomright', 'bottomleft', or 'inline'
  size: 'invisible', // v3 is always invisible
  enterprise: false, // Set to true if using reCAPTCHA Enterprise
};

// Minimum score threshold for reCAPTCHA v3 (0.0 to 1.0)
// 0.0 = very likely a bot, 1.0 = very likely a human
export const RECAPTCHA_SCORE_THRESHOLD = 0.5;