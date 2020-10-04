import { MapaFormComponent } from './mapa-form/mapa-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselBoxesComponent } from './carousel-boxes/carousel-boxes.component';
import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';

@NgModule({
  declarations: [
    CarouselBoxesComponent,
    MapaFormComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  entryComponents:[
    CarouselBoxesComponent,
    MapaFormComponent
  ],
   exports: [
    CarouselBoxesComponent,
    MapaFormComponent
  ]
})
export class ComponentsDesktopModule { }
