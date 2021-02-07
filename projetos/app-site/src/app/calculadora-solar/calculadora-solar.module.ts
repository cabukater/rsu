import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculadoraSolarPageRoutingModule } from './calculadora-solar-routing.module';

import { CalculadoraSolarPage } from './calculadora-solar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculadoraSolarPageRoutingModule
  ],
  declarations: [CalculadoraSolarPage]
})
export class CalculadoraSolarPageModule {}
