import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapaFormComponent } from './mapa-form/mapa-form.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselBoxesComponent } from './carousel-boxes/carousel-boxes.component';
import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [
    CarouselBoxesComponent,
    MapaFormComponent,
    CarrosselComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),

  ],
  entryComponents: [
    CarouselBoxesComponent,
    MapaFormComponent,
    CarrosselComponent
  ],
   exports: [
    CarouselBoxesComponent,
    MapaFormComponent,
    CarrosselComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ComponentsDesktopModule { }
