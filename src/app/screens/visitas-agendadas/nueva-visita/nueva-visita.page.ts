import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-nueva-visita",
  templateUrl: "./nueva-visita.page.html",
  styleUrls: ["./nueva-visita.page.scss"],
})
export class NuevaVisitaPage implements OnInit {
  matricula: string;  
  visit: Observable<Array<any>>;
  visita_actual: object = [];
  visita: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<any>) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(this.router.getCurrentNavigation().extras.state.visitas_actuales) ;
    });
    this.visita = new FormGroup({
      nombre: new FormControl("", [Validators.required]),
      celular: new FormControl("",),
      cedula: new FormControl(""),
      direccion: new FormControl(""),
      matricula: new FormControl(""),
      observacion: new FormControl(""),
    });
  }

  onSubmit() { }
  
  return() {
    let navigationExtras: NavigationExtras = {
      relativeTo: this.route.parent,
      state: {
        actual: {
          direccion: 'Calle 52G No 35 - 25 sur',
          matricula: '050N-654654',
          encargado: 'José Felipe Mondragon'
        },
        nueva: {
            direccion: 'Calle 52G No 35 - 25 sur',
            matricula: '050N-654654',
            encargado: 'José Felipe Mondragonasd'
        }
      },
    };
    this.router.navigate(["inicio/visitas-agendadas"], navigationExtras);
  }
}
