import React, { createContext, useContext } from 'react';

export const ReCaptchaContext = createContext({
  executeRecaptcha: null,
  recaptchaLoaded: false,
});

export const useReCaptcha = () => {
  const context = useContext(ReCaptchaContext);
  if (!context) {
    throw new Error('useReCaptcha must be used within a ReCaptchaProvider');
  }
  return context;
};
