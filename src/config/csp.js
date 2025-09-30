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
      "https://www.google.com",
      "https://www.gstatic.com",
      "https://apis.google.com"
    ],
    "style-src": ["'self'", "'unsafe-inline'", "https://www.gstatic.com"],
    "connect-src": [
      "'self'",
      "https://firestore.googleapis.com",
      "https://www.googleapis.com", 
      "https://www.google.com",
      "https://identitytoolkit.googleapis.com",
      "https://securetoken.googleapis.com",
      "https://zatechdatabase.firebaseapp.com",
      "https://zatechdatabase.firebasestorage.app"
    ],
    "frame-src": [
      "https://www.google.com",
      "https://recaptcha.google.com",
      "https://zatechdatabase.firebaseapp.com",
      "https://www.youtube.com",
      "https://www.youtube-nocookie.com"
    ],
    "img-src": ["'self'", "data:", "https://www.gstatic.com"],
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

