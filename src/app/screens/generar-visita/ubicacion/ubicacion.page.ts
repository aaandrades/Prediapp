import { visitAll } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Store } from "@ngrx/store";
import * as Visit from 'src/app/store/actions';


@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {
  ubicacion_informacion: FormGroup;
  ubicacion_uso: FormGroup;
  ubicacion_sector: FormGroup;

  lat: number = 4.85;
  long: number = -74.5;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private geolocation: Geolocation,
    private store: Store) { 
  }

  ngOnInit() {
    this.ubicacion_informacion = new FormGroup({
      barrio: new FormControl("", [Validators.required]),
      municipio: new FormControl(""),
      departamento: new FormControl("")
    });
    this.ubicacion_uso = new FormGroup({
      clasificacion_suelo: new FormControl("", [Validators.required]),
      actividad: new FormControl(""),
      topografia: new FormControl("")
    });
    this.ubicacion_sector = new FormGroup({
      estado_vias: new FormControl(""),
      alumbrado: new FormControl(""),
      transporte: new FormControl(""),
      equipamientos: new FormControl(""),
    });
  }

  onSubmit() {
    this.router.navigate(['inicio/generar-visita/fisico'], { relativeTo: this.activeRoute.parent });
  }

  getCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  addTask() {
    this.store.dispatch(
      new Visit.AddProduct({
        nombre: "quemado no tanto",
        cedula: "quemado no tanto",
        direccion: "quemado no tanto",
        celular: "quemado no tanto",
        email: "quemado no tanto",
        cedula_catastral: "quemado no tanto",
        matricula_inmobiliaria: "quemado no tanto",
        descripcion: "quemado no tanto",
        objeto: '"quemado no tanto',
      })
    );
  }
}
