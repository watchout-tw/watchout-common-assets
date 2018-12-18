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
      direct: 'https://watchout.backme.tw/checkout/332/2688'
    }
  },
  contact: rootURL + 'contact',
  bunko: {
    beta: 'https://beta.bunko.watchout.tw'
  }
}
const announcements = {
  rows: [
    {
      type: 'breaking',
      channel: 'system',
      content: '你知道今年11月24日將有什麼大事發生嗎？四年一度的各地縣市長PK，激戰即將展開。到底誰能勝出？請密切關注：沃草2018《六都市長給問嗎》',
      action: {
        label: '點我前往',
        link: 'https://ask.watchout.tw/'
      }
    }
    /*
    {
      type: 'livestream',
      channel: 'ask',
      content: '2018台北市長給問嗎？第一場辯論會直播即將開始！',
      action: {
        label: '點我前往',
        link: 'https://waa.tw/g90Jdf'
      }
    }
    */
  ]
}

export default {
  channels,
  links,
  announcements
}
