export const GA_TRACKING_ID = 'UA-179321821-1'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  try {
    if (window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      })
    }
  } catch(error) {
    console.log("Error from the trackerPageView => ", error);
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}