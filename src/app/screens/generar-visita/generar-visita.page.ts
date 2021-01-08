import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generar-visita',
  templateUrl: './generar-visita.page.html',
  styleUrls: ['./generar-visita.page.scss'],
})
export class GenerarVisitaPage implements OnInit {
  public seccion: string = 'General';

  constructor() { }

  ngOnInit() {

  }

  onChange(tabName: string) {
    this.seccion = tabName;
  }

}
