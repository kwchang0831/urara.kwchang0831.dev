<script lang="ts">
  export let nav: { text: string; link?: string; children?: { text: string; link: string }[] }[]
  export let path: string
  export let title: string
  export let scrollY: number
  export let pin: boolean
</script>

<div class="dropdown lg:hidden">
  <label for="navbar-dropdown" tabindex="0" class="btn btn-square btn-ghost">
    <span class="i-heroicons-outline-menu-alt-1" />
  </label>
  <ul
    id="navbar-dropdown"
    tabindex="0"
    class:hidden={!pin}
    class="p-2 shadow-lg menu menu-compact dropdown-content bg-base-100 text-base-content rounded-box max-w-52">
    {#each nav as { text, link, children }}
      {#if link && !children}
        <li>
          <a sveltekit:prefetch class:font-bold={link === path} href={link}>{text}</a>
        </li>
      {:else if children}
        <li tabindex="0">
          <span class:font-bold={children.some(({ link }) => link === path)} class="justify-between gap-1 max-w-[13rem]">
            {text}
            <span class="mr-2 i-heroicons-solid-chevron-right" />
          </span>
          <ul class="p-2 shadow-lg bg-base-100 text-base-content">
            {#each children as { text, link }}
              <li>
                <a sveltekit:prefetch class:font-bold={link === path} href={link}>{text}</a>
              </li>
            {/each}
          </ul>
        </li>
      {/if}
    {/each}
  </ul>
</div>
<div class:swap-active={scrollY > 32 && title} class="order-last hidden swap lg:inline-grid">
  <button
    on:click={() => window.scrollTo(0, 0)}
    class:hidden={scrollY < 32 || !title}
    class="text-base font-normal normal-case transition-all duration-200 swap-on btn btn-ghost">
    {title}
  </button>
  <ul class:hidden={scrollY > 64 && title} class="p-0 swap-off menu menu-horizontal">
    {#each nav as { text, link, datatip, children }}
      {#if link && !children}
        <li>
          <a
            sveltekit:prefetch
            class={datatip ? 'tooltip tooltip-bottom tooltip-secondary hover:text-secondary' : ''}
            class:font-bold={link === path}
            href={link}
            data-tip={datatip}>
            {text}
          </a>
        </li>
      {:else if children}
        <li tabindex="0">
          <span class:font-bold={children.some(({ link }) => link === path)} class="gap-1">
            {text}
            <span class="-mr-1 i-heroicons-solid-chevron-down" />
          </span>
          <ul class="p-2 shadow-lg bg-base-100 text-base-content">
            {#each children as { text, link }}
              <li>
                <a sveltekit:prefetch class:font-bold={link === path} href={link}>{text}</a>
              </li>
            {/each}
          </ul>
        </li>
      {/if}
    {/each}
  </ul>
</div>
