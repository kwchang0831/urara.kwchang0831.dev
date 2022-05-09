<script lang="ts">
  import { site } from '$lib/config/site'
  import { footer as footerConfig } from '$lib/config/general'
  let className: string = undefined
  export { className as class }
  export let sticky: boolean = false
  export let rounded: boolean = false
  import Feed from '~icons/ic/baseline-rss-feed'
  import Sitemap from '~icons/mdi/sitemap-outline'
</script>

<footer
  id="footer"
  class="footer footer-center bg-base-300 text-base-content shadow-inner p-8 {rounded
    ? 'rounded-box'
    : 'md:rounded-box'} {sticky ? 'sticky bottom-0 z-0 md:static' : ''} {className ?? ''}">
  <div class="prose">
    <p>
      {#if footerConfig.nav}
        {#each footerConfig.nav as { text, link }, i}
          <a href={link} rel="noopener external" target="_blank">{text}</a>
          {#if i + 1 < footerConfig.nav.length}
            <span class="mr-1">•</span>
          {/if}
        {/each}
        <br />
      {/if}
      <a href="/atom.xml" rel="noopener external" target="_blank">
        <Feed class="align-middle inline-block w-5 h-5" />
        Feed
      </a>
      <span class="mr-1">•</span>
      <a href="/sitemap.xml" rel="noopener external" target="_blank">
        <Sitemap class="align-middle inline-block w-5 h-5" />
        Sitemap
      </a>
      <br />
      Copyright © {footerConfig.since && footerConfig.since !== new Date().toJSON().substring(0, 4)
        ? `${footerConfig.since} - ${new Date().toJSON().substring(0, 4)}`
        : new Date().toJSON().substring(0, 4)}
      <a href="https://github.com/{site.author.github}">{site.author.name}</a>
      <br />
      <span xmlns:cc="https://creativecommons.org/ns#" xmlns:dct="https://purl.org/dc/terms/">
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
          style="display:inline-block;">
          CC BY-NC-SA 4.0
        </a>
      </span>
      {#if footerConfig.html}
        <br />
        {@html footerConfig.html}
      {/if}
      <br />
      Powered by
      <a
        rel="noopener external"
        target="_blank"
        class="tooltip tooltip-secondary hover:text-secondary"
        data-tip="🌸 [γ] - Based on MDsveX & SvelteKit 🌸"
        href="https://github.com/importantimport/urara">
        Urara
      </a>
    </p>
  </div>
</footer>
