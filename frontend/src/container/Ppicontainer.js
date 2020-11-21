import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Registro from "../components/Registro";
import Inicio from "../components/Inicio";
import Card from "../components/Card";
import Navegation from "../components/Navegation";
import Mapa from "../components/Mapa";
import MapView from "../components/MapView";
import App from "../components/App";
import Inicios from "../components/Inicios";
import Instruciones from "../components/Instruciones";
import Perfil from "../components/Perfil";


export default function Ppicontainer() {
  return (
    <BrowserRouter>
    <Route path="/" component={Navegation} />
      <Route path="/Registro" component={Registro} />
      <Route path="/Inicio" component={Inicio} />
      <Route path="/Card" component={Card} />
      <Route path="/Mapa" component={Mapa} />
      <Route path="/Inicios" component={Inicios} />
      <Route path="/Instruciones" component={Instruciones} />
      <Route path="/Perfil" component={Perfil} />


    </BrowserRouter>
  );
}
