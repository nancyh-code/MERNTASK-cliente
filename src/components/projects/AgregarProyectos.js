import React from "react";

const AgregarProyecto = () => {
  return (
    <>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
      <form className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
        />
        <input
          type="submit"
          className="btn btn-btn-primario btn-block btn-primario"
          value="Añadir Proyecto"
        />
      </form>
    </>
  );
};

export default AgregarProyecto;
