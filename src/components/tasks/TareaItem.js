import React, { useContext } from "react";
import tareaContext from "../../context/tareas/tareaContext";
import proyectoContext from "../../context/proyectos/proyectoContext";

const TareaItem = ({ tarea }) => {
  //Extraer proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //obtener state de tareas
  const tareasContext = useContext(tareaContext);
  const {
    eliminarTareaFn,
    obtenerTareasFn,
    cambiaEstadoTareaFn,
    guardarTareaActualFn,
  } = tareasContext;

  //Extraer el proyecto
  const [proyectoActual] = proyecto;

  //Función que se ejecuta con el botón de eliminar tarea
  const tareaEliminar = (id) => {
    eliminarTareaFn(id);
    obtenerTareasFn(proyectoActual.id);
  };

  //Función que modifica el estado de las tareas
  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = false;
    }
    cambiaEstadoTareaFn(tarea);
  };

  //Seleccionar tarea para editarla
  const seleccionarTarea = (tarea) => {
    guardarTareaActualFn(tarea);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button
            type="button"
            className="completo"
            onClick={() => cambiarEstado(tarea)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => cambiarEstado(tarea)}
          >
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => seleccionarTarea(tarea)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default TareaItem;
