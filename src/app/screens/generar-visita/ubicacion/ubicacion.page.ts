import { visitAll } from "@angular/compiler";
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import {
  Validators,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { PhotoService } from "src/app/services/photo.service";

import {
  generalModel,
  ubicacionModel,
} from "../../../model/generar-visita.model";

@Component({
  selector: "app-ubicacion",
  templateUrl: "./ubicacion.page.html",
  styleUrls: ["./ubicacion.page.scss"],
})
export class UbicacionPage implements OnInit {
  ubicacion_informacion: FormGroup;
  ubicacion_uso: FormGroup;
  ubicacion_sector: FormGroup;

  lat: number;
  long: number;

  general_visit: generalModel;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private geolocation: Geolocation,
    private photoService: PhotoService
  ) {
    this.activeRoute.queryParams.subscribe((params) => {
      this.general_visit = this.router.getCurrentNavigation().extras.state.general;
    });
  }

  ngOnInit() {
    this.initialFormGroup();
  }

  private initialFormGroup() {
    this.ubicacion_informacion = new FormGroup({
      barrio: new FormControl("", [Validators.required]),
      municipio: new FormControl(""),
      departamento: new FormControl(""),
    });
    this.ubicacion_uso = new FormGroup({
      clasificacion_suelo: new FormControl("", [Validators.required]),
      actividad: new FormControl(""),
      topografia: new FormControl(""),
    });
    this.ubicacion_sector = new FormGroup({
      estado_vias: new FormControl(""),
      estrato: new FormControl(""),
      alumbrado: new FormControl(""),
      transporte: new FormControl(""),
      equipamientos: new FormControl(""),
    });
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  onSubmit() {
    let navigationExtras: NavigationExtras = {
      relativeTo: this.activeRoute.parent,
      state: {
        general: this.general_visit,
        ubicacion: this.appendVisit()
      },
    };
    this.router.navigate(["inicio/generar-visita/fisico"], navigationExtras);
  }

  getCoordinates() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.lat = resp.coords.latitude;
        this.long = resp.coords.longitude;
      })
      .catch((error) => {
        console.error("Error obteniendo la ubicación", error);
      });
  }

  private appendVisit() {
    let visit: ubicacionModel = {
      barrio: this.ubicacion_informacion.get("barrio").value,
      municipio: this.ubicacion_informacion.get("municipio").value,
      departamento: this.ubicacion_informacion.get("departamento").value,
      clasificacion_suelo: this.ubicacion_uso.get("clasificacion_suelo").value,
      actividad: this.ubicacion_uso.get("actividad").value,
      topografia: this.ubicacion_uso.get("topografia").value,
      estado_vias: this.ubicacion_sector.get("estado_vias").value,
      estrato: this.ubicacion_sector.get("estrato").value,
      lat: this.lat,
      long: this.long,
      alumbrado: this.ubicacion_sector.get("alumbrado").value,
      transporte: this.ubicacion_sector.get("transporte").value,
      equipamientos: this.ubicacion_sector.get("equipamientos").value,
    };
    return visit;
  }

}
