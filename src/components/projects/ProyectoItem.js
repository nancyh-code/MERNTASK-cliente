import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";
const ProyectoItem = ({ proyecto }) => {
  //Obtener state de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActualFn } = proyectosContext;

  //obtener state de tareas
  const tareasContext = useContext(tareaContext);
  const { obtenerTareasFn } = tareasContext;

  //Función para agregar al proyecto
  const seleccionarProyecto = (id) => {
    proyectoActualFn(id); //Fijar proyecto actual
    obtenerTareasFn(id); // Filtrar las tareas
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default ProyectoItem;
