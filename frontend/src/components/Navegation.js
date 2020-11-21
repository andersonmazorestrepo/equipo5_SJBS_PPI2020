import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navegation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/Inicio">
          ECOARTE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/Inicio">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Instruciones">
                Instrucciones
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Mapa">
               Mapa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Inicios">
               Iniciar sesión
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Registro">
               Registrarse
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Perfil"
                tabindex="-1"
                aria-disabled="true"
              >
                Mi cuenta
              </Link>
              
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Buscar
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
export default Navegation;