import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    autoplay:true,
    dots: true,
    navSpeed: 700,
      responsive: {
      0: {
        items: 1,
        autoHeight:true

      },
      600: {
        items: 1
      },
      1200: {
        items: 1
      },
      1800: {
        items: 1
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit() {
  }

}
