import React from "react";
import { Link, withRouter} from 'react-router-dom';
import Navegation from "../components/Navegation"

const Instruciones = () => {
  return (
<div>
<div>
        Para saber manejar la pàgina, es necesario aclarar los siguientes puntos.{" "}
      </div>
      <div>
        - Si quieres donar o donar el reciclaje, debes estar registrado y posteriormente iniciar sesiòn
        </div>
        <div>
        - Responsabilidad y compromiso por parte de los usuarios con el reciclaje
        </div>
        <div>
        - La aplicacion es intuintiva y facil de usar, no necesita tener conocimientos de programacion
        </div>
        - Conocimientos basicos sobre el reciclaje, en caso de no tener conocimientos sobre este, al fianl del texto se encuentra una guia de reciclaje
<div>
        - Debes tener acceso a internet, en caso de no tener datos, recomendamos hagas uso del intenet gratis que otorga el gobierno en diferentes puntos de la ciudad, principalmnete en parques
</div>
<div>
        - En el mapa, los puntos verdes son donde aun hay reciclaje accesible para reciclar, y los puntos rojos es donde ya esta comprometido{" "}
      </div>
      </div>
      );
};
export default Instruciones;