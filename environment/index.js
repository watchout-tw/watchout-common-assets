import channels from './channels'

const https = 'https://'
const rootURL = https + 'watchout.tw' + '/'
const links = {
  home: rootURL,
  support: {
    general: rootURL + '#support',
    ask: {
      direct: 'https://member.watchout.tw/'
    },
    musou: {
      custom: 'https://member.watchout.tw/?utm_source=musou&utm_medium=website&utm_content=1229',
      direct: 'https://member.watchout.tw'
    },
    watchout: {
      custom: 'https://member.watchout.tw/?utm_source=main&utm_medium=website&utm_content=1229',
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
