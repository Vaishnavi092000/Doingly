import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../Todo';
import { doneTodo } from '../doneTodos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  totalTasks!: number;
  taskTitle!: string;
  localItem :any;
  todo:any;
  todos:Todo[];
  donetodos : doneTodo[];
 

  constructor(){

    this.localItem = localStorage.getItem("todos");
    this.localItem = localStorage.getItem("donetodos");

    if(this.localItem == null){
      this.todos = [];
      this.donetodos = [];
    }else{
      this.todos = JSON.parse(this.localItem);
      this.donetodos = JSON.parse(this.localItem);
    }
  }

  ngOnInit():void{

  }

  addTodo(todo : Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }  

  deleteItem(i :number){
    this.todos.splice(i, 1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    this.todos[i].active = !this.todos[i].active;
    console.log('deleting the item');
  }

  toggleTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }


}


