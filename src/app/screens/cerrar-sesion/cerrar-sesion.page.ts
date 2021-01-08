import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cerrar-sesion",
  templateUrl: "./cerrar-sesion.page.html",
  styleUrls: ["./cerrar-sesion.page.scss"],
})
export class CerrarSesionPage implements OnInit {
  loader: boolean = false;
  classbg: string = "";

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => this.displayModal(), 1500);
    setTimeout(() => this.logout(), 3500);
  }

  displayModal() {
    this.loader = true;
    this.classbg = "loadingBar";
  }

  logout() {
    this.loader = false;
    this.classbg = "";
    this.router.navigate(["/home"])
  }
}
