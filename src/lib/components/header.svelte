<script lang="ts">
  import { browser, dev } from '$app/env'
  import { fly } from 'svelte/transition'
  import { site } from '$lib/config/site'
  import { theme } from '$lib/config/general'
  import { header as headerConfig } from '$lib/config/general'
  import { hslToHex } from '$lib/utils/color'
  import Nav from '$lib/components/header_nav.svelte'
  import Search from '$lib/components/header_search.svelte'
  export let path: string
  let currentTheme: string
  let currentThemeColor: string
  let search: boolean = false
  let pin: boolean = true
  let percent: number
  let [scrollY, lastY] = [0, 0]

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
  // localStorage.getItem('theme') ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
</script>

<svelte:head>
  <meta name="theme-color" content={currentThemeColor} />
</svelte:head>

<svelte:window bind:scrollY />

<header id="header" class:-translate-y-32={!pin && scrollY > 0} class="fixed z-50 w-screen p-2 transition-all">
  {#if !search}
    <div
      in:fly={{ x: -50, duration: 300, delay: 300 }}
      out:fly={{ x: -50, duration: 300 }}
      class="navbar rounded-btn p-0 min-h-fit transition-all duration-300 ease-in-out {scrollY > 32
        ? 'bg-neutral/50 text-neutral-content backdrop-blur shadow-lg xl:bg-transparent xl:text-base-content xl:backdrop-blur-none xl:shadow-none'
        : ''}">
      <div class="navbar-start">
        {#if headerConfig.nav}
          <Nav {path} {pin} nav={headerConfig.nav} />
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
            class="flex gap-2 p-2 overflow-y-auto shadow-2xl menu dropdown-content bg-base-100 text-base-content rounded-box w-52"
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
    <div
      in:fly={{ x: 50, duration: 300, delay: 300 }}
      out:fly={{ x: 50, duration: 300 }}
      class="navbar rounded-btn p-0 min-h-fit transition-all {scrollY > 32
        ? 'bg-neutral/50 text-neutral-content backdrop-blur shadow-lg xl:bg-transparent xl:text-base-content xl:backdrop-blur-none xl:shadow-none'
        : ''}">
      <Search />
      <button on:click={() => (search = !search)} tabindex="0" class="btn btn-square btn-ghost">
        <span class="i-heroicons-outline-x" />
      </button>
    </div>
  {/if}
</header>

<div
  class:translate-y-24={!pin || scrollY === 0}
  class="fixed z-50 grid w-16 h-16 transition-all rounded-full shadow-lg bottom-6 right-6 bg-neutral/50 backdrop-blur">
  <button
    id="totop"
    on:click={() => window.scrollTo(0, 0)}
    aria-label="scroll to top"
    class="z-50 col-start-1 row-start-1 border-none btn btn-circle btn-lg btn-ghost"
    class:opacity-100={scrollY}>
    <span
      class="i-heroicons-solid-chevron-up transition-all duration-1000 {percent > 97
        ? 'text-accent'
        : 'text-neutral-content'}" />
  </button>
  <div
    class="col-start-1 row-start-1 radial-progress text-accent"
    style={`--size:4rem; --thickness: 0.25rem; --value:${percent};"`} />
</div>
