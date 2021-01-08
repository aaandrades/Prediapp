import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ToolbarComponent, ],
  exports: [
    ToolbarComponent,
    
  ],
  imports: [
    IonicModule.forRoot(),
    CommonModule
  ],
})
export class ComponentsModule { }
