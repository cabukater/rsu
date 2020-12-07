import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
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
