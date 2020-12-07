import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PainelSolarPageRoutingModule } from './painel-solar-routing.module';

import { PainelSolarPage } from './painel-solar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PainelSolarPageRoutingModule
  ],
  declarations: [PainelSolarPage]
})
export class PainelSolarPageModule {}
