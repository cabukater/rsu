import { ComponentsDesktopModule } from '../components-desktop/components-desktop.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CalculadoraModule } from '../calculadora/calculadora.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsDesktopModule,
    CalculadoraModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
