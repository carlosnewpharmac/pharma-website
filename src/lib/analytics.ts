// Google Analytics Configuration
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 tracking ID

// Google Analytics 4
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Track phone clicks
export const trackPhoneClick = (phoneNumber: string) => {
  trackEvent('phone_click', 'engagement', phoneNumber);
};

// Track email clicks
export const trackEmailClick = (emailAddress: string) => {
  trackEvent('email_click', 'engagement', emailAddress);
};

// Track service clicks
export const trackServiceClick = (serviceName: string) => {
  trackEvent('service_click', 'engagement', serviceName);
};

// Google Tag Manager
export const GTM_ID = 'GTM-XXXXXXX'; // Replace with your actual GTM ID

// Initialize Google Tag Manager
export const initGTM = () => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });
  }
};

// Declare global types
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
} 