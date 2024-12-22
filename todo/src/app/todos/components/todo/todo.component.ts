import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../../interfaces/todo.interface';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  //pour le binding des données
  @Input() todo: ITodo;
  @Output() todoChange: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteTodo: EventEmitter<number>= new EventEmitter<number>(); 
  constructor(){}
  ngOnInit(): void {
    
  }

}
