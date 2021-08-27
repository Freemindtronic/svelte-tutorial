<script lang="ts">
  import { Item } from '$lib/todo'

  let items: Item[] = []

  let task = ''
</script>

<main>
  <h1>Todo</h1>
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
  <form
    on:submit|preventDefault={() => {
      items = [...items, new Item(task)]
      task = ''
    }}
  >
    <p>
      <label for="new">New task:</label>
      <input type="text" bind:value={task} id="new" />
      <button>Add</button>
    </p>
  </form>
</main>

<style lang="scss">
  :global(body) {
    background: #eee;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  main {
    background: #fff;
    max-width: 600px;
    margin: auto;
    overflow: hidden;
    padding: 0 1em;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }

  h1 {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #ccc;
  }

  form > p {
    display: flex;
    gap: 0.5em;
    align-items: center;

    > input {
      flex: 1;
    }

    > input,
    > button {
      border: 1px solid #555;
      border-radius: 2px;
      padding: 0.5em;
    }
  }

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
