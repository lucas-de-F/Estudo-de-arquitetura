import { BehaviorSubject, Observable } from "rxjs";

export interface ITodo {
    id: number;
    text: string;
}

export class Model {
    private todosSubject = new BehaviorSubject<ITodo[]>([]);
    todos$: Observable<ITodo[]> = this.todosSubject.asObservable();

  constructor() {
  }

  criar(text: string) {
    const appendTodo = [...this.todosSubject.value, { id: this.todosSubject.value.length + 1, text }];
    this.todosSubject.next(appendTodo);
  }

  get() {
    return this.todosSubject.value;
  }

  remover(id: number) {
    let count = 0
    let todoRemovido = [] 
    
    for (let todo of this.todosSubject.value) {
        todo.id !== id ? todoRemovido.push({ id: count+=1, text: todo.text }) : null;
    }
    
    this.todosSubject.next(todoRemovido);
  }
}