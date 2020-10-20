import { MapaFormComponent } from './mapa-form/mapa-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselBoxesComponent } from './carousel-boxes/carousel-boxes.component';
import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    CarouselBoxesComponent,
    MapaFormComponent,
        CalculatorComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  entryComponents: [
    CarouselBoxesComponent,
    CalculatorComponent,
    MapaFormComponent
  ],
   exports: [
    CarouselBoxesComponent,
    MapaFormComponent,
    CalculatorComponent,
  ]
})
export class ComponentsDesktopModule { }
