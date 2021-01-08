import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UbicacionPageRoutingModule } from './ubicacion-routing.module';
import { MatExpansionModule } from "@angular/material/expansion";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UbicacionPage } from './ubicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicacionPageRoutingModule,
    ReactiveFormsModule,
    MatExpansionModule
  ],
  declarations: [UbicacionPage]
})
export class UbicacionPageModule {}
