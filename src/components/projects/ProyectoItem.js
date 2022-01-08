import React from "react";

const ProyectoItem = ({ proyecto }) => {
  return (
    <li>
      <button type="button" className="btn btn-blank">
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default ProyectoItem;
