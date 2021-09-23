class Channel {
  constructor(id, name, home) {
    let colorID = id === 'musou-media-experiment' ? 'musou' : id
    this.id = id
    this.name = name
    this.classes = {
      backgroundColor: {
        opaque: 'bg-' + colorID,
        light: 'bg-' + colorID + '-light'
      }
    }
    this.links = {
      home
    }
    this.dark = ['musou', 'musou-media-experiment', 'bunko', 'maa'].includes(id)
    this.switcher = {
      show: true,
      iconOnly: id === 'watchout'
    }
    this.pages = []
  }
}

class Page extends Channel {
  constructor(id, name, home, page) {
    super(id, name, home)
    this.pageID = page
    this.classes = {
      backgroundColor: {
        opaque: 'bg-' + page
      }
    }
  }
}

let watchout = new Channel('watchout', '沃草', 'https://watchout.tw/')
let antiNuclear = new Page('watchout', '反核專題', '/projects/anti-nuclear', 'anti-nuclear')
watchout.pages.push(antiNuclear)

export default {
  core: new Channel('core', '運算核心', 'https://core.watchout.tw/'),
  console: new Channel('console', '中控室', 'https://console.watchout.tw'),
  park: new Channel('park', '中央公園', 'https://park.watchout.tw/'),
  kangsim: new Channel('kangsim', '找共識', 'https://park.watchout.tw/kangsim'),
  lab: new Channel('lab', '議題實驗室', 'https://lab.watchout.tw/'),
  musou: new Channel('musou', '國會無雙', 'https://musou.watchout.tw/'),
  ask: new Channel('ask', '給問擂台', 'https://ask.watchout.tw/'),
  uc: new Channel('uc', '公民學院', 'https://uc.watchout.tw/'),
  c0ngress: new Channel('c0ngress', '野生國會', 'https://c0ngress.watchout.tw/'),
  maa: new Channel('maa', '草漫', 'https://maa.watchout.tw/'),
  vendor: new Channel('vendor', '草地攤販', 'https://vendor.watchout.tw/'),
  watchout: watchout
}
