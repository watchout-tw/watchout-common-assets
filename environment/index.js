import channels from './channels'

const https = 'https://'
const rootURL = https + 'watchout.tw' + '/'
const links = {
  home: rootURL,
  support: {
    general: rootURL + '#support',
    watchout: {
      custom: 'https://member.watchout.tw/',
      direct: 'https://member.watchout.tw/'
    },
    ask: {
      direct: 'https://member.watchout.tw/'
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
