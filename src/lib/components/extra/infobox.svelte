<script lang="ts">
  import IconInformationCircle from '~icons/heroicons-outline/information-circle'
  import IconCheckCircle from '~icons/heroicons-outline/check-circle'
  import IconExclamationCircle from '~icons/heroicons-outline/exclamation-circle'
  import IconXCircle from '~icons/heroicons-outline/x-circle'
  export let message: string = undefined
  export let title: string = undefined
  export let description: string = undefined
  export let status: 'info' | 'success' | 'warning' | 'error' = undefined
</script>

<div
  class:alert-info={status === 'info'}
  class:alert-success={status === 'success'}
  class:alert-warning={status === 'warning'}
  class:alert-error={status === 'error'}
  class="alert shadow-inner my-4">
  <div>
    {#if status === 'success'}
      <IconCheckCircle />
    {:else if status === 'warning'}
      <IconExclamationCircle />
    {:else if status === 'error'}
      <IconXCircle />
    {:else}
      <IconInformationCircle class={!status ? 'stroke-info h-6 w-6' : 'stroke-current h-6 w-6'} />
    {/if}
    {#if title}
      <div>
        <div class="font-bold">{@html title}</div>
        <div class="text-xs">{@html description}</div>
      </div>
    {:else}
      <span>{@html message}</span>
    {/if}
  </div>
</div>
