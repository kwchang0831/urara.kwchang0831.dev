import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
  comment: {
    use: ['Giscus'],
    style: 'boxed',
    giscus: {
      src: 'https://giscus.app/client.js',
      repo: 'kwchang0831/kwchang0831.dev',
      repoID: 'R_kgDOHPrjlQ',
      category: 'Comments',
      categoryID: 'DIC_kwDOHPrjlc4CO0AG',
      mapping: 'pathname',
      reactionsEnabled: true,
      emitMetadata: false,
      lang: 'zh-TW',
      theme: 'dark'
    }
  }
}
