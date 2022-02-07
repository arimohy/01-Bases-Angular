import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  //styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes:string[]=['Spiderman',"Iroman","Hulk","thort"]
  heroeBorrado:string=""

  borrarHeroe():void{

    this.heroeBorrado=this.heroes[this.heroes.length-1] || ""
    this.heroes.splice(this.heroes.length-1,1)
  }

  fueBorrado():boolean{
    return this.heroeBorrado!=""
  }

}
