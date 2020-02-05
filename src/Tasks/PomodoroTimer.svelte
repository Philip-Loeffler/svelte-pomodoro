<script>
function minutesToSeconds(minutes) {
    minutes * 60;
    return minutes; 
}
const pomodoroTime = minutesToSeconds(25);


function formatTime(timeInSecond) {
    const minutes = secondsToMinutes(timeInSeconds);
    const remainingSeconds = timeInSecond % 60;
    return `${padWithZeros(minutes)} :${padWithZeros(remainingSeconds)}`;
}

function startPomodoro() {

}
</script>
<p>im a timer yo!</p>
<button on:click{startPomodoro}>Start timer</button>