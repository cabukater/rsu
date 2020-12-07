import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelSolarPage } from './painel-solar.page';

const routes: Routes = [
  {
    path: '',
    component: PainelSolarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PainelSolarPageRoutingModule {}
