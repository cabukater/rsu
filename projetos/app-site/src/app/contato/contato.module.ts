import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatoPageRoutingModule } from './contato-routing.module';

import { ContatoPage } from './contato.page';
import { ComponentsDesktopModule } from '../components-desktop/components-desktop.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContatoPageRoutingModule,
    ComponentsDesktopModule

  ],
  declarations: [ContatoPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ContatoPageModule {}
