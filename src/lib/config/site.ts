import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: (import.meta.env.URARA_SITE_DOMAIN as string) ?? 'www.kwchang0831.dev',
  title: '成功他媽．阿瑋',
  subtitle: '成功最終會回來找他媽的',
  lang: 'zh-TW',
  descr: 'Love to learn new stuff. Master of none.  Having fun is all it matters. YOLO!',
  author: {
    name: 'kwchang0831',
    photo: '/assets/maskable@192.avif',
    status: '❤️',
    bio: "Do it. Just do it!<br/>Don't let your dream be dream!<br/>",
    github: 'kwchang0831',
    discord: '968756691392942090'
  },
  themeColor: '#3D4451'
}
