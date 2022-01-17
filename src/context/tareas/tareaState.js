import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
} from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { id: 3, nombre: "Elegir Colores", estado: false, proyectoId: 4 },
      {
        id: 4,
        nombre: "Elegir Plataforma de pago",
        estado: false,
        proyectoId: 2,
      },
      { id: 5, nombre: "Elegir Hosting", estado: true, proyectoId: 1 },
      {
        id: 6,
        nombre: "Elegir Plataforma de pago",
        estado: false,
        proyectoId: 3,
      },
      { id: 7, nombre: "Elegir Hosting", estado: true, proyectoId: 4 },
      {
        id: 8,
        nombre: "Elegir Plataforma de pago",
        estado: false,
        proyectoId: 1,
      },
      { id: 9, nombre: "Elegir Hosting", estado: true, proyectoId: 2 },
      { id: 10, nombre: "Elegir Plataforma", estado: true, proyectoId: 3 },
      {
        id: 11,
        nombre: "Elegir Plataforma de pago",
        estado: false,
        proyectoId: 4,
      },
      { id: 12, nombre: "Elegir Colores", estado: false, proyectoId: 1 },
    ],
    tareasProyecto: null,
    errorTarea: false,
  };
  // Crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //Crear funciones

  //Tareas del proyecto
  const obtenerTareasFn = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  //Agregar una tarea al proyecto seleccionado
  const agregarTareaFn = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  //Validar y mostrar un error si es necesario
  const validarTareaFn = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  //Eliminar tarea por proyectoId
  const eliminarTareaFn = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        errorTarea: state.errorTarea,
        obtenerTareasFn,
        agregarTareaFn,
        validarTareaFn,
        eliminarTareaFn,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
