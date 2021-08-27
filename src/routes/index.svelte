<script lang="ts">
  import { Item } from '$lib/todo'
  import List from '../components/List.svelte'

  let todo: Item[] = []
  let done: Item[] = []

  let task = ''

  $: {
    const previous = { todo, done }
    // Always put updated items at the end of the array
    todo = [...previous.todo, ...previous.done].filter((item) => !item.done)
    done = [...previous.done, ...previous.todo].filter((item) => item.done)
  }
</script>

<main>
  <h1>Todo</h1>
  <List bind:items={todo} />
  <form
    on:submit|preventDefault={() => {
      todo = [...todo, new Item(task)]
      task = ''
    }}
  >
    <p>
      <label for="new">New task:</label>
      <input type="text" bind:value={task} id="new" />
      <button>Add</button>
    </p>
  </form>
  {#if done.length}
    <h2>
      Done <button
        on:click={() => {
          done = []
        }}>Remove all</button
      >
    </h2>
    <List bind:items={done} />
  {/if}
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
</style>
