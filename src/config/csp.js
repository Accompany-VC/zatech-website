// 🛡️ Simple CSP Configuration
// Only allows what we actually need: Firebase + reCAPTCHA
const buildPolicy = () => {
  const isDev = typeof import.meta !== 'undefined' && import.meta.env?.DEV;
  
  const policy = {
    "default-src": ["'self'"],
    "script-src": [
      "'self'",
      "'unsafe-inline'",
      ...(isDev ? ["'unsafe-eval'"] : []),
      "https://www.google.com/recaptcha/",
      "https://www.gstatic.com/recaptcha/",
      "https://apis.google.com"
    ],
    "style-src": ["'self'", "'unsafe-inline'"],
    "connect-src": [
      "'self'",
      "https://firestore.googleapis.com",
      "https://www.google.com/recaptcha/"
    ],
    "frame-src": [
      // Just reCAPTCHA iframe
      "https://www.google.com/recaptcha/",
      "https://recaptcha.google.com/recaptcha/",
      "https://zatechdatabase.firebaseapp.com"
    ],
    "object-src": ["'none'"],
    "base-uri": ["'self'"],
    "form-action": ["'self'"]
  };
  
  return policy;
};

const serialize = (policyObj) =>
  Object.entries(policyObj)
    .map(([dir, sources]) => `${dir} ${sources.join(' ')}`)
    .join('; ');

export const getCSP = () => serialize(buildPolicy());

