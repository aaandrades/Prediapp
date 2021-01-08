import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})
export class GeneralPage implements OnInit {
  general_propietario: FormGroup;
  general_predio: FormGroup;
  general_descripcion: FormGroup;
  general_objeto: FormGroup;

  results = [{
    contenido: "random"
  }];
  

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.general_propietario = new FormGroup({
      nombre: new FormControl("", [Validators.required]),
      cedula: new FormControl(""),
      direccion: new FormControl(""),
      celular: new FormControl(""),
      email: new FormControl(""),
    });
    this.general_predio = new FormGroup({
      cedula_catastral: new FormControl("",),
      matricula_inmobiliaria: new FormControl("",[Validators.required]),
    });
    this.general_descripcion = new FormGroup({
      descripcion: new FormControl(""),
    })
    this.general_objeto = new FormGroup({
      objeto: new FormControl(""),
      escritura: new FormControl(""),
    })
  }

  onSubmit() {
    this.router.navigate(['inicio/generar-visita/ubicacion'], { relativeTo: this.activeRoute.parent, state: this.results });
  }
}
