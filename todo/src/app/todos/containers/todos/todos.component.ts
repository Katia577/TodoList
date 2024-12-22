import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../interfaces/todo.interface';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  private todosState: ITodo[]=[]; 

 constructor(){}
 get todos():ITodo[]{
  return this.todosState.filter(todo=> !todo.isCompleted); 
 }
 get todosCompleted():ITodo[]{  
  return this.todosState.filter(todo=> todo.isCompleted); 
 }

 //les compteurs des tâches terminées et restantes 
 get countTodos():number{
  return this.todos.length; 
 }
 get countCompleted():number{
  return this.todosCompleted.length; 
 }

 //Pour Cacher la section des todos Terminées lorque aucune n'est terminée 
 get isHidden():boolean{
  return this.countCompleted==0; 
 }

 ngOnInit(): void {
   //this.todosState = JSON.parse(localStorage.getItem('todosState')) || [];
  const savedTodos: string | null = localStorage.getItem('todosState');
  this.todosState = savedTodos ? JSON.parse(savedTodos) : [];
 }
public addTodo(event:Event):void{
  const input = event.target as HTMLInputElement;
  if (input && input.value.trim() !== '')
  {this.todosState.push({
  id: this.todosState.length,
  title:input.value,
  isCompleted:false
});
input.value= ''; 
  }
console.clear(); 
console.table(this.todosState);
this. saveToLocalStorage(); 

}

 public updateTodo():void{
  console.clear(); 
  console.table(this.todosState);
  this. saveToLocalStorage(); 

 }
 public removeTodo(id:number):void{
  this.todosState=this.todosState.filter(todo => todo.id != id); 
  console.clear(); 
  console.table(this.todosState);
  this. saveToLocalStorage(); 
 }

 private saveToLocalStorage():void{
  localStorage.setItem('todosState', JSON.stringify( this.todosState)); 
 }
 
}
