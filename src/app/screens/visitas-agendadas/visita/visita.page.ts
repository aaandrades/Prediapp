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
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-visita",
  templateUrl: "./visita.page.html",
  styleUrls: ["./visita.page.scss"],
})
export class VisitaPage implements OnInit {
  matricula: string;
  visit: Observable<Array<any>>;
  visita_actual: object = [];

  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.matricula = params.matricula;
    });
    this.visit = this.store.select("visits");
    this.visit.pipe().subscribe((data: any) => {
      this.visita_actual = data.filter(
        (datas) => datas.general.matricula_inmobiliaria == this.matricula
      )[0];
    });
  }

  onSubmit() {}
}
