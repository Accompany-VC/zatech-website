import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';

// Create the context
const ReCaptchaContext = createContext({
  executeRecaptcha: null,
  recaptchaLoaded: false
});

// Hook to use the context
export const useReCaptcha = () => {
  const context = useContext(ReCaptchaContext);
  if (!context) {
    throw new Error('useReCaptcha must be used within a ReCaptchaProvider');
  }
  return context;
};

const ReCaptchaProvider = ({ children }) => {
  const isProduction = import.meta.env.PROD;
  const isLocalhost = window.location.hostname === 'localhost';
  
  if (!isProduction || isLocalhost) {
    const executeRecaptcha = useCallback(async () => 'dev-token', []);
    return (
      <ReCaptchaContext.Provider value={{ executeRecaptcha, recaptchaLoaded: true }}>
        {children}
      </ReCaptchaContext.Provider>
    );
  }

  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setRecaptchaLoaded(true);
    document.head.appendChild(script);
    
    return () => {
      const existingScript = document.querySelector('script[src*="recaptcha"]');
      if (existingScript) existingScript.remove();
    };
  }, []);

  const executeRecaptcha = useCallback(async (action = 'submit') => {
    if (!recaptchaLoaded || !window.grecaptcha) {
      throw new Error('reCAPTCHA not loaded');
    }
    return await window.grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action });
  }, [recaptchaLoaded]);

  return (
    <ReCaptchaContext.Provider value={{ executeRecaptcha, recaptchaLoaded }}>
      {children}
    </ReCaptchaContext.Provider>
  );
};

export default ReCaptchaProvider;