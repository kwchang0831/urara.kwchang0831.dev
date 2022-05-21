<script lang="ts">
  import { onMount } from 'svelte'
  import Plyr from 'plyr'

  export let id = undefined
  export let list = undefined
  export let playlist = undefined
  export let start = undefined
  export let autoplay = false
  export let disablekb = false
  export let controls = true
  export let fs = true
  export let loop = false

  const src = `https://www.youtube.com/embed/${id}?${list ? `listType=playlist&list=${list}&` : ''}${
    playlist ? `playlist=${playlist}&` : ''
  }${start ? `start=${start}` : ''}${autoplay ? 'autoplay=1&' : ''}${disablekb ? 'disablekb=1&' : ''}${
    controls ? '' : 'controls=0&'
  }${fs ? '' : 'fs=0&'}${
    loop ? 'loop=1' : ''
  }origin=https://kwchang0831.dev&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`

  let players
  onMount(() => {
    players = Plyr.setup('.js-player')
  })
</script>

<div class="plyr__video-embed relative pb-[56.25%] mb-2 js-player">
  <iframe {src} title="Plyr video player" allowfullscreen allowtransparency loading="lazy" allow="autoplay" />
</div>
