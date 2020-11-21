import React from "react";
import { Link, withRouter} from 'react-router-dom';
import Navegation from "../components/Navegation"


const Inicio = () => {
  return (
<div>
  <center>
<h2>¡BIENVENIDO A ECOARTE!</h2>
<div>
        Es un aplicativo móvil que permite la conexión entre personas, unas que
        quieran donar su reciclaje y otras que lo deseen recibir, aparte de esto
        contiene la informacion que se requiere para un reciclaje adecuado.{" "}
      </div>
      <div>
        En ECOARTE prestamos servicios y asesorias socio ambientales
        realacionados con el manejo integral de residuos, aportando a la
        conservación del medio ambiente y brindando soluciones logisticas que
        garantizan la inclusión social de nuestros recicladores asociados en
        actividades de recuperación y valorización residuos, junto con
        ciudadanos que quieran aportar a la donación de reciclaje.{" "}
      </div>
</center>
    </div>
  );
};

export default withRouter(Inicio);