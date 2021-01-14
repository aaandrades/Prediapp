import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: "app-visita",
  templateUrl: "./visita.page.html",
  styleUrls: ["./visita.page.scss"],
})
export class VisitaPage implements OnInit {
  matricula: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.matricula = params.matricula;
    })
    console.log("MATRICULA: ", this.matricula);
  }

  onSubmit() {
  }
}