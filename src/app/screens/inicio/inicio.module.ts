import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { InicioPageRoutingModule } from "./inicio-routing.module";

import { InicioPage } from "./inicio.page";
import { NoticiasComponent } from './noticias/noticias.component';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, InicioPageRoutingModule],
  declarations: [InicioPage, NoticiasComponent],
  providers: [InAppBrowser]
})
export class InicioPageModule {}
