import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { Location } from "@angular/common";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.page.html",
  styleUrls: ["./perfil.page.scss"],
})
export class PerfilPage implements OnInit {
  password: boolean = false;

  constructor(private LoadingComponent: LoadingController) {}

  ngOnInit() {}

  activateForm() {
    this.password = !this.password;
  }

  async presentLoading() {
    const loading = await this.LoadingComponent.create({
      cssClass: "class",
      message: "Actualizando Datos",
      duration: 2000,
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    this.password = !this.password;
  }
}
