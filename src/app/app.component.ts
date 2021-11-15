import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Todo } from 'src/models/todo.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<p>ok</p>',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public todos: Todo[] = [];
  public Title: string = 'Minhas tarefas';


  constructor(){
    this.todos.push(new Todo(1, 'ok', false));
  }

  alteraTexto(){
    this.Title = 'Todos'
  }

  remove(todo: Todo){
     const index = this.todos.indexOf(todo);

     if(index !== -1){
       this.todos.splice(index, 1);
     }
  }

  markAsDone(todo: Todo){

    todo.done = true;

  }

  markAsUndone(todo: Todo){

    todo.done = false;

  }
}
