/**
 * Umami Analytics Integration
 * Provides type-safe wrappers for Umami tracking
 */

// Extend Window interface to include umami
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void;
    };
  }
}

/**
 * Track a custom event in Umami
 * @param eventName - Name of the event
 * @param eventData - Optional event properties
 */
export const trackEvent = (
  eventName: string,
  eventData?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.umami) {
    try {
      window.umami.track(eventName, eventData);
      console.log('Umami Event:', eventName, eventData);
    } catch (error) {
      console.error('Umami tracking error:', error);
    }
  }
};

/**
 * Track UTM parameters capture with detailed breakdown
 */
export const trackUTMCapture = (utmParams: Record<string, string>) => {
  // Track main capture event with all params
  trackEvent('utm-capture', utmParams);
  
  // Track individual UTM parameters as separate events for better visibility
  if (utmParams.utm_source) {
    trackEvent(`source-${utmParams.utm_source}`, {
      medium: utmParams.utm_medium,
      campaign: utmParams.utm_campaign,
      landing_page: utmParams.landing_page
    });
  }
  
  if (utmParams.utm_medium) {
    trackEvent(`medium-${utmParams.utm_medium}`, {
      source: utmParams.utm_source,
      campaign: utmParams.utm_campaign
    });
  }
  
  if (utmParams.utm_campaign) {
    trackEvent(`campaign-${utmParams.utm_campaign}`, {
      source: utmParams.utm_source,
      medium: utmParams.utm_medium
    });
  }
  
  // Track complete campaign string for easy identification
  if (utmParams.utm_source && utmParams.utm_medium && utmParams.utm_campaign) {
    trackEvent(`${utmParams.utm_source}/${utmParams.utm_medium}/${utmParams.utm_campaign}`, {
      landing: utmParams.landing_page,
      term: utmParams.utm_term,
      content: utmParams.utm_content
    });
  }
};

/**
 * Track page view with UTM parameters
 */
export const trackPageView = (
  path: string,
  utmParams?: Record<string, string>
) => {
  // Only track if we have UTM params to avoid duplicate page views
  if (utmParams && Object.keys(utmParams).length > 0) {
    trackEvent(`view-${path}`, {
      source: utmParams.utm_source || 'direct',
      medium: utmParams.utm_medium || 'none',
      campaign: utmParams.utm_campaign || 'none'
    });
  }
};

/**
 * Track contact form submission with detailed attribution
 */
export const trackContactSubmission = (data: {
  subject: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}) => {
  // Track general submission
  trackEvent('contact-submit', {
    subject: data.subject,
    has_utm: !!(data.utm_source || data.utm_medium || data.utm_campaign)
  });
  
  // Track with specific UTM attribution if available
  if (data.utm_source || data.utm_medium || data.utm_campaign) {
    const campaignName = [
      data.utm_source,
      data.utm_medium,
      data.utm_campaign
    ].filter(Boolean).join('/');
    
    trackEvent(`lead-${campaignName}`, {
      subject: data.subject,
      term: data.utm_term,
      content: data.utm_content
    });
  }
};

/**
 * Track button clicks
 */
export const trackButtonClick = (
  buttonName: string,
  location: string,
  utmParams?: Record<string, string>
) => {
  trackEvent('button_click', {
    button: buttonName,
    location,
    ...utmParams,
  });
};

/**
 * Track outbound link clicks
 */
export const trackOutboundLink = (url: string, label?: string) => {
  trackEvent('outbound_link', {
    url,
    label: label || url,
  });
};

/**
 * Track product/service interest with attribution
 */
export const trackProductInterest = (
  productName: string,
  utmParams?: Record<string, string>
) => {
  // Clean product name for event
  const cleanProduct = productName.toLowerCase().replace(/[^a-z0-9]/g, '-');
  
  trackEvent(`product-${cleanProduct}`, {
    name: productName,
    source: utmParams?.utm_source || 'direct',
    medium: utmParams?.utm_medium || 'organic',
    campaign: utmParams?.utm_campaign || 'none'
  });
  
  // If there's a campaign, track product interest from that campaign
  if (utmParams?.utm_campaign) {
    trackEvent(`${utmParams.utm_campaign}-product`, {
      product: productName,
      source: utmParams.utm_source,
      medium: utmParams.utm_medium
    });
  }
};

/**
 * Track conversion with detailed attribution
 */
export const trackConversion = (
  conversionType: string,
  value?: number,
  utmParams?: Record<string, string>
) => {
  // Track general conversion
  trackEvent(`conversion-${conversionType}`, {
    value: value || 1,
    source: utmParams?.utm_source || 'direct',
    medium: utmParams?.utm_medium || 'organic',
    campaign: utmParams?.utm_campaign || 'none'
  });
  
  // Track campaign-specific conversion
  if (utmParams?.utm_source && utmParams?.utm_medium && utmParams?.utm_campaign) {
    const campaignPath = `${utmParams.utm_source}/${utmParams.utm_medium}/${utmParams.utm_campaign}`;
    trackEvent(`${campaignPath}-conversion`, {
      type: conversionType,
      value: value || 1
    });
  }
};

