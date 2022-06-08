<script lang="ts">
  import { onMount } from 'svelte'
  import mediumZoom from 'medium-zoom'

  import { fly } from 'svelte/transition'
  import { browser } from '$app/env'
  import { posts as storedPosts } from '$lib/stores/posts'
  import { title as storedTitle } from '$lib/stores/title'
  import { post as postConfig } from '$lib/config/post'
  import Status from '$lib/components/post_status.svelte'
  import Pagination from '$lib/components/post_pagination.svelte'
  import Comment from '$lib/components/post_comment.svelte'
  import Footer from '$lib/components/footer.svelte'

  export let layout: Urara.Post['layout']
  export let created: Urara.Post['created']
  export let updated: Urara.Post['updated']
  export let published: Urara.Post['published'] = undefined
  export let tags: Urara.Post['tags'] = undefined
  export let path: Urara.Post['path']
  export let flags: Urara.Post['flags'] = undefined

  let posts: Urara.Post[]
  let post: Urara.Post
  let index: number
  let prev: Urara.Post
  let next: Urara.Post

  $: if (browser)
    storedPosts.subscribe(storedPosts => {
      posts = storedPosts as Urara.Post[]
      post = posts.find(post => post.path === path)
      index = posts.findIndex(post => post.path === path)
      prev = posts
        .slice(0, index)
        .reverse()
        .find(post => !post.flags?.includes('unlisted'))
      next = posts.slice(index + 1).find(post => !post.flags?.includes('unlisted'))
      storedTitle.set(post.title)
    })

  onMount(() => {
    mediumZoom('[data-zoomable]', {
      scrollOffset: 0,
      background: 'rgba(25, 18, 25, .9)'
    })
  })
</script>

<div class="flex flex-col justify-center flex-nowrap xl:flex-row xl:flex-wrap">
  <div
    in:fly={{ x: 25, duration: 300, delay: 500 }}
    out:fly={{ x: 25, duration: 300 }}
    class="flex-1 order-first w-full max-w-screen-md mx-auto ease-out transform xl:mr-0">
    <slot name="left" />
  </div>
  <div
    in:fly={{ x: -25, duration: 300, delay: 500 }}
    out:fly={{ x: -25, duration: 300 }}
    class="flex-1 w-full max-w-screen-md mx-auto ease-out transform xl:order-last xl:mr-0">
    <slot name="right" />
  </div>
  <div class="flex-none w-full max-w-screen-md mx-auto xl:mx-0">
    <div class="z-10 rounded-none card bg-base-100 md:rounded-box md:shadow-xl md:mb-8 lg:mb-16">
      <article itemscope itemtype="https://schema.org/BlogPosting" class="h-entry">
        {#if postConfig.bridgy}
          <div id="bridgy" class="hidden">
            {#each flags?.some( flag => flag.startsWith('bridgy') ) ? flags.flatMap( flag => (flag.startsWith('bridgy') ? flag.slice(7) : []) ) : [...(postConfig.bridgy.post ?? []), ...(postConfig.bridgy[layout] ?? [])] as target}
              {#if target === 'fed'}
                <a href="https://fed.brid.gy/">fed</a>
              {:else}
                <a href="https://brid.gy/publish/{target}">{target}</a>
              {/if}
            {/each}
          </div>
        {/if}
        <slot name="top" />
        <div class="gap-0 card-body">
          <slot name="middle-top" />
          <Status post={{ layout, created, updated, published, path, flags }} />
          <slot name="middle-bottom" />
          <slot name="content" />
          {#if tags}
            <div class="mt-4 mb-0 divider" />
            <div>
              {#each tags as tag}
                <a href="/?tags={tag}" class="mt-2 mr-2 normal-case btn btn-sm btn-ghost p-category">
                  #{tag}
                </a>
              {/each}
            </div>
          {/if}
        </div>
      </article>
      {#if (prev || next) && !flags?.includes('pagination-disabled') && !flags?.includes('unlisted')}
        <Pagination {next} {prev} />
      {/if}
      {#if browser && postConfig.comment && !flags?.includes('comment-disabled')}
        <Comment {post} config={postConfig.comment} />
      {/if}
    </div>
    <Footer sticky={true} />
  </div>
</div>
