import {Component} from '@angular/core';
@Component({
  selector:'app-contador',
  template:
  `
      <div>{{titulo}}</div>

      <h3>La base es :<strong> {{base}}</strong></h3>
      <button (click)="acumular(this.base);"> +{{base}}
      </button>
      <span>{{numero}}</span>
      <button (click)="acumular(-this.base);"> -{{base}}
      </button>

  `


})


export class ContadorComponent{
  titulo:String = 'Contador App 3';
  numero:number=10;
  base:number=5;


  acumular(valor:number){
    this.numero+=valor;
  }
}
