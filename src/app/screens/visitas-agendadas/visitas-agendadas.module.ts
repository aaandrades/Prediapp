import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitasAgendadasPageRoutingModule } from './visitas-agendadas-routing.module';

import { VisitasAgendadasPage } from './visitas-agendadas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitasAgendadasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VisitasAgendadasPage]
})
export class VisitasAgendadasPageModule {}
