import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackUTMCapture, trackPageView } from '@/lib/umami';

/**
 * Hook to capture and store UTM parameters from URL
 * UTM parameters: utm_source, utm_medium, utm_campaign, utm_term, utm_content
 * Integrates with Umami Analytics for tracking
 */
export const useUTMTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const utmParams: Record<string, string> = {};

    // Capture all UTM parameters
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    
    utmKeys.forEach(key => {
      const value = searchParams.get(key);
      if (value) {
        utmParams[key] = value;
      }
    });

    // If we have any UTM parameters, store them
    if (Object.keys(utmParams).length > 0) {
      // Store in sessionStorage (persists during session)
      sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
      
      // Store in localStorage (persists across sessions) with timestamp
      const storedData = {
        params: utmParams,
        timestamp: new Date().toISOString(),
        landingPage: location.pathname
      };
      localStorage.setItem('utm_params', JSON.stringify(storedData));
      
      console.log('UTM Parameters captured:', utmParams);
      
      // Track UTM capture in Umami
      trackUTMCapture({
        ...utmParams,
        landing_page: location.pathname
      });
    }
    
    // Track page view with UTM parameters if available
    const storedUTM = sessionStorage.getItem('utm_params');
    const parsedUTM = storedUTM ? JSON.parse(storedUTM) : null;
    trackPageView(location.pathname, parsedUTM);
  }, [location]);

  // Return function to get stored UTM params
  const getUTMParams = () => {
    const sessionData = sessionStorage.getItem('utm_params');
    return sessionData ? JSON.parse(sessionData) : null;
  };

  const getStoredUTMData = () => {
    const storedData = localStorage.getItem('utm_params');
    return storedData ? JSON.parse(storedData) : null;
  };

  return {
    getUTMParams,
    getStoredUTMData
  };
};

