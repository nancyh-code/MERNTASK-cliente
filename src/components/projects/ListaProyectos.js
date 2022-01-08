import React from "react";
import ProyectoItem from "./ProyectoItem";

const ListaProyectos = () => {
  const proyectos = [
    { nombre: "Tienda Virtual" },
    { nombre: "Intranet" },
    { nombre: "Diseño de sitio web" },
  ];
  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <ProyectoItem proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListaProyectos;
