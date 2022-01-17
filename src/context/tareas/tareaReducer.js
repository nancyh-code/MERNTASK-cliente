import { TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TAREAS_PROYECTO:
      return {
        ...state,
        tareasProyecto: state.tareas.filter(
          (tarea) => tarea.proyectoId === action.payload
        ),
      };
    case AGREGAR_TAREA:
      return {
        ...state,
        tareas: [...state.tareas, action.payload],
        errorTarea: false,
      };
    case VALIDAR_TAREA:
      return {
        ...state,
        errorTarea: true,
      };

    default:
      return state;
  }
};
