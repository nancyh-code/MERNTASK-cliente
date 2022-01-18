import React, { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTareas = () => {
  //Extraer proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //obtener state de tareas
  const tareasContext = useContext(tareaContext);
  const {
    tareaSeleccionada,
    errorTarea,
    agregarTareaFn,
    validarTareaFn,
    obtenerTareasFn,
    actualizarTareaFn,
    limpiarTareaFn,
  } = tareasContext;

  //Effect que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (tareaSeleccionada !== null) {
      guardarTarea(tareaSeleccionada);
    } else {
      guardarTarea({
        nombre: "",
      });
    }
  }, [tareaSeleccionada]);

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
    e.preventDefault();
    //Validar
    if (nombre.trim() === "") {
      validarTareaFn();
      return;
    }
    //Si se modifica o agrega una nueva tarea
    if (tareaSeleccionada === null) {
      // agregar nueva tarea al state del form
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = false;
      agregarTareaFn(tarea);
    } else {
      actualizarTareaFn(tarea);
      // Elimina tareaSeleccionada del state
      limpiarTareaFn();
    }

    // Obtener y filtrar las tareas del proyecto
    obtenerTareasFn(proyectoActual.id);
    //reiniciar el form
    guardarTarea({
      nombre: "",
    });
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
            value={tareaSeleccionada ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>
      {errorTarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTareas;
