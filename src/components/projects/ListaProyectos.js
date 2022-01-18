import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ProyectoItem from "./ProyectoItem";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListaProyectos = () => {
  //Extraer proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectosFn } = proyectosContext;

  //Obtener proyectos al cargar el componente
  useEffect(() => {
    obtenerProyectosFn();
    //eslint-disable-next-line
  }, []);
  //revisar si proyectos tiene contenido
  if (proyectos.length === 0)
    return <p>Todavía no hay proyectos creados, agrega uno</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto.id} timeout={200} className="proyecto">
            <ProyectoItem proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListaProyectos;
