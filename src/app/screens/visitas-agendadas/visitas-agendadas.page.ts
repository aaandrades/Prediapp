import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import {
  generalModel,
  ubicacionModel,
  fisicoModel,
  predioModel,
} from "../../model/generar-visita.model";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";


@Component({
  selector: "app-visitas-agendadas",
  templateUrl: "./visitas-agendadas.page.html",
  styleUrls: ["./visitas-agendadas.page.scss"],
})
export class VisitasAgendadasPage implements OnInit {
  aspecto_general: object = [];
  visit: Observable<Array<any>>;
  loading: boolean = true;

  new_visit = [{
    direccion: 'Calle 52G No 35 - 25 sur',
    matricula: '050N-654654',
    encargado: 'José Felipe Mondragon'
  }]; 


  constructor(private store: Store<any>, private router:Router, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.visit = this.store.select("visits");
    this.visit.pipe().subscribe((data: any) => {
      this.aspecto_general = data;
    });
    setTimeout(() => { this.loading = false; }, 2000);
    try {
      this.activeRoute.queryParams.subscribe((params) => {
        this.new_visit = this.router.getCurrentNavigation().extras.state.nueva;
      });
    } catch {
      this.new_visit = [{
        direccion: 'Calle 52G No 35 - 25 sur',
        matricula: '050N-654654',
        encargado: 'José Felipe Mondragon'
      }]; 
    }
    
  }

  createNewVisit() {
    let navigationExtras: NavigationExtras = {
      relativeTo: this.activeRoute.parent,
      state: {
        visitas_actuales: this.new_visit 
      },
    };
    this.router.navigate(["inicio/visitas-agendadas/crear-visita"], navigationExtras);
  }
}
