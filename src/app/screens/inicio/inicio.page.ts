import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public selectedIndex = 0;

  public appPages = [
    {
      title: "Perfil",
      url: "perfil",
      icon: "person",
    },
    {
      title: "Mapa de Visitas",
      url: "mapa",
      icon: "map",
    },
    {
      title: "Visitas Asignadas",
      url: "visitas-agendadas",
      icon: "calendar",
    },
    {
      title: "Generar Visita",
      url: "generar-visita",
      icon: "create",
    },
    {
      title: "Cerrar Sesión",
      url: "cerrar-sesion",
      icon: "log-out",
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  muestro() {
  }

}
