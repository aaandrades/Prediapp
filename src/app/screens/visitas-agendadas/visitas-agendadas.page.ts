import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
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
  aspecto_general: object = [];
  visit: Observable<Array<any>>;
  loading: boolean = true;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.visit = this.store.select("visits");
    this.visit.pipe().subscribe((data: any) => {
      this.aspecto_general = data;
      console.log("VISITA: ", data);
    });
    setTimeout(() => { this.loading = false; }, 2000);
  }
}
