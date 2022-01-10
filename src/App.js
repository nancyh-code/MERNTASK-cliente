import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Proyectos from "./components/projects/Proyectos";
import ProyectoContextState from "./context/proyectos/proyectoContextState";
import TareaState from "./context/tareas/tareaState";

function App() {
  return (
    <ProyectoContextState>
      <TareaState>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/proyectos" element={<Proyectos />} />
          </Routes>
        </Router>
      </TareaState>
    </ProyectoContextState>
  );
}

export default App;
