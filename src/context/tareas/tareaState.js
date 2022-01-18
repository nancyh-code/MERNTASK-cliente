import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
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
    tareaSeleccionada: null,
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
    tarea.id = uuidv4();
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

  //Cambia el estado de cada tarea
  const cambiaEstadoTareaFn = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  //Extrae una tarea para edición
  const guardarTareaActualFn = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  //Editar o modificar una tarea
  const actualizarTareaFn = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  //Eliminar la tarea seleccionada
  const limpiarTareaFn = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };
  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        errorTarea: state.errorTarea,
        tareaSeleccionada: state.tareaSeleccionada,
        obtenerTareasFn,
        agregarTareaFn,
        validarTareaFn,
        eliminarTareaFn,
        cambiaEstadoTareaFn,
        guardarTareaActualFn,
        actualizarTareaFn,
        limpiarTareaFn,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
