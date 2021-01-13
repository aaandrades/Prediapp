import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  generalModel,
  ubicacionModel,
  fisicoModel,
  predioModel,
} from "../../model/generar-visita.model";

@Component({
  selector: "app-visitas-agendadas",
  templateUrl: "./visitas-agendadas.page.html",
  styleUrls: ["./visitas-agendadas.page.scss"],
})
export class VisitasAgendadasPage implements OnInit {

  visit: Observable<Array<any>>

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.visit = this.store.select('visit');
    console.log("VISITA: ",this.visit);
  }

  
}
 