<script lang="ts">
  import Image from '$lib/components/extra/zoom.svelte'
  export let cover: Urara.Post.Article['cover']
  export let coverText: Urara.Post.Article['coverText']
  export let imgClass: string
  export let loading: 'eager' | 'lazy' = 'lazy'
  export let decoding: 'async' | 'sync' | 'auto' = 'async'
</script>

<Image class="margin-y-0 u-photo {imgClass}" src={cover} alt={cover} {loading} {decoding}>
  {@html coverText}
</Image>
