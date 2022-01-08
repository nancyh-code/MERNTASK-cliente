import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola
        <span> Nancy!</span>
      </p>
      <nav className="nav-principal">
        <Link to="/">Cerrar sesión</Link>
      </nav>
    </header>
  );
};

export default NavBar;
