<script lang="ts">
  import { Magnifier } from 'svelte-magnifier'

  export let className = ''
  export let src = undefined
  export let alt = undefined
  export let height = 'auto'
  export let width = '100%'
  export let zoomFactor = '1.0'
  export let mgWidth = '240'
  export let mgHeight = '240'
  export let mgShape: 'circle' | 'square' = 'circle'
  export let mgShowOverflow = false
  export let mgMouseOffsetX = 0
  export let mgMouseOffsetY = 0
  export let mgTouchOffsetX = -50
  export let mgTouchOffsetY = -50
</script>

<Magnifier
  {className}
  {src}
  {alt}
  {height}
  {width}
  {zoomFactor}
  {mgWidth}
  {mgHeight}
  {mgShape}
  {mgShowOverflow}
  {mgMouseOffsetX}
  {mgMouseOffsetY}
  {mgTouchOffsetX}
  {mgTouchOffsetY} />
