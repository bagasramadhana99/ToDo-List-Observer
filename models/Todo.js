// models/Todo.js
export default class Todo {
    constructor(id, task, isCompleted = false) {
        this.id = id;
        this.task = task;
        this.isCompleted = isCompleted;
    }

    toggleComplete() {
        this.isCompleted = !this.isCompleted;
    }
}
