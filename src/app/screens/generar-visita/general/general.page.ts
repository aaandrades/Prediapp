import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import {
  Validators,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { generalModel } from "../../../model/generar-visita.model";

@Component({
  selector: "app-general",
  templateUrl: "./general.page.html",
  styleUrls: ["./general.page.scss"],
})
export class GeneralPage implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  general_propietario: FormGroup;
  general_predio: FormGroup;
  general_descripcion: FormGroup;
  general_objeto: FormGroup;

  results: object = [];

  addVisit() {
    this.newItemEvent.emit("VALOR DESDE GENERAL");
  }

  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.initialFormGroup();
  }

  private initialFormGroup() {
    this.general_propietario = new FormGroup({
      nombre: new FormControl("", [Validators.required]),
      cedula: new FormControl(""),
      direccion: new FormControl(""),
      celular: new FormControl(""),
      email: new FormControl(""),
    });
    this.general_predio = new FormGroup({
      cedula_catastral: new FormControl(""),
      matricula_inmobiliaria: new FormControl("", [Validators.required]),
    });
    this.general_descripcion = new FormGroup({
      descripcion: new FormControl(""),
    });
    this.general_objeto = new FormGroup({
      objeto: new FormControl(""),
      escritura: new FormControl(""),
    });
  }

  onSubmit() {
    let navigationExtras: NavigationExtras = {
      relativeTo: this.activeRoute.parent,
      state: {
        general: this.appendVisit(),
      },
    };
    this.router.navigate(["inicio/generar-visita/ubicacion"], navigationExtras);
  }

  private appendVisit() {
    let visit: generalModel = {
      nombre: this.general_propietario.get("nombre").value,
      cedula: this.general_propietario.get("cedula").value,
      direccion: this.general_propietario.get("direccion").value,
      celular: this.general_propietario.get("celular").value,
      email: this.general_propietario.get("email").value,
      cedula_catastral: this.general_predio.get("cedula_catastral").value,
      matricula_inmobiliaria: this.general_predio.get("matricula_inmobiliaria").value,
      descripcion: this.general_descripcion.get("descripcion").value,
      objeto: this.general_objeto.get("objeto").value,
      escritura: this.general_objeto.get("escritura").value,
    };
    return visit;
  }
}
