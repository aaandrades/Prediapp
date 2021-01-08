import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {
  ubicacion_informacion: FormGroup;
  ubicacion_uso: FormGroup;
  ubicacion_sector: FormGroup;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { 
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

}
