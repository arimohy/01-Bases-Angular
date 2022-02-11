import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
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
    nombre: '',
    poder: 0
  }
  // get personajes():Personaje[]{
  //   return this.DbzService.personajes;
  // }
  // cambiarNombre(event:any){
  //   console.log(event.value)
  // }

  // agregarNuevoPersonaje(argumento:Personaje){
  //   this.personajes.push(argumento)
  // }
  constructor(){

  }
}
