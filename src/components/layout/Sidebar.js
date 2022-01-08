import React from "react";
import AgregarProyecto from "../projects/AgregarProyectos";
import ListaProyectos from "../projects/ListaProyectos";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
      </h1>
      <AgregarProyecto />
      <div className="proyectos">
        <h2>Mis proyectos</h2>
        <ListaProyectos />
      </div>
    </aside>
  );
};

export default Sidebar;
