import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PredioPageRoutingModule } from './predio-routing.module';
import { PredioPage } from './predio.page';
import { MatExpansionModule } from "@angular/material/expansion";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PredioPageRoutingModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
  declarations: [PredioPage]
})
export class PredioPageModule {}
