import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard } from '../services/auth-guard.service';

import { LeadsPage } from './leads.page';

const routes: Routes = [
  {
    path: '',
    component: LeadsPage,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadsPageRoutingModule {}
