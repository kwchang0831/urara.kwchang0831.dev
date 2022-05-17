<script lang="ts">
  let className = undefined
  export { className as class }
  export let src: string
  export let alt: string = src
  export let loading: 'eager' | 'lazy' = 'lazy'
  export let decoding: 'async' | 'sync' | 'auto' = 'async'
  export let figcaptionClass: string = 'italic'
</script>

<figure class="flex flex-col mx-4 md:mx-0 w-auto">
  <img data-zoomable {src} {alt} class="z-50 u-photo {className ?? 'rounded-lg my-2'}" {loading} {decoding} />
  {#if $$slots.default}
    <figcaption class={figcaptionClass}>
      <slot />
    </figcaption>
  {/if}
</figure>
