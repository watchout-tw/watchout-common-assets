class Channel {
  constructor(id, name, home, useDarkText = false) {
    this.id = id
    this.name = name
    this.classes = {
      backgroundColor: {
        opaque: 'bg-' + id,
        light: 'bg-' + id + '-light'
      }
    }
    this.links = {
      home: home
    }
    this.useDarkText = useDarkText
    this.showSwitcher = id !== 'watchout'
  }
}

export default {
  core: new Channel('core', '運算核心', 'https://core.watchout.tw/', true),
  console: new Channel('console', '中控室', 'https://console.watchout.tw'),
  park: new Channel('park', '中央公園', 'https://park.watchout.tw/'),
  kangsim: new Channel('kangsim', '找共識', 'https://park.watchout.tw/kangsim'),
  lab: new Channel('lab', '議題實驗室', 'https://lab.watchout.tw/'),
  musou: new Channel('musou', '國會無雙', 'https://musou.tw/', true),
  'musou-media-experiment': new Channel('musou-media-experiment', '國會無雙媒體實驗', 'https://musou.watchout.tw/', true),
  ask: new Channel('ask', '給問擂台', 'https://ask.watchout.tw/'),
  edu: new Channel('edu', '公民學院', 'https://citizenedu.tw/'),
  c0ngress: new Channel('c0ngress', '野生國會', 'https://c0ngress.watchout.tw/', true),
  watchout: new Channel('watchout', '沃草', 'https://watchout.tw/')
}
