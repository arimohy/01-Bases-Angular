import { Component, OnInit } from '@angular/core';

interface Personaje{
  nombre:string;
  poder:number;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  // agregar(event: any){
  //   event.preventDefault();
  // }
  nuevo:Personaje={
    nombre: 'truck',
    poder: 14000
  }
  agregar(){
    console.log(this.nuevo)
  }
  cambiarNombre(event:any){
    console.log(event.value)
  }

}
