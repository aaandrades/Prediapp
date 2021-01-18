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
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: "app-visita",
  templateUrl: "./visita.page.html",
  styleUrls: ["./visita.page.scss"],
})
export class VisitaPage implements OnInit {
  matricula: string;
  visit: Observable<Array<any>>;

  constructor(private route: ActivatedRoute,
  private store: Store<any>) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.matricula = params.matricula;
    })
    console.log("MATRICULA: ", this.matricula);
    this.visit = this.store.select("visits");
    this.visit.pipe().subscribe((data: any) => {
      console.log(data.filter(datas => datas.matricula_inmobiliaria == this.matricula));
          //  console.log("VISITA: ", data);
    });
  }

  onSubmit() {
  }
}