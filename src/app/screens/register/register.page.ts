import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  user: FormGroup;
  loading: boolean = false;
  classloading: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      correo: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
      ]),
      codigo_empresa: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
      ]),
      password: new FormControl("", Validators.required),
      password_confirm: new FormControl("", Validators.required),
    });
  }

  onSubmit() {
    this.classloading = "loadingBar";
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(["/inicio"]);
    }, 2500);
  }
}

export interface Register {
  name: string;
  corre: string;
  codigo_empresa: number;
  password: string;
}
