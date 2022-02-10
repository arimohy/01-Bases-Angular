import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

  @Input() nuevo:any={}
  @Input() personajes:any[]=[]
  
  agregar(){
    if(this.nuevo.nombre.trim().length===0)
    return;
    this.personajes.push(this.nuevo);
    this.nuevo={
      nombre:"",
      poder:0
    }
  }
}
