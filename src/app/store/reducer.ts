import { generalModel } from "../model/generar-visita.model";
import { VisitActionTypes, VisitActions } from "./actions";

export let initialState = [
  {
    general: {
      nombre: "Carlos Pinto Salazar",
      cedula: "19902734",
      direccion: "Carrera 29 No 52B 24 sur",
      celular: "3175262626",
      email: "cpintos@gmail.com",
      cedula_catastral: "N/A",
      matricula_inmobiliaria: "050S-568923",
      fecha: "05/12/2020",
      descripcion:
        "Predio ubicado en el barrio El Carmen, posee dos entradas y porton, consta de 3 pisos y terraza",
      objeto: "Predio requerido para crédito hipotecario.",
      escritura_disponible:
        "EP 1254 de la notaria tercera de Bogotá - 15-23-2006 constitute a compraventa.",
    },
    ubicacion: {
      barrio: "El Carmen",
      municipio: "Bogotá D.C.",
      departamento: "Bogotá D.C.",
      clasificacion_suelo: "Residencial",
      actividad: "Residencial",
      topografia: "Plana",
      latitud: "4.6544",
      longitud: "-74.154",
      estado_vias: "Bueno",
      estrato: "2",
      alumbrado: "Sí",
      transporte: "Sí",
      equipamientos: "Sí",
    },
    fisico: {
      norte:
        "Linda por el norte con la carrera 29 con una extensión de 12 metros.",
      sur:
        "Linda por el sur con la propiedad de Emilio Pastura con una extensión de 12 metros.",
      oriente:
        "Linda por el oriente con la propiedad de Margarita Chavez con una extensión de 20 metros.",
      occidente:
        "Linda por el occidente con una propiedad sin información en un total de 20 metros.",
      area_terreno: "240 metros cuadrados",
      construccion: {
        construccion_1: {
          descripcion_construccion:
            "Construcción por extensión de 3 pisos regulares construidos",
          area_construccion: "190",
          unidad_construccion: "Metros cuadrados",
        },
      },
    },
    predio: {
      licencia: "No",
      ph: "No",
      electricidad: "Sí",
      agua: "Sí",
      gas_natural: "Sí",
      alcantarillado: "Sí",
      telefono: "Sí",
      internet: "Sí",
      riesgo: "No",
    },
  },
  {
    general: {
      nombre: "Lidia Sánchez Basto",
      cedula: "51760491",
      direccion: "Carrera 25 No 52G 59 sur",
      celular: "3143011536",
      email: "lidia.maria.sanchez@gmail.com",
      cedula_catastral: "N/A",
      matricula_inmobiliaria: "050S-785926",
      fecha: "05/06/2021",
      descripcion_general:
        "Predio ubicado en el barrio El Carmen, posee dos entradas y porton, consta de 3 pisos y terraza",
      objeto: "Predio requerido para crédito hipotecario.",
      escritura_disponible:
        "EP 1254 de la notaria tercera de Bogotá - 15-23-2006 constitute a compraventa.",
    },
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
