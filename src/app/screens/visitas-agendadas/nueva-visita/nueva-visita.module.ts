import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaVisitaPageRoutingModule } from './nueva-visita-routing.module';

import { NuevaVisitaPage } from './nueva-visita.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaVisitaPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [NuevaVisitaPage]
})
export class NuevaVisitaPageModule {}
