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
 
  constructor()
  {
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

  ngOnInit():void{}

  addTodo(todo : Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    console.log(todo);
  }  

  deleteItem(i :number){
    console.log('delete index : ',i);
    this.todos.splice(i, 1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    this.todos[i].active = !this.todos[i].active;
    console.log('deleting the item');
  }

  deleteDoneItem(i :number){
    console.log('delete done index : ',i);
    this.donetodos.splice(i, 1);
    localStorage.setItem("donetodos",JSON.stringify(this.donetodos));
    // this.donetodos[i].active = !this.donetodos[i].active;
    console.log('deleting the item from done to dos');
  }

  toggleTodo(todo: Todo){
    console.log('This todo : ',todo);
    const index = this.todos.indexOf(todo);
    console.log('index in toggle : ',index);

    console.log('Status in toggle todo : ',this.todos[index].active);
    this.todos[index].active = false;
    this.donetodos.push(this.todo);

    console.log('Done Task : ', this.donetodos);
    localStorage.setItem("donetodos",JSON.stringify(this.donetodos));

    this.todos.splice(index, 1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    console.log('Todos after delete in toggle : ',this.todos);
  }

}


