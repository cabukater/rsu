import { BannerComponent } from './banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxCardsComponent } from './box-cards/box-cards.component';
import { OwlModule } from 'ngx-owl-carousel';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    BannerComponent,
    BoxCardsComponent],
  imports: [
    BrowserModule,

    CommonModule,
    CarouselModule

  ], exports :[
    BannerComponent,
    BoxCardsComponent
  ]

})
export class ComponentsModule { }
