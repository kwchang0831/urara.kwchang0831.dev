<script lang="ts">
  import { onMount } from 'svelte'
  import Plyr from 'plyr'

  export let autoplay = true
  export let loop = true
  export let poster = undefined
  export let webm = undefined
  export let mp4 = undefined
  export let title = undefined
  export let seekTime = 2
  export let w = undefined
  export let h = undefined

  let players
  onMount(() => {
    players = Plyr.setup('.webm-player', {
      seekTime: seekTime,
      controls: ['play', 'restart', 'progress', 'current-time', 'duration', 'fullscreen']
    })
  })
</script>

<video {autoplay} {loop} width={w} height={h} class="webm-player my-0" controls data-poster={poster}>
  {#if mp4}
    <source src={mp4} type="video/mp4" {title} />
  {/if}
  {#if webm}
    <source src={webm} type="video/webm" {title} />
  {/if}
  <track kind="captions" />
</video>
