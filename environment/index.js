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

export default {
  channels,
  links
}
