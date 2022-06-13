<script lang="ts">
  import { fly } from 'svelte/transition'

  let hovered: boolean = false
  let copied: boolean = false
  let codeblock: any

  function handleEnter() {
    hovered = true
  }

  function handleLeave() {
    hovered = false
    copied = false
  }

  function handleCopy() {
    copied = true
    navigator.clipboard.writeText(codeblock.querySelector('.code-container').textContent)
    setTimeout(() => {
      copied = false
    }, 2000)
  }
</script>

<div bind:this={codeblock} on:mouseenter={handleEnter} on:mouseleave={handleLeave} class="urara-codeblock relative">
  {#if hovered}
    <button
      aria-label="Copy code"
      type="button"
      in:fly={{ x: 25, duration: 300 }}
      out:fly={{ x: 25, duration: 300 }}
      on:click={handleCopy}
      class="group absolute z-40 -right-6 top-2 h-9 w-9 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 {copied
        ? 'border-green-400 focus:border-green-400 focus:outline-none'
        : 'border-gray-300 hover:border-pink-500'}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none">
        {#if copied}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        {:else}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        {/if}
      </svg>
    </button>
  {/if}
  <slot />
</div>
