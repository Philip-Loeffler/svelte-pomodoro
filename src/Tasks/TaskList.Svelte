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
</script>
<style>

ul {
    list-style: none;
}
</style>

<ul>
  {#each tasks as task}
    <li>
    <input type="text" value={task.description}>
    <input type="number" value={task.expectedPomodoros}>
    </li>
  {/each}
</ul>

