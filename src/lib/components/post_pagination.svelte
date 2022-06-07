<script lang="ts">
  import Image from '$lib/components/prose/img.svelte'
  export let prev: Urara.Post = undefined
  export let next: Urara.Post = undefined
</script>

<nav class="flex flex-col md:flex-row flex-warp justify-evenly">
  {#if prev}
    <div
      href={prev.path}
      class:image-full={prev['cover']}
      class:md:rounded-r-box={next && !next['cover']}
      class="flex-1 card group rounded-none before:!rounded-none">
      {#if prev['cover']}
        <figure class="!block">
          <Image
            class="absolute object-center w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
            src={prev['cover']} />
        </figure>
      {/if}
      <div class="card-body">
        <span class="mr-auto opacity-50 i-heroicons-outline-chevron-left group-hover:opacity-100" />
        <a
          rel="prev"
          href={prev.path}
          class="card-title block text-left mb-0 mr-auto bg-[length:100%_0%] bg-[position:0_88%] underline decoration-3 decoration-transparent group-hover:decoration-primary hover:bg-[length:100%_100%] hover:text-primary-content bg-gradient-to-t from-primary to-primary bg-no-repeat transition-all ease-in-out duration-300">
          {prev['title'] ?? prev.path.slice(1)}
        </a>
      </div>
    </div>
    {#if next && !next['cover'] && !prev['cover']}
      <div class="mx-4 flex-0 divider md:divider-horizontal md:mx-0 md:my-4" />
    {/if}
  {/if}
  {#if next}
    <div
      href={next.path}
      class:image-full={next['cover']}
      class:md:rounded-l-box={prev && !prev['cover']}
      class="flex-1 card group rounded-none before:!rounded-none">
      {#if next['cover']}
        <figure class="!block">
          <Image
            class="absolute object-center w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
            src={next['cover']} />
        </figure>
      {/if}
      <div class="card-body">
        <a
          rel="next"
          href={next.path}
          class="card-title block text-right mb-0 ml-auto bg-[length:100%_0%] bg-[position:0_88%] underline decoration-3 decoration-transparent group-hover:decoration-primary hover:bg-[length:100%_100%] hover:text-primary-content bg-gradient-to-t from-primary to-primary bg-no-repeat transition-all ease-in-out duration-300">
          {next['title'] ?? next.path.slice(1)}
        </a>
        <span class="ml-auto opacity-50 i-heroicons-outline-chevron-right group-hover:opacity-100" />
      </div>
    </div>
  {/if}
</nav>
