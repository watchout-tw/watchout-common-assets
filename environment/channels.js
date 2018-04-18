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
      home: home
    }
    this.switcher = {
      show: true,
      dark: ['musou', 'musou-media-experiment', 'bunko', 'maa'].includes(id),
      iconOnly: id === 'watchout'
    }
  }
}

export default {
  core: new Channel('core', '運算核心', 'https://core.watchout.tw/'),
  console: new Channel('console', '中控室', 'https://console.watchout.tw'),
  park: new Channel('park', '中央公園', 'https://park.watchout.tw/'),
  kangsim: new Channel('kangsim', '找共識', 'https://park.watchout.tw/kangsim'),
  lab: new Channel('lab', '議題實驗室', 'https://lab.watchout.tw/'),
  musou: new Channel('musou', '國會無雙', 'https://musou.tw/'),
  'musou-media-experiment': new Channel('musou-media-experiment', '國會無雙媒體實驗', 'https://musou.watchout.tw/', true),
  ask: new Channel('ask', '給問擂台', 'https://ask.watchout.tw/'),
  edu: new Channel('edu', '公民學院', 'https://citizenedu.tw/'),
  c0ngress: new Channel('c0ngress', '野生國會', 'https://c0ngress.watchout.tw/'),
  maa: new Channel('maa', '草漫', 'https://maa.watchout.tw/'),
  vendor: new Channel('vendor', '草地攤販', 'https://vendor.watchout.tw/'),
  watchout: new Channel('watchout', '沃草', 'https://watchout.tw/')
}
