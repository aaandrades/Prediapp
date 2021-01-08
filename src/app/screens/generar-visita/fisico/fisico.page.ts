import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-fisico',
  templateUrl: './fisico.page.html',
  styleUrls: ['./fisico.page.scss'],
})
export class FisicoPage implements OnInit {
  fisico_linderos: FormGroup;
  fisico_construcciones: FormGroup;
  fisico_cultivos: FormGroup;

  construcciones = ['Construcción 1'];
  cultivos = ['Cultivo y/o Especies 1'];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.fisico_linderos = new FormGroup({
      norte: new FormControl("",[Validators.required]),
      sur: new FormControl("",[Validators.required]),
      oriente: new FormControl("",[Validators.required]),
      occidente: new FormControl("",[Validators.required])
    });

    this.fisico_construcciones = new FormGroup({
      descripcion: new FormControl(""),
      area: new FormControl(""),
      unidad: new FormControl("")
    });

    this.fisico_cultivos = new FormGroup({
      descripcion: new FormControl(""),
      area: new FormControl(""),
      unidad: new FormControl("")
    });
  }

  onSubmit() {
    this.router.navigate(['inicio/generar-visita/predio'], { relativeTo: this.activeRoute.parent });
  }

  addConstruccion() {
    this.construcciones.push(`Construcción ${this.construcciones.length +1}`)
  }

  addCultivo() {
    this.cultivos.push(`Cultivo y/o Especies ${this.cultivos.length +1}`)
  }

}
