import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FisicoPage } from './fisico.page';

const routes: Routes = [
  {
    path: '',
    component: FisicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FisicoPageRoutingModule {}
