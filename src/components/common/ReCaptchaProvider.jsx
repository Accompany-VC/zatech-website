import { useCallback, useEffect, useMemo, useState } from 'react';
import { ReCaptchaContext } from './ReCaptchaContext.js';

const ReCaptchaProvider = ({ children }) => {
  const isProduction = import.meta.env.PROD;
  const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';

  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  useEffect(() => {
    // In dev or non-prod, we simulate loaded state without injecting the script
    if (!isProduction || isLocalhost) {
      setRecaptchaLoaded(true);
      return;
    }

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
  }, [isProduction, isLocalhost]);

  const executeRecaptcha = useCallback(async (action = 'submit') => {
    if (!recaptchaLoaded) {
      throw new Error('reCAPTCHA not loaded');
    }
    if (!isProduction || isLocalhost) {
      // Return a deterministic token in dev/local
      return 'dev-token';
    }
    if (!window.grecaptcha) {
      throw new Error('reCAPTCHA not available');
    }
    return await window.grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action });
  }, [recaptchaLoaded, isProduction, isLocalhost]);

  const value = useMemo(() => ({ executeRecaptcha, recaptchaLoaded }), [executeRecaptcha, recaptchaLoaded]);

  return (
    <ReCaptchaContext.Provider value={value}>
      {children}
    </ReCaptchaContext.Provider>
  );
};

export default ReCaptchaProvider;