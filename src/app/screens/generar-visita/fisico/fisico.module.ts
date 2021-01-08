import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from "@angular/material/expansion";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FisicoPageRoutingModule } from './fisico-routing.module';
import { FisicoPage } from './fisico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FisicoPageRoutingModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
  declarations: [FisicoPage]
})
export class FisicoPageModule {}
