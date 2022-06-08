<script lang="ts">
  import { browser, dev } from '$app/env'
  import { fly } from 'svelte/transition'
  import { site } from '$lib/config/site'
  import { theme } from '$lib/config/general'
  import { title as storedTitle } from '$lib/stores/title'
  import { header as headerConfig } from '$lib/config/general'
  import { hslToHex } from '$lib/utils/color'
  import Nav from '$lib/components/header_nav.svelte'
  import Search from '$lib/components/header_search.svelte'
  export let path: string
  let title: string
  let currentTheme: string
  let currentThemeColor: string
  let search: boolean = false
  let pin: boolean = true
  let percent: number
  let [scrollY, lastY] = [0, 0]

  storedTitle.subscribe(storedTitle => (title = storedTitle as string))

  $: if (browser && currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    currentThemeColor = hslToHex(
      ...(getComputedStyle(document.documentElement)
        .getPropertyValue('--b1')
        .slice(dev ? 1 : 0)
        .replaceAll('%', '')
        .split(' ')
        .map(Number) as [number, number, number])
    )
  }

  $: if (scrollY) {
    pin = lastY - scrollY > 0 || scrollY === 0 ? true : false
    lastY = scrollY
    if (browser)
      percent =
        Math.round((scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 10000) / 100
  }

  if (browser) currentTheme = localStorage.getItem('theme') ?? 'default'
</script>

<svelte:head>
  <meta name="theme-color" content={currentThemeColor} />
</svelte:head>

<svelte:window bind:scrollY />

<!-- class:-translate-y-32={!pin && scrollY > 0} -->
<header
  id="header"
  class="fixed z-50 w-screen bg-base-100/30 md:bg-base-200/30 transition-all duration-500 ease-in-out border-b-2 border-transparent max-h-[4.125rem] {scrollY >
    32 && 'backdrop-blur border-base-content/10'}">
  {#if !search}
    <div in:fly={{ x: -50, duration: 300, delay: 300 }} out:fly={{ x: -50, duration: 300 }} class="navbar">
      <div class="navbar-start">
        {#if headerConfig.nav}
          <Nav {path} {title} {pin} {scrollY} nav={headerConfig.nav} />
        {/if}
        <a href="/" sveltekit:prefetch class="text-lg normal-case btn btn-ghost">{site.title}</a>
      </div>
      <div class="navbar-end">
        {#if headerConfig.search}
          <button aria-label="search" on:click={() => (search = !search)} tabindex="0" class="btn btn-square btn-ghost">
            <span class="i-heroicons-outline-search" />
          </button>
        {/if}
        <div id="change-theme" class="dropdown dropdown-end">
          <div tabindex="0" class="btn btn-square btn-ghost">
            <span class="i-heroicons-outline-color-swatch" />
          </div>
          <ul
            tabindex="0"
            class="flex shadow-2xl menu dropdown-content bg-base-100 text-base-content rounded-box w-52 p-2 gap-2 overflow-y-auto h-[21.5rem]"
            class:hidden={!pin}>
            {#each theme as { name, text }}
              <button
                data-theme={name}
                on:click={() => {
                  currentTheme = name
                  localStorage.setItem('theme', name)
                }}
                class:border-2={currentTheme === name}
                class:border-primary={currentTheme === name}
                class="flex p-2 transition-all rounded-lg btn btn-ghost hover:bg-primary group bg-base-100">
                <p class="flex-1 text-left text-base-content group-hover:text-primary-content transition-color">
                  {text ?? name}
                </p>
                <div class="flex flex-none gap-1 m-auto">
                  <div class="w-2 h-4 rounded bg-primary" />
                  <div class="w-2 h-4 rounded bg-secondary" />
                  <div class="w-2 h-4 rounded bg-accent" />
                  <div class="w-2 h-4 rounded bg-neutral" />
                </div>
              </button>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  {:else}
    <div in:fly={{ x: 50, duration: 300, delay: 300 }} out:fly={{ x: 50, duration: 300 }} class="navbar">
      <Search />
      <button on:click={() => (search = !search)} tabindex="0" class="btn btn-square btn-ghost">
        <span class="i-heroicons-outline-x" />
      </button>
    </div>
  {/if}
</header>

<button
  id="totop"
  on:click={() => window.scrollTo(0, 0)}
  class:translate-x-24={!pin || scrollY === 0}
  aria-label="scroll to top"
  class="fixed grid group btn btn-circle btn-lg border-none backdrop-blur bottom-6 right-6 z-50 duration-500 ease-in-out {percent >
  95
    ? 'btn-accent shadow-lg'
    : 'btn-ghost bg-base-100/30 md:bg-base-200/30'}"
  class:opacity-100={scrollY}>
  <div
    class="col-start-1 row-start-1 transition-all duration-500 ease-in-out radial-progress text-accent group-hover:text-accent-focus"
    style={`--size:4rem; --thickness: 0.25rem; --value:${percent};"`} />
  <div
    class:border-transparent={percent > 95}
    class="grid w-full h-full col-start-1 row-start-1 p-4 duration-500 ease-in-out border-4 rounded-full border-base-content/10 group-hover:border-transparent ">
    <span class="transition duration-300 ease-in-out i-heroicons-solid-chevron-up group-hover:scale-150" />
  </div>
</button>

<button
  id="tobottom"
  on:click={() => window.scrollTo(0, document.body.scrollHeight)}
  class:translate-x-24={pin || percent > 95}
  aria-label="scroll to bottom"
  class="fixed grid group btn btn-circle btn-lg border-none backdrop-blur bottom-6 right-6 z-50 duration-500 ease-in-out {percent >
  95
    ? 'btn-accent shadow-lg'
    : 'btn-ghost bg-base-100/30 md:bg-base-200/30'}"
  class:opacity-100={scrollY}>
  <div
    class="col-start-1 row-start-1 transition-all duration-500 ease-in-out radial-progress text-accent group-hover:text-accent-focus"
    style={`--size:4rem; --thickness: 0.25rem; --value:${percent};"`} />
  <div
    class:border-transparent={percent > 95}
    class="grid w-full h-full col-start-1 row-start-1 p-4 duration-500 ease-in-out border-4 rounded-full border-base-content/10 group-hover:border-transparent">
    <span class="transition duration-300 ease-in-out i-heroicons-solid-chevron-down group-hover:scale-150" />
  </div>
</button>
