import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from '../heroes/heroe/heroe.component';
import { ContadorComponent } from './contador/contador.component';
@NgModule({
  declarations:[
    ContadorComponent
  ],
  exports:[
    ContadorComponent
  ],
  imports:[
    CommonModule
  ]

})

export class ContadorModule{

}
