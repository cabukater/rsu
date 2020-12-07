import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-boxes',
  templateUrl: './carousel-boxes.component.html',
  styleUrls: ['./carousel-boxes.component.scss'],
})
export class CarouselBoxesComponent {

  constructor(
    private router: Router

  ) {}

  painelSolar(){
    this.router.navigate(['/painel-solar'])
  }
  iluminacaoProf(){
    this.router.navigate(['/iluminacao-profissional'])
  }
  outrosServ(){
    this.router.navigate(['/outros-servicos'])
  }

}
