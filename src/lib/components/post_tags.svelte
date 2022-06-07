<script lang="ts">
  export let tags: Urara.Post['tags']
</script>

<div>
  {#each tags as tag}
    <a href="/?tags={tag}" class="mt-2 mr-2 normal-case btn btn-sm btn-ghost p-category">
      #{tag}
    </a>
  {/each}
</div>
