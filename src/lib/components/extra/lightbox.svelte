<script lang="ts">
  import { Lightbox } from 'svelte-lightbox'
  let className = undefined
  export { className as class }
  export let src = undefined
  export let alt = undefined
  export let loading: 'lazy' | 'eager' = 'lazy'
  export let decoding: 'async' | 'sync' | 'auto' = 'async'
</script>

<Lightbox>
  <img {src} {alt} class="u-photo {className ?? 'rounded-lg my-2'}" {loading} {decoding} />
</Lightbox>
