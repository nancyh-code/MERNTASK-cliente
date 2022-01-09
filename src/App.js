import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Proyectos from "./components/projects/Proyectos";
import ProyectoContextState from "./context/proyectos/proyectoContextState";

function App() {
  return (
    <ProyectoContextState>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </Router>
    </ProyectoContextState>
  );
}

export default App;
