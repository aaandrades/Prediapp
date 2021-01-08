import { Component, OnInit } from "@angular/core";
import { Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  user: FormGroup;
  loading: boolean = false;
  classloading: string = "";

  constructor(private router: Router) {}

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      password: new FormControl("", Validators.required),
    });
  }

  onSubmit() {
    this.classloading = "loadingBar"
    this.loading = true;
    setTimeout(() => { this.router.navigate(["/inicio"]); }, 2500);
  }
}

export interface User {
  name: string;
  password: string;
}
