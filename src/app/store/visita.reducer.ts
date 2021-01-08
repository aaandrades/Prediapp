// 1 - Importaciones
import {
  generalInterface,
  ubicacionInterface,
  fisicoInterface,
  predioInterface,
} from "../screens/generar-visita/model/generar-visita.model";
import * as VisitActions from "./visita.actions";

// 2 - Estado inicial
const initialState: generalInterface = {
  nombre: "quemado",
  cedula: "quemado",
  direccion: "quemado",
  celular: "quemado",
  email: "quemado",
  cedula_catastral: "quemado",
  matricula_inmobiliaria: "quemado",
  descripcion: "quemado",
  objeto: '"quemado',
};

// 3 - Switch con las funciones puras
export function visitReducer(
  state: generalInterface[] = [initialState],
  action: VisitActions.Actions
) {
  switch (action.type) {
    case VisitActions.ADD_VISIT:
      return [...state, action.payload];
    default:
      return state;
  }
}
