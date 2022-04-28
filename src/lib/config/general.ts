import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'default',
    text: '❤️ default'
  },
  {
    name: 'light',
    text: '🌕 Light'
  },
  {
    name: 'dark',
    text: '🌑 Dark'
  },
  {
    name: 'cupcake',
    text: '🧁 Cupcake'
  },
  {
    name: 'bumblebee',
    text: '🐝 Bumblebee'
  },
  {
    name: 'synthwave',
    text: '🌃 Synthwave'
  },
  {
    name: 'halloween',
    text: '🎃 Halloween'
  },
  {
    name: 'forest',
    text: '🌲 Forest'
  },
  {
    name: 'aqua',
    text: '💦 Aqua'
  },
  {
    name: 'pastel',
    text: '🌈 Pastel'
  },
  {
    name: 'wirefream',
    text: '📱 Wireframe'
  },
  {
    name: 'black',
    text: '🖤 Black'
  },
  {
    name: 'business',
    text: '🗄️ Business'
  },
  {
    name: 'luxury',
    text: '💰 Luxury'
  },
  {
    name: 'dracula',
    text: '🧛 Dracula'
  },
  {
    name: 'night',
    text: '🌃 Night'
  },
  {
    name: 'coffee',
    text: '☕ Coffee'
  },
]

export const head: HeadConfig = {
  custom: {
    prod: [
      // Preconnect
      '<link href="https://umami.kwchang0831.dev" rel="preconnect" crossorigin>',
      // Umami Analytics
      '<script async defer data-website-id="e29bb16a-1e2e-48e6-8812-5d7bb04204b7" src="https://umami.kwchang0831.dev/umami.js"></script>'
    ]
  },
}

export const header: HeaderConfig = {
  search: {
    provider: 'duckduckgo'
  },
  nav: [
    {
      text: '關於我',
      link: '/about',
      datatip: 'about me'
    },
  ]
}

export const footer: FooterConfig = {
  // nav: [
  //   {
  //     text: 'Feed',
  //     link: '/atom.xml'
  //   },
  //   {
  //     text: 'Sitemap',
  //     link: '/sitemap.xml'
  //   }
  // ]
}

export const date: DateConfig = {
  toPublishedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: 'Asia/Taipei'
    }
  },
  toUpdatedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: 'Asia/Taipei'
    }
  }
}

export const feed: FeedConfig = {}
