import { CalculoFotoVoltaico } from './CalculoFotoVoltaico';
import { CalculadoraService } from './calculadora.service';
import { CalculadoraComponent } from './calculadora.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations:[
    CalculadoraComponent
  ],

  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    
  ],
  providers: [
    CalculadoraService
  ],
  exports:[CalculadoraComponent],
})
export class CalculadoraModule {}
