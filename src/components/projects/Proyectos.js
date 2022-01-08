import React from "react";
import Sidebar from "../layout/Sidebar.js";
import NavBar from "../layout/NavBar";
import FormTareas from "../tasks/FormTareas";
import ListaTareas from "../tasks/ListaTareas";

const Proyectos = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <NavBar />
        <main>
          <FormTareas />
          <div className="contenedor-tareas">
            <ListaTareas />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
