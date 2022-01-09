import React, { useContext, useEffect } from "react";
import ProyectoItem from "./ProyectoItem";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListaProyectos = () => {
  //Extraer proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectosFn } = proyectosContext;

  //Obtener proyectos al cargar el componente
  useEffect(() => {
    obtenerProyectosFn();
  }, []);
  //revisar si proyectos tiene contenido
  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <ProyectoItem key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListaProyectos;
