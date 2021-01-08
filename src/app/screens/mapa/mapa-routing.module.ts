import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaPage } from './mapa.page';

const routes: Routes = [
  {
    path: '',
    component: MapaPage
  },
  {
    path: '/visitas-agendadas',
    loadChildren: () => import('../visitas-agendadas/visitas-agendadas.module').then( m => m.VisitasAgendadasPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaPageRoutingModule {}
