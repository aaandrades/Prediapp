import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitasAgendadasPage } from './visitas-agendadas.page';
import { VisitaPageModule } from './visita/visita.module';

const routes: Routes = [
  {
    path: '',
    component: VisitasAgendadasPage
  },
  {
    path: 'visita/:matricula',
    loadChildren: () => import('./visita/visita.module').then( m => m.VisitaPageModule)
  },
  {
    path: 'crear-visita',
    loadChildren: () => import('./nueva-visita/nueva-visita.module').then( m => m.NuevaVisitaPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitasAgendadasPageRoutingModule {}
