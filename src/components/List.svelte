<script lang="ts">
  import type { Item } from '$lib/todo'
  // import { createEventDispatcher } from 'svelte'

  export let items: Item[]

  // const dispatch = createEventDispatcher<{ done: number }>()
</script>

{#each items as item (item.id)}
  <p class="task">
    <input type="checkbox" bind:checked={item.done} id="task-{item.id}" />
    <label for="task-{item.id}" class:done={item.done}>{item.task} </label>
    <button
      type="button"
      on:click={() => {
        items = items.filter((i) => i.id !== item.id)
      }}>Remove</button
    >
  </p>
{:else}
  <p><em>Nothing to do...</em></p>
{/each}

<style lang="scss">
  input[type='checkbox'] {
    width: 1rem;
    height: 1rem;
  }

  .task {
    display: flex;
    gap: 0.5em;
    align-items: center;

    > label {
      flex: 1;
    }
  }

  .done {
    text-decoration: line-through;
  }
</style>
