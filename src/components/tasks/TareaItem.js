import React, { useContext } from "react";
import tareaContext from "../../context/tareas/tareaContext";
import proyectoContext from "../../context/proyectos/proyectoContext";

const TareaItem = ({ tarea }) => {
  //Extraer proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //obtener state de tareas
  const tareasContext = useContext(tareaContext);
  const { eliminarTareaFn, obtenerTareasFn } = tareasContext;

  //Extraer el proyecto
  const [proyectoActual] = proyecto;

  //Función que se ejecuta con el botón de eliminar tarea
  const tareaEliminar = (id) => {
    eliminarTareaFn(id);
    obtenerTareasFn(proyectoActual.id);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
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
