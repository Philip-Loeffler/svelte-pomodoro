<script>
function minutesToSeconds(minutes) {
    minutes * 60;
    return minutes;
}

function secondsToMinutes(seconds) {
    Math.floor(seconds / 60);
    return seconds;
}

function padWithZeroes(number) {
    number.toString().padStart(2, '0');
    return number; 
}

const POMODORO_S = minutesToSeconds(25);
  let pomodoroTime = POMODORO_S;


  function formatTime(timeInSeconds) { 
    const remainingSeconds = timeInSeconds % 60;
    const minutes = secondsToMinutes(timeInSeconds);
    return `${padWithZeroes(minutes)}:${padWithZeroes(remainingSeconds)}`;
  }

function startPomodoro() { 
  setInterval(() => {
    pomodoroTime -= 1;
  },1000);
  pomodoroTime = pomodoroTime;
}
</script>

<p>{formatTime(pomodoroTime)}</p>
<button on:click{startPomodoro}>Start timer</button>