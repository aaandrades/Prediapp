import { Component, OnInit } from "@angular/core";
import { Validators, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-predio",
  templateUrl: "./predio.page.html",
  styleUrls: ["./predio.page.scss"],
})
export class PredioPage implements OnInit {
  predio_descripcion: FormGroup;
  predio_servicios: FormGroup;
  predio_riesgo: FormGroup;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.predio_descripcion = new FormGroup({
      licencia: new FormControl("", [Validators.required]),
      no_licencia: new FormControl(""),
      ph: new FormControl("", [Validators.required]),
      ph_torres: new FormControl(""),
      ph_pisos: new FormControl(""),
      ph_unidades: new FormControl(""),
    });
    this.predio_servicios = new FormGroup({
      electricidad: new FormControl("", [Validators.required]),
      agua: new FormControl(""),
      gas_natural: new FormControl("", [Validators.required]),
      alcantarillado: new FormControl(""),
      telefono: new FormControl(""),
      internet: new FormControl(""),
    });
    this.predio_riesgo = new FormGroup({
      riesgo: new FormControl("", [Validators.required]),
      riesgo_descripcion: new FormControl(""),
    });
  }

  onSubmit() {
    console.log("FINISH");
  }
}
