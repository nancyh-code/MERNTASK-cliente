import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
} from "../../types";
import { v4 as uuidv4 } from "uuid";

const ProyectoContextState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda Virtual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "Diseño de sitio web" },
    { id: 4, nombre: "MERN" },
  ];

  const initialState = {
    proyectos: [],
    formularioProyecto: false,
    errorFormulario: false,
    proyectoSeleccionado: null,
  };

  //Ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //Funciones para el CRUD
  const mostrarFormularioFn = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  //Obtener los proyectos
  const obtenerProyectosFn = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  //Añadiendo proyectos
  const agregarProyectoFn = (proyecto) => {
    proyecto.id = uuidv4();
    //Insertar el proyecto en el state
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  //Validar formulario por errores
  const mostrarErrorFn = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };
  //Proyecto seleccionado
  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formularioProyecto: state.formularioProyecto,
        errorFormulario: state.errorFormulario,
        proyectoSeleccionado: state.proyectoSeleccionado,
        mostrarFormularioFn,
        obtenerProyectosFn,
        agregarProyectoFn,
        mostrarErrorFn,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoContextState;
