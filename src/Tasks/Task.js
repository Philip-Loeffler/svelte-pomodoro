// we can call and instance of task now
//when we do that the first thing we do will set description to description
//check it out over in TaskList.Svelte
export class Task {
    constructor(description="", expectedPomodoros=1){
        this.description = description;
        this.expectedPomodoros = expectedPomodoros;
        this.actualPomodoros = 0;
    }
}