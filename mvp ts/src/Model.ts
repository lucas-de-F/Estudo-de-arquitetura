export class TodoModel {
    private todos: string[];

    constructor() {
        this.todos = [];
    }

    addTodo(todo: string): void {
        this.todos.push(todo);
    }

    removeTodo(index: number): void {
        this.todos.splice(index, 1);
    }

    getTodos(): string[] {
        return this.todos;
    }
}
