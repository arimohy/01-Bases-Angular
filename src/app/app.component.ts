import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:String = 'Contador App 3';
  numero:number=10;

  sumar(){
    this.numero+=1;
  }
  restar(){
    this.numero-=1;
  }
}
