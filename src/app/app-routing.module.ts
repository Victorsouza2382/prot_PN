import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'atracoes', loadChildren: './atracoes/atracoes.module#AtracoesPageModule' },
  { path: 'ocorrencias', loadChildren: './ocorrencias/ocorrencias.module#OcorrenciasPageModule' },
  { path: 'trilhas', loadChildren: './trilhas/trilhas.module#TrilhasPageModule' },
  { path: 'icmbio', loadChildren: './icmbio/icmbio.module#IcmbioPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'emergencia', loadChildren: './emergencia/emergencia.module#EmergenciaPageModule' },
  { path: 'avisos', loadChildren: './avisos/avisos.module#AvisosPageModule' },
  { path: 'validacao', loadChildren: './validacao/validacao.module#ValidacaoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
