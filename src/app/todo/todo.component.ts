import { Component } from '@angular/core';
import   {Todo} from "../Todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
localitem;
  todo:Todo[] ;
//deleteTodo: any;
  constructor(){
this.localitem = localStorage.getItem("todo");
if(this.localitem == null){
  this.todo = [];
}
else{
  this.todo = JSON.parse(this.localitem);
}
    
   

    
  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todo?.indexOf(todo);
    this.todo.splice(index,1);
    localStorage.setItem("todo", JSON.stringify(this.todo));
    
  }
  AddTodo(todo:Todo){
    console.log(todo);
    this.todo.push(todo);localStorage.setItem("todo", JSON.stringify(this.todo));
    
  }
  toggleTodo(todo:Todo){
    const index = this.todo?.indexOf(todo);
    this.todo[index].active = !this.todo[index].active;
    this.todo.push(todo);localStorage.setItem("todo", JSON.stringify(this.todo));
    
  }


}
