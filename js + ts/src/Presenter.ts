import { TodoModel } from "./Model";
import { TodoView } from "./View";

export class TodoPresenter {
    private model: TodoModel;
    private view: TodoView;

    constructor(model: TodoModel, view: TodoView) {
        this.model = model;
        this.view = view;

        // o bind serve para eu passar o método para a classe agregada, porém, mantendo o contexto da classe atual para que o método consiga ser executado corretamente
        this.view.bindAddTodo(this.handleAddTodo.bind(this));
        this.view.bindRemoveTodo(this.handleRemoveTodo.bind(this));

        // A presenter é resposável por atualizar a view de acordo com a model
        this.updateView();
    }

    private handleAddTodo(todo: string): void {
        // a camada presenter faz o intermédio entre a model e a view, recebendo os dados da view e passando para a model
        this.model.addTodo(todo);
        this.updateView();
    }

    private handleRemoveTodo(index: number): void {
        this.model.removeTodo(index);
        this.updateView();
    }

    private updateView(): void {
        this.view.renderTodos(this.model.getTodos());
    }
}