import React from "react";
import Sidebar from "../layout/Sidebar.js";
import NavBar from "../layout/NavBar";

const Proyectos = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <NavBar />
        <main>
          <div className="contenedor-tareas"></div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
