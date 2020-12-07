import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutrosServicosPageRoutingModule } from './outros-servicos-routing.module';

import { OutrosServicosPage } from './outros-servicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutrosServicosPageRoutingModule
  ],
  declarations: [OutrosServicosPage]
})
export class OutrosServicosPageModule {}
