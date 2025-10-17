# UTM Tracking Guide - Auspex Medix Vision

## Overview
UTM (Urchin Tracking Module) parameters have been implemented across the entire application to track marketing campaign effectiveness and user acquisition sources. The system is fully integrated with **Umami Analytics** for comprehensive tracking and reporting.

## What are UTM Parameters?

UTM parameters are tags added to URLs to track the source, medium, and campaign of website traffic. They help you understand which marketing efforts are driving traffic and conversions.

### Standard UTM Parameters

1. **utm_source**: Identifies the source of traffic (e.g., google, newsletter, facebook)
2. **utm_medium**: Identifies the medium (e.g., cpc, email, social)
3. **utm_campaign**: Identifies the specific campaign (e.g., summer_sale, product_launch)
4. **utm_term**: Identifies paid search keywords (optional)
5. **utm_content**: Differentiates similar content or links (optional)

## How It Works

### Automatic Tracking
The application automatically captures UTM parameters from any URL and stores them:

- **Session Storage**: Parameters persist during the current browser session
- **Local Storage**: Parameters are saved with timestamp and landing page for long-term tracking
- **Umami Analytics**: All events are automatically sent to Umami for real-time analytics

### Umami Integration
The application is connected to Umami Analytics at `https://analytics.auspexmedix.com` with website ID `15ed5f98-2e4a-441d-8e91-e7123696aa1c`

### Example URLs

```
# Basic tracking
https://auspexmedix.com/?utm_source=google&utm_medium=cpc&utm_campaign=fall2024

# Complete tracking
https://auspexmedix.com/products?utm_source=newsletter&utm_medium=email&utm_campaign=product_launch&utm_content=button_cta

# Social media tracking
https://auspexmedix.com/contact?utm_source=facebook&utm_medium=social&utm_campaign=awareness
```

## Implementation Details

### Hook: `useUTMTracking`
Located in `src/hooks/useUTMTracking.ts`

```typescript
import { useUTMTracking } from '@/hooks/useUTMTracking';

// In your component
const { getUTMParams, getStoredUTMData } = useUTMTracking();

// Get current session UTM parameters
const currentUTM = getUTMParams();

// Get stored UTM data with timestamp and landing page
const storedData = getStoredUTMData();
```

### Umami Analytics Functions
Located in `src/lib/umami.ts`

```typescript
import { 
  trackEvent, 
  trackUTMCapture, 
  trackPageView,
  trackContactSubmission,
  trackProductInterest,
  trackButtonClick,
  trackOutboundLink,
  trackConversion
} from '@/lib/umami';

// Track custom event
trackEvent('custom_event_name', { key: 'value' });

// Track UTM capture (automatically called)
trackUTMCapture(utmParams);

// Track page view with UTM data
trackPageView('/about', utmParams);

// Track contact form submission
trackContactSubmission({
  subject: 'general',
  utm_source: 'google',
  utm_medium: 'cpc',
  utm_campaign: 'fall2024'
});

// Track product interest
trackProductInterest('Speech-Language Pathology', utmParams);

// Track button clicks
trackButtonClick('Get Started', 'hero_section', utmParams);

// Track outbound links
trackOutboundLink('https://mRehab.agency', 'mRehab Product');

// Track conversions
trackConversion('contact_form', 1, utmParams);
```

### Integrated in App.tsx
The UTM tracker is automatically initialized in the main App component, so all routes are tracked.

### Contact Form Integration
The contact form automatically includes UTM parameters when submitted, allowing you to track which campaigns generate leads.

## Using the UTM Debugger

For development and testing, you can use the UTM Debugger component:

```typescript
import { UTMDebugger } from '@/components/UTMDebugger';

// Add to any page during development
<UTMDebugger />
```

The debugger displays:
- Current URL parameters
- Session storage data
- Persistent storage data with timestamp and landing page

## Creating Campaign URLs

### Google Ads
```
https://auspexmedix.com/?utm_source=google&utm_medium=cpc&utm_campaign=brand_keywords&utm_term=medical_technology
```

### Email Campaign
```
https://auspexmedix.com/?utm_source=mailchimp&utm_medium=email&utm_campaign=newsletter_october&utm_content=hero_button
```

### Social Media
```
# Facebook
https://auspexmedix.com/?utm_source=facebook&utm_medium=social&utm_campaign=product_awareness

# LinkedIn
https://auspexmedix.com/?utm_source=linkedin&utm_medium=social&utm_campaign=b2b_outreach
```

### Partner Referrals
```
https://auspexmedix.com/?utm_source=partner_xyz&utm_medium=referral&utm_campaign=collaboration
```

## URL Builder Tool

Use Google's Campaign URL Builder for easy URL creation:
https://ga-dev-tools.google/campaign-url-builder/

## Best Practices

### Naming Conventions

1. **Use lowercase**: Always use lowercase for consistency
2. **Use underscores**: Separate words with underscores (e.g., `product_launch`)
3. **Be descriptive**: Use clear, meaningful names
4. **Stay consistent**: Use the same naming patterns across campaigns

### Examples of Good vs Bad

✅ **Good**
```
utm_source=google
utm_medium=cpc
utm_campaign=fall_product_launch_2024
```

❌ **Bad**
```
utm_source=Google%20Ads
utm_medium=PPC
utm_campaign=Campaign1
```

