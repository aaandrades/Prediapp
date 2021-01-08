// 1 - Importaciones
import { Action } from "@ngrx/store";
import {
  generalInterface,
  ubicacionInterface,
  fisicoInterface,
  predioInterface,
} from "../screens/generar-visita/model/generar-visita.model";

// 2 - Definición del tipo de acción
export const ADD_VISIT = "Add new visit";

// 3 - Creación de la clase tipo AddTask
export class AddVisit implements Action {
  readonly type = ADD_VISIT;
  constructor(public payload: generalInterface) {}
}

// 4 - Exportación de la acción
export type Actions = AddVisit;
