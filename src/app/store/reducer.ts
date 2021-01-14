import { generalModel } from "../model/generar-visita.model";
import { VisitActionTypes, VisitActions } from "./actions";

export let initialState = [
  {
    nombre: "Carlos Pinto Salazar",
    cedula: "19902734",
    direccion: "Carrera 15 No 24 31 sur",
    celular: "3175262626",
    email: "cpintos@gmail.com",
    cedula_catastral: "N/A",
    matricula_inmobiliaria: "050S-568923",
  },
  {
    nombre: "Lidia Sánchez Basto",
    cedula: "51760491",
    direccion: "Carrera 29 No 52B 24 sur",
    celular: "23143011536",
    email: "lidia.maria.sanchez@gmail.com",
    cedula_catastral: "N/A",
    matricula_inmobiliaria: "050S-785926",
  },
];

export function VisitReducer(state = initialState, action: VisitActions) {
  switch (action.type) {
    case VisitActionTypes.ADD_VISIT:
      return [...state, action.payload];
    default:
      return state;
  }
}