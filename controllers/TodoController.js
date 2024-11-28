// controllers/TodoController.js
import Todo from '../models/Todo';

export default class TodoController {
    constructor() {
        this.todos = [];
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.todos));
    }

    addTodo(task) {
        const newTodo = new Todo(Date.now(), task);
        this.todos.push(newTodo);
        this.notifyObservers();
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.notifyObservers();
    }

    toggleTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.toggleComplete();
            this.notifyObservers();
        }
    }

    getTodos() {
        return this.todos;
    }
}
