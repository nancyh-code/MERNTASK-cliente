import React, { useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const AgregarProyecto = () => {
  //Obtenerstate del formulario
  const proyectosContext = useContext(proyectoContext);

  const {
    formularioProyecto,
    errorFormulario,
    mostrarFormularioFn,
    agregarProyectoFn,
    mostrarErrorFn,
  } = proyectosContext;

  const [addProyecto, setAddProyecto] = useState({
    nombre: "",
  });

  const { nombre } = addProyecto;

  const onChangeProyecto = (e) => {
    setAddProyecto({
      ...addProyecto,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //Validar el proyecto
    if (nombre === "") {
      mostrarErrorFn();
      return;
    }
    //agregar al state
    agregarProyectoFn(addProyecto);

    //reiniciar el formulario
    setAddProyecto({
      nombre: "",
    });
  };
  //mostar Formulario
  const onClickFormulario = () => {
    mostrarFormularioFn();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickFormulario}
      >
        Nuevo Proyecto
      </button>
      {formularioProyecto ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            className="btn btn-btn-primario btn-block btn-primario"
            value="Añadir Proyecto"
          />
        </form>
      ) : null}
      {errorFormulario ? (
        <p className="mensaje error">
          Debes añadir un nombre al proyecto nuevo
        </p>
      ) : null}
    </>
  );
};

export default AgregarProyecto;
