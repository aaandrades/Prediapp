
import { generalModel } from "../model/generar-visita.model";
import { VisitActionTypes, VisitActions } from "./actions";


export let initialState = [{
  nombre: "Valor quemado al principio",
  cedula: "Valor quemado al principio",
  direccion: "Valor quemado al principio",
  celular: "Valor quemado al principio",
  email: "Valor quemado al principio",
  cedula_catastral: "Valor quemado al principio",
  matricula_inmobiliaria: "Valor quemado al principio",
}]

export function VisitReducer(state=initialState, action: VisitActions) {
    switch (action.type) {
        case VisitActionTypes.ADD_VISIT: 
            return [...state, action.payload]
        default: 
            return state
    }
}