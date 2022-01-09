import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from "../../types";

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
      Type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formularioProyecto: state.formularioProyecto,
        mostrarFormularioFn,
        obtenerProyectosFn,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoContextState;
