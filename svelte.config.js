import preprocess from 'svelte-preprocess'
import adapterNode from '@sveltejs/adapter-node'
import adapterStatic from '@sveltejs/adapter-static'
import adapterNetlify from '@sveltejs/adapter-netlify'
import mdsvexConfig from './mdsvex.config.js'
import postcss from './postcss.config.js'
import UnoCSS from 'unocss/vite'
import { presetIcons, extractorSvelte } from 'unocss'
import { mdsvex } from 'mdsvex'

export default /** @type {import('@sveltejs/kit').Config} */ {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [mdsvex(mdsvexConfig), preprocess()],
  kit: {
    adapter: Object.keys(process.env).some(key => ['VERCEL', 'CF_PAGES', 'NETLIFY'].includes(key))
      ? adapterNetlify({ edge: true })
      : process.env.ADAPTER === 'node'
      ? adapterNode({ out: 'build' })
      : adapterStatic({
          pages: 'build',
          assets: 'build',
          fallback: null
        }),
    prerender: { default: true },
    serviceWorker: { register: false },
    vite: {
      mode: process.env.MODE || 'production',
      envPrefix: 'URARA_',
      css: { postcss },
      plugins: [
        UnoCSS({
          extractors: [extractorSvelte],
          presets: [
            presetIcons({
              customizations: {
                iconCustomizer: (_collection, _icon, props) => {
                  props.height = '1.5rem'
                  props.width = '1.5rem'
                  return props
                }
              }
            })
          ]
        })
      ]
    }
  }
}
