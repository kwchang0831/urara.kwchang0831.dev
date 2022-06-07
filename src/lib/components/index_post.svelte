<script lang="ts">
  import Status from '$lib/components/post_status.svelte'
  import Reply from '$lib/components/post_reply.svelte'
  import Image from '$lib/components/prose/img.svelte'
  export let post: Urara.Post
  export let loading: 'eager' | 'lazy' = 'lazy'
  export let decoding: 'async' | 'sync' | 'auto' = 'async'

  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import { page } from '$app/stores'
  import { browser } from '$app/env'
  import { posts as storedPosts, tags as storedTags } from '$lib/stores/posts'
  import Head from '$lib/components/head.svelte'
  import Footer from '$lib/components/footer.svelte'
  import Post from '$lib/components/index_post.svelte'
  import Profile from '$lib/components/index_profile.svelte'
</script>

{#if post.layout === 'photo'}
  <article
    itemscope
    itemtype="https://schema.org/BlogPosting"
    itemprop="blogPost"
    class="h-entry card image-full before:!bg-transparent bg-base-100 rounded-none md:rounded-box">
    <figure>
      <Image class="object-cover object-center w-full h-full u-photo" src={post.banner} {loading} {decoding} />
    </figure>

    <div class="mt-auto card-body">
      <Status {post} index={true} photo={true} />
    </div>
  </article>
{:else}
  <article
    itemscope
    itemtype="https://schema.org/BlogPosting"
    itemprop="blogPost"
    class="h-entry card bg-base-100 rounded-none md:rounded-box group {post.layout === 'article' && post.banner
      ? 'image-full before:!rounded-none'
      : ''}">
    {#if post.layout === 'article' && post.banner}
      <figure class="!block">
        <Image
          class="absolute object-center w-full h-full transition-transform duration-500 ease-in-out u-featured group-hover:scale-110"
          src={post.banner}
          {loading}
          {decoding} />
      </figure>
    {/if}

    {#if post.series_title}
      <div class="flex items-stretch gap-0 mb-6 card-title group-hover:decoration-primary">
        <span class="py-2 bg-green-500 rounded-r-2xl md:rounded-tr-none md:rounded-br-2xl">
          <span class="pl-4 pr-3 text-sm font-bold text-black">{post.series_title}</span>
        </span>
        {#if post.series_name}
          <span class="flex-1 py-2 md:rounded-tr-2xl">
            <span class="px-3 text-sm font-semibold tracking-wide align-middle text-neutral-100 bg-neutral-800">
              {post.series_name}
            </span>
          </span>
        {/if}
      </div>
    {:else}
      <div class="py-4 card-title" />
    {/if}

    <div
      class="card-body py-0 {post.layout === 'article' && post.banner
        ? 'md:col-start-1 md:row-start-1 md:text-neutral-content md:z-20'
        : ''}">
      {#if post.layout === 'reply'}
        <Reply inReplyTo={post.inReplyTo} class="mb-4 -mx-4 -mt-4" />
      {/if}
      {#if post.layout === 'article'}
        <h2
          itemprop="name headline"
          class="card-title text-2xl mr-auto bg-[length:100%_0%] bg-[position:0_88%] underline decoration-4 decoration-transparent group-hover:decoration-primary hover:bg-[length:100%_100%] hover:text-primary-content bg-gradient-to-t from-primary to-primary bg-no-repeat transition-all ease-in-out duration-300">
          <a itemprop="url" class="u-url p-name" href={post.path}>{post.title ?? post.path.slice(1)}</a>
        </h2>
        {#if post.summary}
          <p itemprop="description" class="mb-auto p-summary">{post.summary}</p>
        {/if}
      {/if}
      {@html post.html}
    </div>

    <div class="justify-end px-6 py-4 card-actions">
      <Status {post} index={true} featured={post.layout === 'article' && post.photo ? true : false} />
    </div>
  </article>
{/if}