### Recommended Sources
- `google`, `bing`, `facebook`, `linkedin`, `twitter`, `instagram`
- `newsletter`, `email_signature`
- `partner_name`, `referral_site`

### Recommended Mediums
- `cpc` (cost per click / paid search)
- `email` (email campaigns)
- `social` (social media)
- `referral` (referral links)
- `display` (display advertising)
- `organic` (organic search - usually not needed)

## Tracking in Analytics

### Events Tracked in Umami

The following events are automatically tracked:

1. **utm_captured** - When UTM parameters are first detected
   - All UTM parameters
   - Landing page
   - Timestamp

2. **pageview** - Every page navigation
   - Path
   - Associated UTM parameters (if available)

3. **contact_form_submit** - Contact form submissions
   - Subject
   - All UTM parameters
   - Timestamp

4. **conversion** - Successful conversions
   - Conversion type (e.g., 'contact_form')
   - Value (optional)
   - Associated UTM parameters

5. **product_interest** - When users click on product links
   - Product name
   - Associated UTM parameters

6. **button_click** - Important button clicks
   - Button name
   - Location on page
   - Associated UTM parameters

7. **outbound_link** - External link clicks
   - URL
   - Link label

### Viewing Data in Umami

1. **Access Dashboard**: Navigate to `https://analytics.auspexmedix.com`
2. **Filter by Event**: Use the Events tab to see all tracked events
3. **UTM Reports**: Filter events by custom properties to see UTM attribution
4. **Conversion Funnel**: Track the journey from UTM capture to conversion

### Data Collected
For each interaction, the following data is collected:
- utm_source
- utm_medium
- utm_campaign
- utm_term
- utm_content
- Landing page
- Timestamp
- User path through the site

### Accessing Data
- **Umami Dashboard**: Real-time analytics at https://analytics.auspexmedix.com
- **Web3Forms**: Contact form data includes UTM parameters
- **Browser Storage**: Available via developer tools (localStorage/sessionStorage)

## Umami Analytics Setup

### Current Setup
The application is already configured with Umami Analytics:
- Script: `https://analytics.auspexmedix.com/script.js`
- Website ID: `15ed5f98-2e4a-441d-8e91-e7123696aa1c`
- Configuration: `index.html` (line 24)

### Custom Events
All custom events are defined in `src/lib/umami.ts` and use the Umami `track()` API:

```typescript
window.umami?.track('event_name', { ...eventData });
```

### Integration with Firebase (Optional Future Enhancement)

The current implementation can be extended to work with Firebase Analytics alongside Umami:

```typescript
// Optional future implementation
import { logEvent } from 'firebase/analytics';

// Log conversion with UTM data to both systems
logEvent(analytics, 'contact_form_submit', {
  utm_source: utmParams.utm_source,
  utm_medium: utmParams.utm_medium,
  utm_campaign: utmParams.utm_campaign,
});
```

## Testing UTM Tracking

### Manual Testing

1. **Open your application with UTM parameters:**
   ```
   http://localhost:5173/?utm_source=test&utm_medium=manual&utm_campaign=testing
   ```

2. **Add UTMDebugger component temporarily:**
   ```typescript
   // In App.tsx (for development only)
   import { UTMDebugger } from '@/components/UTMDebugger';
   
   // Add before closing tags
   {process.env.NODE_ENV === 'development' && <UTMDebugger />}
   ```

3. **Navigate to different pages** - UTM parameters should persist in session storage

4. **Check localStorage** in browser DevTools:
   - Open DevTools (F12)
   - Go to Application > Local Storage
   - Look for `utm_params` key

5. **Submit contact form** - UTM parameters will be included in the submission

### Testing Checklist

- [ ] UTM parameters are captured from URL
- [ ] Parameters persist across page navigation
- [ ] Parameters are stored in sessionStorage
- [ ] Parameters are stored in localStorage with timestamp
- [ ] Contact form includes UTM data in submission
- [ ] Multiple campaigns can be tracked over time

## Troubleshooting

### Parameters Not Captured
- Ensure URL has valid UTM parameters
- Check browser console for any errors
- Verify UTMTracker component is rendered in App.tsx

### Parameters Not in Form Submission
- Check that Contact.tsx imports and uses `useUTMTracking`
- Verify getUTMParams() is called before form submission
- Check browser network tab to see form data

### Storage Issues
- Check browser privacy settings
- Verify localStorage is enabled
- Clear storage and retry: `localStorage.clear()` in console

## Campaign Examples

### Product Launch
```
Newsletter: ?utm_source=mailchimp&utm_medium=email&utm_campaign=wound_care_launch
Social: ?utm_source=linkedin&utm_medium=social&utm_campaign=wound_care_launch
Ads: ?utm_source=google&utm_medium=cpc&utm_campaign=wound_care_launch
```

### Event Promotion
```
?utm_source=eventbrite&utm_medium=referral&utm_campaign=medical_tech_conference_2024
```

### Partner Collaboration
```
?utm_source=university_buffalo&utm_medium=referral&utm_campaign=research_partnership
```

## Support

For questions about UTM tracking implementation:
- Review this documentation
- Check `src/hooks/useUTMTracking.ts` for implementation details
- Use UTMDebugger component during development
- Contact the development team

## Future Enhancements

Planned improvements:
- Firebase Analytics integration
- Custom conversion tracking
- Campaign performance dashboard
- A/B testing integration
- Advanced attribution modeling

