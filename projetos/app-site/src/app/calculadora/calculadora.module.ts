import { CalculadoraComponent } from './calculadora.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations:[
    CalculadoraComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
  ],
  exports:[CalculadoraComponent],
})
export class CalculadoraModule {}
