import React from "react";
import { Link, withRouter} from 'react-router-dom';
import Navegation from "../components/Navegation"


const Inicios = (props) => {
  const{ history} = props;
  return (
  <div>
    
    <div class="container">
      <h2>INICIA SESIÓN</h2>
      <p>
        Para iniciar sesión es obligratorio que todo los datos sean <code>.validados</code>:
      </p>
      <form action="/action_page.php" className="was-validated">
        <div className="form-group">
          <label for="uname">Correo electrónico:</label>
          <input
            type="text"
            className="form-control"
            id="uname"
            placeholder="Ingrese Correo"
            name="uname"
            required
          />
          <div className="valid-feedback">Validado.</div>
          <div className="invalid-feedback">Por favor rellena el campo.</div>
        </div>
        <div className="form-group">
          <label for="pwd">Contraseña:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Ingrese Contraseña"
            name="pswd"
            required
          />
          <div className="valid-feedback">Validado.</div>
          <div className="invalid-feedback">Por favor rellena el campo.</div>
        </div>
        <div className="form-group form-check">
          
        </div>
        <button type="submit"
         className="btn btn-primary"
          OnClick={() => history.push("/Registro")}
          >
          Registrarse

        </button>
        <button type="submit"
         className="btn btn-primary"
          OnClick={() => history.goBack("/Mapa")}
          >
          Iniciar sesión

        </button>
      </form>
    </div>
  </div>
  );
};
export default Inicios;