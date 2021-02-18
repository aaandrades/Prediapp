import { Component, OnInit } from "@angular/core";
import { Validators, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import * as Visit from "src/app/store/actions";
import { predioModel } from '../../../model/generar-visita.model';
import { AlertController, LoadingController } from '@ionic/angular';


import {
  generalModel,
  ubicacionModel,
  fisicoModel,
} from "../../../model/generar-visita.model";

@Component({
  selector: "app-predio",
  templateUrl: "./predio.page.html",
  styleUrls: ["./predio.page.scss"],
})
export class PredioPage implements OnInit {

  loader: boolean = false;
  classbg: string = "";

  predio_descripcion: FormGroup;
  predio_servicios: FormGroup;
  predio_riesgo: FormGroup;

  general_visit: generalModel;
  ubicacion_visit: ubicacionModel;
  fisico_visit: any;
  predio_visit: predioModel;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private store: Store,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.activeRoute.queryParams.subscribe((params) => {
      this.general_visit = this.router.getCurrentNavigation().extras.state.general;
      this.ubicacion_visit = this.router.getCurrentNavigation().extras.state.ubicacion;
      this.fisico_visit = this.router.getCurrentNavigation().extras.state.fisico;
    });
  }

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
    this.appendVisit();
    this.store.dispatch(
      new Visit.AddProduct(
        this.orchestrateVisit()
      )
    );
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Finalizar la visita?',
      message: 'La visita será enviada al sistema',
      buttons: [
        {
          text: 'Enviar',
          handler: async () => {
            this.onSubmit();
            await this.presentLoading();
            this.router.navigate(["inicio"]);            
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Continuar Editando');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Enviando visita',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  private orchestrateVisit() {
    return {
      general: this.general_visit,
      ubicacion: this.ubicacion_visit,
      fisico: this.fisico_visit,
      predio: this.predio_visit,
    };
  }

  private appendVisit() {
    this.predio_visit = {
      licencia: this.predio_descripcion.get("licencia").value,
      no_licencia: this.predio_descripcion.get("no_licencia").value,
      ph: this.predio_descripcion.get("ph").value,
      ph_torres: this.predio_descripcion.get("ph_torres").value,
      ph_pisos: this.predio_descripcion.get("ph_pisos").value,
      ph_unidades: this.predio_descripcion.get("ph_unidades").value,
      electricidad: this.predio_servicios.get("electricidad").value,
      agua: this.predio_servicios.get("agua").value,
      gas_natural: this.predio_servicios.get("gas_natural").value,
      alcantarillado: this.predio_servicios.get("alcantarillado").value,
      telefono: this.predio_servicios.get("telefono").value,
      internet: this.predio_servicios.get("internet").value,
      riesgo: this.predio_riesgo.get("riesgo").value,
      riesgo_descripcion: this.predio_riesgo.get("riesgo_descripcion").value,
    };
  }
}
