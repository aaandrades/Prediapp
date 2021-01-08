import { Component, OnInit } from "@angular/core";
import * as Leaflet from "leaflet";
import { antPath } from "leaflet-ant-path";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.page.html",
  styleUrls: ["./mapa.page.scss"],
})
export class MapaPage implements OnInit {
  map: Leaflet.Map;

  icon = {
    icon: Leaflet.icon({
      iconSize: [25, 41],
      iconAnchor: [13, 0],
      // specify the path here
      iconUrl: "../../../assets/marker-icon.png",
      shadowUrl: "../../../assets/marker-shadow.png",
    }),
  };

  constructor() {}

  ngOnInit() {}
  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    this.map = Leaflet.map("mapId").setView([4.584352, -74.136455], 15);
    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Prediapp",
    }).addTo(this.map);

    Leaflet.marker([4.58602, -74.14197], this.icon)
      .addTo(this.map)
      .bindPopup(`<div>ID: 126 <br>
      Fecha: 25/12/2020 <br>
      Visita Realizada: No</div>
      <ion-button (click)="this.functions()")>Ver</ion-button>`)
      .openPopup();
    Leaflet.marker([4.590638, -74.136541], this.icon)
      .addTo(this.map)
      .bindPopup("529");
    Leaflet.marker([4.581947, -74.135781], this.icon)
      .addTo(this.map)
      .bindPopup("1631");
  }

  functions() {
    console.log("OPRIMO BOTON")
  }
}
