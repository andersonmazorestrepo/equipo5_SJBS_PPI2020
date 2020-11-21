import React from "react";
import { Link} from 'react-router-dom';
import Navegation from "../components/Navegation"


import { Main } from "../assets/Main";
import { Breadcrumb1 } from "../assets/Breadcrumb1";
import { Boton4 } from "../assets/Boton4";

const Perfil = () => {
  return (
    <div className="Inicio">
      <br />
      <center>
        <h1> Perfil </h1>
      </center>
      <Main />
      <center>
        <h1> Datos </h1>
      </center>
      <Breadcrumb1 />
      <center>
      <h3> ROL: </h3>
        <Boton4 />
      </center>
      <br /><br />
    </div>
  );
};
export default Perfil;