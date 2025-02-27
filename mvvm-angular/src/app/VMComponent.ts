import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ITodo, Model } from './Model';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  providers: [Model],
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class VMComponent {
  todos$: Observable<ITodo[]> = of([])
  constructor(private model: Model) {
    this.todos$ = this.model.todos$;
  }

  title = 'TODO APP - mvvm angular';

  value = ''
  err = ''

  inputValido() {
    if (this.value.trim() === '') {
      this.err = 'Campo vazio'
    } else {
      this.err = ''
    }

    return this.err.length === 0
  }
  criar() {
    if (!this.inputValido()) {
      return
    }

    this.model.criar(this.value);
    this.value = ''
  }

  remover(id: number) {
    this.model.remover(id);
  }
}
