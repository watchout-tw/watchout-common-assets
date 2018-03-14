import channels from './channels'

const https = 'https://'
const rootURL = https + 'watchout.tw' + '/'
const links = {
  home: rootURL,
  support: {
    general: rootURL + '#support',
    watchout: {
      custom: 'https://watchout.backme.tw/checkout/332/2688',
      direct: 'https://watchout.backme.tw/checkout/332/2686'
    },
    ask: {
      direct: 'https://watchout.backme.tw/checkout/332/2686'
    }
  },
  contact: rootURL + 'contact'
}
const announcements = {
  rows: [
    {
      type: 'breaking',
      channel: 'system',
      content: '今日下午5:87在火星東經123度、北緯23.5度發生規模4.2級的地震。'
    },
    {
      type: 'livestream',
      channel: 'ask',
      content: '2018台北市長給問嗎？第一場辯論會直播即將開始！',
      action: {
        label: '點我前往',
        link: 'https://waa.tw/g90Jdf'
      }
    }
  ]
}

export default {
  channels,
  links,
  announcements
}
