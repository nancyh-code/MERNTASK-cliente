import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import { TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA } from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 4 },
      { nombre: "Elegir Plataforma de pago", estado: false, proyectoId: 2 },
      { nombre: "Elegir Hosting", estado: true, proyectoId: 1 },
      { nombre: "Elegir Plataforma de pago", estado: false, proyectoId: 3 },
      { nombre: "Elegir Hosting", estado: true, proyectoId: 4 },
      { nombre: "Elegir Plataforma de pago", estado: false, proyectoId: 1 },
      { nombre: "Elegir Hosting", estado: true, proyectoId: 2 },
      { nombre: "Elegir Plataforma", estado: true, proyectoId: 3 },
      { nombre: "Elegir Plataforma de pago", estado: false, proyectoId: 4 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 1 },
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
  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        errorTarea: state.errorTarea,
        obtenerTareasFn,
        agregarTareaFn,
        validarTareaFn,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
