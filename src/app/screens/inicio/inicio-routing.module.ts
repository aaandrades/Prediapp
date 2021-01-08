import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'perfil',
    loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('../mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'visitas-agendadas',
    loadChildren: () => import('../visitas-agendadas/visitas-agendadas.module').then( m => m.VisitasAgendadasPageModule)
  },
  {
    path: 'generar-visita',
    loadChildren: () => import('../generar-visita/generar-visita.module').then( m => m.GenerarVisitaPageModule)
  },
  {
    path: 'cerrar-sesion',
    loadChildren: () => import('../cerrar-sesion/cerrar-sesion.module').then( m => m.CerrarSesionPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
