import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-desktop',
  templateUrl: './menu-desktop.component.html',
  styleUrls: ['./menu-desktop.component.scss'],
})
export class MenuDesktopComponent implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit() {}

  quemSomos(){
    this.router.navigate(['/quem-somos'])
  }
painelSolar(){
  this.router.navigate(['/painel-solar'])
}
iluminacaoProf(){
  this.router.navigate(['/iluminacao-profissional'])
}
outrosServ(){
  this.router.navigate(['/outros-servicos'])
}
contato(){
  this.router.navigate(['/contato'])
}
home(){
  this.router.navigate(['/home'])
}
}
