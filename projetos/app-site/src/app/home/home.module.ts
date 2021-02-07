import { ComponentsDesktopModule } from '../components-desktop/components-desktop.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CalculadoraModule } from '../calculadora/calculadora.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
    IonicModule,
    HomePageRoutingModule,
    ComponentsDesktopModule,
    CalculadoraModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
