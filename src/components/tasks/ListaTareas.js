import React, { useContext } from "react";
import TareaItem from "./TareaItem";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const ListaTareas = () => {
  //Extraer proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyectoFn } = proyectosContext;

  //  obtener las tareas del proyecto
  const tareasContext = useContext(tareaContext);
  const { tareasProyecto } = tareasContext;

  //Si no hay proyecto seleccionado
  if (!proyecto) return <h2>Selecciona un proyecto</h2>;

  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //Elimina un proyecto
  const onClickEliminar = () => {
    eliminarProyectoFn(proyectoActual.id);
  };
  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => (
            <TareaItem key={tarea.id} tarea={tarea} />
          ))
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListaTareas;
