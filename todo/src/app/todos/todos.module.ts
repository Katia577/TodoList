import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {TodosRoutingModule} from './todos-routing.module'; 
import{TodosMaterialModule} from './todos-material.module'; 
import * as fromComponents from './components'; 
import * as fromContainers from './containers'; 
@NgModule(
  {
    imports:[
      CommonModule, 
      FormsModule,
      TodosRoutingModule,
      TodosMaterialModule
    ],
    declarations:[
      ...fromComponents.components ,//Declaration de tous les components 
      ...fromContainers.containers
    ],
    providers:[]
  }
)

export class TodosModule{}