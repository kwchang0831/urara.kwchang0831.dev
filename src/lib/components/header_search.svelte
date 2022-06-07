<script lang="ts">
  import { site } from '$lib/config/site'
  import { header as headerConfig } from '$lib/config/general'
</script>

<form
  action={headerConfig.search.provider === 'duckduckgo' ? '//duckduckgo.com/' : '//google.com/search'}
  method="get"
  accept-charset="UTF-8"
  class="flex-1">
  <input
    type="text"
    name="q"
    class="w-full h-12 transition-all input input-ghost input-bordered xl:bg-base-100 xl:text-base-content" />
  <input
    type="hidden"
    name={headerConfig.search.provider === 'duckduckgo' ? 'sites' : 'sitesearch'}
    value={site.protocol + site.domain} />
  <button type="submit" class="ml-2 btn btn-square btn-ghost">
    <span class="i-heroicons-outline-search" />
  </button>
</form>
