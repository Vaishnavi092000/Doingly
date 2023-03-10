import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent{
  
  title!: string;
  desc!: string;

  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();

  constructor(){}

  

  onSubmit(){    
    const todo = 
    {
      title: this.title,
      desc : this.desc,
      active : true
    }   

    this.todoAdd.emit(todo);
  }
  

}

