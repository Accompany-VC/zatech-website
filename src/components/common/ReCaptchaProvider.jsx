import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function ReCaptchaProvider({ children }) {
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  
  // Don't render provider if no site key is configured
  if (!recaptchaSiteKey || recaptchaSiteKey === 'your-recaptcha-site-key-here') {
    return <>{children}</>;
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
      {children}
    </GoogleReCaptchaProvider>
  );
}

export default ReCaptchaProvider;