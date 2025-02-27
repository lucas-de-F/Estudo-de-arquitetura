import { TodoModel } from "./Model";
import { TodoPresenter } from "./Presenter";
import { TodoView } from "./View";

// Inicialização
const app = new TodoPresenter(new TodoModel(), new TodoView());
