<script>
import {Task} from './Task.js'

// we bring in the the instance of task, and we shove that string
// into the first variable, so this.description is going to equal
// 'plan some fun with hannah'
let tasks = [
    new Task('plan some fun with Hannah'),
    new Task('go rock climbing'),
    new Task('eat better'),
];

function addTask() {
  tasks.push(new Task());
  tasks = tasks;
}

function removeTask(task) {
  const index = tasks.indexOf(task);
  tasks = [...tasks.slice(0,index), ...tasks.slice(index+1)];
}
</script>
<style>

ul {
  list-style: none;
}
.description {
  min-width: 400px;
}
.pomodoros{
  max-width: 100px;
}

</style>

{#if tasks.length === 0}
<p>You haven't added any tasks yet. You can though! Add some new tasks now friend.</p>
{:else}
<ul>
  {#each tasks as task}
    <li>
    <input class="description" type="text" bind:value={task.description}>
    <input class="pomodoros" type="number" bind:value={task.expectedPomodoros}>
    <button on:click={() => removeTask(task)}>X</button>
    </li>
  {/each}
</ul>
{/if}
  <button on:click={addTask}>Add a new task</button>


