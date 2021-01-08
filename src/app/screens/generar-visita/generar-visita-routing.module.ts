import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GenerarVisitaPage } from "./generar-visita.page";

const routes: Routes = [
  {
    path: "",
    component: GenerarVisitaPage,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./general/general.module").then((m) => m.GeneralPageModule),
      },
      {
        path: "predio",
        loadChildren: () =>
          import("./predio/predio.module").then((m) => m.PredioPageModule),
      },
      {
        path: "fisico",
        loadChildren: () =>
          import("./fisico/fisico.module").then((m) => m.FisicoPageModule),
      },
      {
        path: "general",
        loadChildren: () =>
          import("./general/general.module").then((m) => m.GeneralPageModule),
      },
      {
        path: "ubicacion",
        loadChildren: () =>
          import("./ubicacion/ubicacion.module").then(
            (m) => m.UbicacionPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarVisitaPageRoutingModule {}
