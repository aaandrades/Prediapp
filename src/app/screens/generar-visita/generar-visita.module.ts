import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { GenerarVisitaPageRoutingModule } from './generar-visita-routing.module';
import { GenerarVisitaPage } from './generar-visita.page';
import { ComponentsModule } from 'src/app/components/components.module';

import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarVisitaPageRoutingModule,
    ComponentsModule,
    MatExpansionModule,
    
  ],
  declarations: [GenerarVisitaPage]
})
export class GenerarVisitaPageModule {}
