import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'quem-somos',
    loadChildren: () => import('./quem-somos/quem-somos.module').then( m => m.QuemSomosPageModule)
  },
  {
    path: 'painel-solar',
    loadChildren: () => import('./painel-solar/painel-solar.module').then( m => m.PainelSolarPageModule)
  },
  {
    path: 'iluminacao-profissional',
    loadChildren: () => import('./iluminacao/iluminacao.module').then( m => m.IluminacaoPageModule)
  },
  {
    path: 'outros-servicos',
    loadChildren: () => import('./outros-servicos/outros-servicos.module').then( m => m.OutrosServicosPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then( m => m.ContatoPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
