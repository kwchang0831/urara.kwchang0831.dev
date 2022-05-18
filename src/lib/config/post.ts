import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
  comment: {
    use: ['Giscus', 'Webmention'],
    style: 'boxed',
    giscus: {
      src: 'https://giscus.kwchang0831.dev/client.js',
      repo: 'kwchang0831/kwchang0831.dev',
      repoID: 'R_kgDOHPrjlQ',
      category: 'Comments',
      categoryID: 'DIC_kwDOHPrjlc4CO0AG',
      mapping: 'title',
      inputPosition: 'top',
      reactionsEnabled: true,
      emitMetadata: false,
      loading: 'lazy',
      lang: 'zh-TW',
      theme: 'dark'
    },
    webmention: {
      username: 'www.kwchang0831.dev',
      sortBy: 'created',
      sortDir: 'down',
      form: true,
      commentParade: true
    },
  }
}
