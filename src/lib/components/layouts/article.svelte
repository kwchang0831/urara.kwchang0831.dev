<script lang="ts" context="module">
  import Image from '$lib/components/extra/zoom.svelte'
  import table from '$lib/components/prose/table.svelte'
  export { Image as img, table }
</script>

<script lang="ts">
  import { browser } from '$app/env'
  import Head from '$lib/components/head.svelte'
  import Post from '$lib/components/layouts/_post.svelte'
  import Toc from '$lib/components/post_toc.svelte'
  import Cover from '$lib/components/post_cover.svelte'
  export let path = undefined
  export let created = undefined
  export let updated = undefined
  export let published = undefined
  export let tags = undefined
  export let flags = undefined

  export let title = undefined
  export let description = undefined
  export let summary = undefined
  export let cover = undefined
  export let coverText = undefined
  export let toc = undefined
</script>

<Head post={{ layout: 'article', created, updated, published, title, tags, description, summary, cover, coverText, path }} />

<Post layout="article" {path} {flags} {tags} {created} {updated} {published}>
  <div slot="right" class="hidden h-full xl:block">
    {#if browser && toc?.length > 1}
      <Toc {toc} />
    {/if}
  </div>
  <!-- <div slot="top" class="prose urara-prose">
    {#if cover}
      <Cover {cover} {coverText} imgClass="u-featured rounded-box w-full shadow-xl" />
    {/if}
  </div> -->
  <div slot="middle-bottom">
    <h1 itemprop="name headline" class="mb-8 text-3xl card-title p-name">{title ?? path.slice(1)}</h1>
    {#if summary}
      <p class="hidden p-summary">{summary}</p>
    {/if}
  </div>
  <main slot="content" itemprop="articleBody" class="prose urara-prose e-content">
    {#if cover}
      <Cover {cover} {coverText} imgClass="u-featured rounded-box w-full shadow-xl" />
    {/if}
    <slot />
  </main>
</Post>
