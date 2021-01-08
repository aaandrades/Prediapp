import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from "../../store/app.state";
import {
  generalInterface,
  ubicacionInterface,
  fisicoInterface,
  predioInterface,
} from "../../screens/generar-visita/model/generar-visita.model";

@Component({
  selector: "app-visitas-agendadas",
  templateUrl: "./visitas-agendadas.page.html",
  styleUrls: ["./visitas-agendadas.page.scss"],
})
export class VisitasAgendadasPage implements OnInit {

  generals: Observable<generalInterface[]>;

  constructor(private store: Store) {
    this.generals = this.store.select('general').subscribe((visita) => {
      console.log('Visitas: ', visita)
    });
  }

  ngOnInit() {}

  
}
