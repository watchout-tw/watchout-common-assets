import channels from './channels'

const https = 'https://'
const rootURL = https + 'watchout.tw' + '/'
const links = {
  home: rootURL,
  support: {
    general: rootURL + '#support',
    watchout: {
      custom: 'https://watchout.backme.tw/checkout/332/7818',
      direct: 'https://watchout.backme.tw/checkout/332/7818'
    },
    ask: {
      direct: 'https://watchout.backme.tw/checkout/332/7818'
    }
  },
  contact: rootURL + 'contact',
  bunko: {
    beta: 'https://beta.bunko.watchout.tw/',
    production: 'https://bunko.watchout.tw/'
  }
}

export default {
  channels,
  links
}
