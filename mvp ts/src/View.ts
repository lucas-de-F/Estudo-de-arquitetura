export class TodoView {
    private app: HTMLElement;
    private todoList: HTMLUListElement;
    private input: HTMLInputElement;
    private addButton: HTMLButtonElement;
    private onRemoveTodo!: (index: number) => void;

    constructor() {
        this.app = document.getElementById("app")!;
        this.todoList = document.createElement("ul");
        this.input = document.createElement("input");
        this.addButton = document.createElement("button");
        this.addButton.textContent = "Adicionar";

        this.app.appendChild(this.input);
        this.app.appendChild(this.addButton);
        this.app.appendChild(this.todoList);
    }

    renderTodos(todos: string[]): void {
        // A view é responsável por pegar os eventos de input do usuário e passar para a presenter
        this.todoList.innerHTML = "";
        todos.forEach((todo, index) => {
            const li = document.createElement("li");
            li.textContent = todo;
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remover";
            removeButton.onclick = () => this.onRemoveTodo(index);
            li.appendChild(removeButton);
            this.todoList.appendChild(li);
        });
    }

    /*
        A função bindAddTodo recebe uma função que é passada pela presenter, essa função é chamada quando o usuário clica no botão de adicionar.
        Essa função é chamada justamente para usar o intermédio da presenter, para que ela possa atualizar a model.
    */ 

    bindAddTodo(addTodoHandler: (todo: string) => void): void {
        this.addButton.onclick = () => {
            if (this.input.value.trim()) {
                addTodoHandler(this.input.value);
                this.input.value = "";
            }
        };
    }

    /*
        A função bindRemoveTodo recebe uma função que é passada pela presenter, essa função é chamada quando o usuário clica no botão de remover.
        Essa função é chamada justamente para usar o intermédio da presenter, para que ela possa atualizar a model.
    */ 
    bindRemoveTodo(removeTodohandler: (index: number) => void): void {
        this.onRemoveTodo = removeTodohandler;
    }
}
