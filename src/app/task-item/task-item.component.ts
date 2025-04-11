import { Component } from '@angular/core';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  var1:string="";
  var2:string="";

  arreglo1:string[]=[];

  agregar(var1:string){
    this.arreglo1.push(var1);
  }
}
