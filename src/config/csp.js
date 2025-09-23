// Content Security Policy configuration
export const cspConfig = {
  development: {
    'default-src': ["'self'"],
    'script-src': [
      "'self'",
      "'unsafe-inline'", // Needed for Vite HMR in development
      "'unsafe-eval'",   // Needed for Vite HMR in development
      "https://www.google.com/recaptcha/",
      "https://www.gstatic.com/recaptcha/",
      "https://www.googleapis.com"
    ],
    'style-src': [
      "'self'",
      "'unsafe-inline'", // Needed for CSS-in-JS and dynamic styles
      "https://fonts.googleapis.com"
    ],
    'font-src': [
      "'self'",
      "https://fonts.gstatic.com"
    ],
    'img-src': [
      "'self'",
      "data:",
      "blob:",
      "https://www.google.com",
      "https://www.gstatic.com"
    ],
    'connect-src': [
      "'self'",
      "ws://localhost:*", // Vite HMR WebSocket
      "http://localhost:*", // Development server
      "https://*.firebaseapp.com",
      "https://*.googleapis.com",
      "https://*.google.com",
      "https://www.google.com/recaptcha/",
      "https://www.gstatic.com/recaptcha/"
    ],
    'frame-src': [
      "'self'",
      "https://www.google.com/recaptcha/",
      "https://recaptcha.google.com/recaptcha/"
    ],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'frame-ancestors': ["'none'"],
    'upgrade-insecure-requests': true
  },

  // Production CSP (more restrictive)
  production: {
    'default-src': ["'self'"],
    'script-src': [
      "'self'",
      "https://www.google.com/recaptcha/",
      "https://www.gstatic.com/recaptcha/",
      "https://www.googleapis.com"
    ],
    'style-src': [
      "'self'",
      "'unsafe-inline'", // Still needed for some React styling
      "https://fonts.googleapis.com"
    ],
    'font-src': [
      "'self'",
      "https://fonts.gstatic.com"
    ],
    'img-src': [
      "'self'",
      "data:",
      "blob:",
      "https://www.google.com",
      "https://www.gstatic.com"
    ],
    'connect-src': [
      "'self'",
      "https://*.firebaseapp.com",
      "https://*.googleapis.com",
      "https://*.google.com",
      "https://www.google.com/recaptcha/",
      "https://www.gstatic.com/recaptcha/"
    ],
    'frame-src': [
      "'self'",
      "https://www.google.com/recaptcha/",
      "https://recaptcha.google.com/recaptcha/"
    ],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'frame-ancestors': ["'none'"],
    'upgrade-insecure-requests': true,
    'require-trusted-types-for': ["'script'"] // Extra security for production
  }
};

// Generate CSP string from config
export const generateCSP = (environment = 'development') => {
  const config = cspConfig[environment];
  return Object.entries(config)
    .map(([directive, sources]) => {
      if (typeof sources === 'boolean') {
        return sources ? directive : '';
      }
      return `${directive} ${sources.join(' ')}`;
    })
    .filter(Boolean)
    .join('; ');
};

// CSP reporting endpoint (for monitoring violations)
export const cspReportConfig = {
  'report-uri': '/api/csp-report', // You'd need to implement this endpoint
  'report-to': 'csp-endpoint'
};


// TODO: Replace 'unsafe-inline' in production style-src with nonce/hash approach
// TODO: Specify exact Firebase project URLs instead of wildcards
// TODO: Implement /api/csp-report endpoint for violation monitoring

// Future Todos for production CSP: (ouch)
// TODO: Add worker-src, manifest-src, media-src directives
// TODO: Narrow down development WebSocket ports if known
// TODO: Consider adding strict-dynamic for script-src in production
// TODO: Test CSP in staging environment before prod deployment