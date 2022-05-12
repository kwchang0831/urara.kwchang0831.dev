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
  import IconTrash from '~icons/heroicons-outline/trash'
</script>

{#if post.layout === 'photo'}
  <article
    itemscope
    itemtype="https://schema.org/BlogPosting"
    itemprop="blogPost"
    class="h-entry card image-full before:!bg-transparent bg-base-100 rounded-none md:rounded-box">
    <figure>
      <Image class="u-photo object-cover object-center h-full w-full" src={post.banner} {loading} {decoding} />
    </figure>

    <div class="card-body mt-auto">
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
          class="u-featured object-center h-full w-full absolute group-hover:scale-110 transition-transform duration-500 ease-in-out"
          src={post.banner}
          {loading}
          {decoding} />
      </figure>
    {/if}

    {#if post.series_title}
      <div class="card-title mb-6 flex gap-0 items-stretch group-hover:decoration-primary">
        <span class="md:rounded-tl-2xl bg-green-500 py-2">
          <span class="pl-4 pr-3 font-bold text-sm text-black">{post.series_title}</span>
        </span>
        {#if post.series_name}
          <span class="border-b border-green-800 flex-1 md:rounded-tr-2xl py-2">
            <span class="px-3 text-sm font-semibold text-neutral-100 bg-neutral-800 align-middle tracking-wide">
              {post.series_name}
            </span>
          </span>
        {/if}
      </div>
    {:else}
      <div class="card-title py-4" />
    {/if}

    <div
      class="card-body py-0 {post.layout === 'article' && post.banner
        ? 'md:col-start-1 md:row-start-1 md:text-neutral-content md:z-20'
        : ''}">
      {#if post.layout === 'reply'}
        <Reply inReplyTo={post.inReplyTo} class="-mt-4 -mx-4 mb-4" />
      {/if}
      {#if post.layout === 'article'}
        <h1
          itemprop="name headline"
          class="card-title text-2xl mr-auto bg-[length:100%_0%] bg-[position:0_88%] underline decoration-4 decoration-transparent group-hover:decoration-primary hover:bg-[length:100%_100%] hover:text-primary-content bg-gradient-to-t from-primary to-primary bg-no-repeat transition-all ease-in-out duration-300">
          <a itemprop="url" class="u-url p-name" href={post.path}>{post.title ?? post.path.slice(1)}</a>
        </h1>
        {#if post.summary}
          <p itemprop="description" class="p-summary mb-auto">{post.summary}</p>
        {/if}
      {/if}
      {@html post.html}
    </div>

    <div class="card-actions justify-end px-6 py-4">
      <Status {post} index={true} featured={post.layout === 'article' && post.photo ? true : false} />
    </div>
  </article>
{/if}
