import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'business',
    text: '🗄️ Business'
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
    name: 'emerald',
    text: '✳️ Emerald'
  },
  {
    name: 'corporate',
    text: '🏢 Corporate'
  },
  {
    name: 'valentine',
    text: '🌸 Valentine'
  },
  {
    name: 'synthwave',
    text: '🌃 Synthwave'
  },
  {
    name: 'retro',
    text: '🌇 Retro'
  },
  {
    name: 'cyberpunk',
    text: '🌐 Cyberpunk'
  },
  {
    name: 'halloween',
    text: '🎃 Halloween'
  },
  {
    name: 'garden',
    text: '🏡 Garden'
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
    name: 'lofi',
    text: '🎶 Lo-Fi'
  },
  {
    name: 'pastel',
    text: '🌈 Pastel'
  },
  {
    name: 'fantasy',
    text: '🐣 Fantasy'
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
    name: 'luxury',
    text: '💰 Luxury'
  },
  {
    name: 'dracula',
    text: '🧛 Dracula'
  },
  {
    name: 'cmyk',
    text: '🖨️ CMYK'
  },
  {
    name: 'autumn',
    text: '🍂 Autumn'
  },
  {
    name: 'acid',
    text: '🌧️ Acid'
  },
  {
    name: 'lemonade',
    text: '🍋 Lemonade'
  },
  {
    name: 'night',
    text: '🌃 Night'
  },
  {
    name: 'coffee',
    text: '☕ Coffee'
  },
  {
    name: 'winter',
    text: '❄️ Winter'
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
      text: '關於',
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
      day: 'numeric'
    }
  },
  toUpdatedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    }
  }
}

export const feed: FeedConfig = {}
