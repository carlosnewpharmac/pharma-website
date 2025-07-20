// Google Analytics 4 Configuration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    console.log('Google Analytics initialized');
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-VLGRBW3NQ6', {
      page_path: url,
      page_title: title || document.title,
    });
  }
};

// Track custom events
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

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', 'engagement', `${buttonName}_${location}`);
};

// Track phone number clicks
export const trackPhoneClick = (phoneNumber: string) => {
  trackEvent('phone_click', 'contact', phoneNumber);
};

// Track email clicks
export const trackEmailClick = (emailAddress: string) => {
  trackEvent('email_click', 'contact', emailAddress);
};

// Track service page views
export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', 'engagement', serviceName);
};

// Track consultation requests
export const trackConsultationRequest = (serviceType: string) => {
  trackEvent('consultation_request', 'conversion', serviceType);
}; 