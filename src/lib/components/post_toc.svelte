<script lang="ts" context="module">
  export const prerender = true
</script>

<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import Tree from '$lib/components/post_toc_tree.svelte'
  export let toc: Urara.Post.Article.Toc[]

  let intersecting: string[] = []
  let intersectingArticle: boolean = true
  let bordered: string[] = []
  let pos = { top: 0, left: 0, x: 0, y: 0 }

  onMount(() => {
    if (window.screen.availWidth >= 1280) {
      const headingsObserver = new IntersectionObserver(
        headings =>
          headings.forEach(heading =>
            heading.isIntersecting
              ? intersecting.push(heading.target.id)
              : (intersecting = intersecting.filter(h => h !== heading.target.id))
          ),
        { rootMargin: '-64px 0px 0px 0px' }
      )
      const articleObserver = new IntersectionObserver(article => (intersectingArticle = article[0].isIntersecting))
      Array.from(document.querySelectorAll('main h2, main h3, main h4, main h5, main h6')).forEach(element =>
        headingsObserver.observe(element)
      )
      articleObserver.observe(document.getElementsByTagName('main')[0])
    }
  })

  onDestroy(() => {
    // @ts-ignore: Cannot find name 'headingsObserver'
    if (typeof headingsObserver !== 'undefined') headingsObserver.disconnect()
    // @ts-ignore: Cannot find name 'articleObserver'
    if (typeof headingsObserver !== 'undefined') articleObserver.disconnect()
  })

  $: if (intersecting.length > 0) bordered = intersecting
  $: if (intersectingArticle === false) bordered = []
  $: if (bordered)
    toc.forEach(heading =>
      bordered.includes(heading.slug)
        ? document.getElementById(`toc-link-${heading.slug}`)?.classList.add('!border-accent')
        : document.getElementById(`toc-link-${heading.slug}`)?.classList.remove('!border-accent')
    )

  function mouseDownHandler(e) {
    const post_toc = document.getElementById('post-toc')
    post_toc.style.cursor = 'grabbing'
    post_toc.style.userSelect = 'none'

    pos = {
      left: post_toc.scrollLeft,
      top: post_toc.scrollTop,
      x: e.clientX,
      y: e.clientY
    }

    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
  }

  function mouseMoveHandler(e) {
    const post_toc = document.getElementById('post-toc')
    const dx = e.clientX - pos.x
    const dy = e.clientY - pos.y
    post_toc.scrollTop = pos.top + dy
    post_toc.scrollLeft = pos.left - dx
  }

  function mouseUpHandler() {
    const post_toc = document.getElementById('post-toc')
    post_toc.style.cursor = 'grab'
    post_toc.style.removeProperty('user-select')

    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)
  }

  // post_toc.addEventListener('mousedown', mouseDownHandler)
</script>

<aside class="sticky py-8 top-16">
  <nav
    id="post-toc"
    aria-label="TableOfContent"
    dir="rtl"
    class="no-scrollbar max-h-[calc(100vh-12rem)] overflow-y-auto"
    on:mousedown={mouseDownHandler}>
    <Tree
      toc={toc.reduce(
        (acc, heading) => {
          let parent = acc
          while (parent.depth + 1 < heading.depth) parent = parent.children.at(-1)
          parent.children = [...(parent.children ?? []), { ...heading, children: [] }]
          return acc
        },
        { depth: toc[0].depth - 1, children: [] }
      )} />
  </nav>
</aside>

<style>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
