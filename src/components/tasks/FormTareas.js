import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTareas = () => {
  //Extraer proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //obtener state de tareas
  const tareasContext = useContext(tareaContext);
  const { agregarTareaFn, validarTareaFn } = tareasContext;

  // State del formulario
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });
  //extraer nombre del proyecto
  const { nombre } = tarea;
  //Si no hay proyecto seleccionado
  if (!proyecto) return null;

  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //Leer los valores del formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.peventDefault();
    //Validar
    if (nombre.trim() === "") {
      validarTareaFn();
      return;
    }

    // pasar la validación

    // agregar nueva tarea al state del form
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    agregarTareaFn(tarea);

    //reiniciar el form
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre tarea..."
            value={nombre}
            name="nombre"
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            //value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>
    </div>
  );
};

export default FormTareas;
