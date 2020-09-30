export const GA_TRACKING_ID = process.env.GOOGLE_ANALYTICS_ID

// IDが取得できない場合
export const existsGaId = GA_TRACKING_ID !== ''

// PVを測定する
export const pageview = (path) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: path,
  })
}

// GAイベントを発火させる
export const event = ({action, category, label, value = ''}) => {
  if (!existsGaId) {
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value: value,
  })
}