import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import {
  fisicoModel,
  generalModel,
  ubicacionModel,
} from "../../../model/generar-visita.model";

@Component({
  selector: "app-fisico",
  templateUrl: "./fisico.page.html",
  styleUrls: ["./fisico.page.scss"],
})
export class FisicoPage implements OnInit {
  fisico_linderos: FormGroup;
  fisico_construcciones: FormGroup;
  fisico_cultivos: FormGroup;

  construcciones = ["Construcción 1"];
  cultivos = ["Cultivo y/o Especies 1"];

  general_visit: generalModel;
  ubicacion_visit: ubicacionModel;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe((params) => {
      this.general_visit = this.router.getCurrentNavigation().extras.state.general;
      this.ubicacion_visit = this.router.getCurrentNavigation().extras.state.ubicacion;
    });
  }

  ngOnInit() {
    this.initialFormGroup();
  }

  private initialFormGroup() {
    this.fisico_linderos = new FormGroup({
      norte: new FormControl("", [Validators.required]),
      sur: new FormControl("", []),
      oriente: new FormControl("", []),
      occidente: new FormControl("", []),
      area_terreno: new FormControl(""),
    });

    this.fisico_construcciones = new FormGroup({
      descripcion_construccion: new FormControl(""),
      area_construccion: new FormControl(""),
      unidad_construccion: new FormControl(""),
    });

    this.fisico_cultivos = new FormGroup({
      descripcion_cultivos: new FormControl(""),
      area_cultivos: new FormControl(""),
      unidad_cultivos: new FormControl(""),
    });
  }

  onSubmit() {
    let navigationExtras: NavigationExtras = {
      relativeTo: this.activeRoute.parent,
      state: {
        general: this.general_visit,
        ubicacion: this.ubicacion_visit,
        fisico: this.appendVisit(),
      },
    };
    this.router.navigate(["inicio/generar-visita/predio"], navigationExtras);
  }

  private appendVisit() {
    let visit = {
      norte: this.fisico_linderos.get("norte").value,
      sur: this.fisico_linderos.get("sur").value,
      oriente: this.fisico_linderos.get("oriente").value,
      occidente: this.fisico_linderos.get("occidente").value,
      construccion: {
        construccion_1: {
          descripcion_construccion: this.fisico_construcciones.get("descripcion_construccion").value,
          area_construccion: this.fisico_construcciones.get("area_construccion").value,
          unidad_construccion: this.fisico_construcciones.get("unidad_construccion").value,
        }
      },
      cultivos: {
        cultivos_1: {
          descripcion_cultivos: this.fisico_cultivos.get("descripcion_cultivos").value,
          area_cultivos: this.fisico_cultivos.get("area_cultivos").value,
          unidad_cultivos: this.fisico_cultivos.get("unidad_cultivos").value,
        }
      }
      
    };
    return visit;
  }

  addConstruccion() {
    this.construcciones.push(`Construcción ${this.construcciones.length + 1}`);
  }

  addCultivo() {
    this.cultivos.push(`Cultivo y/o Especies ${this.cultivos.length + 1}`);
  }
}
