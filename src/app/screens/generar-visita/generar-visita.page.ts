import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

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

}
