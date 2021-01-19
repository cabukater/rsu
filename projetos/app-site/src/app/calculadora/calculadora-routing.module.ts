import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    IonicModule,
    RouterModule],
  
})
export class CalculadoraPageRoutingModule {}
