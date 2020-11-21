import React from "react";
import { Link, withRouter} from 'react-router-dom';
import Navegation from "../components/Navegation"


const Registro = (props) => {
  const{ history} = props;
  return (
  <div>
    
    <div class="container">
      <h2>REGISTRATE</h2>
      <p>
        Para registrarse es obligratorio que todo los datos sean <code>.validados</code>:
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
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              name="remember"
              required
            />{" "}
            He rellenado todos lo datos.
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">
              Selecciona para continuar.
            </div>
          </label>
        </div>
        <button type="submit"
         className="btn btn-primary"
          OnClick={() => history.push("/Inicios")}
          >
          Registrarse

        </button>
        <button type="submit"
         className="btn btn-primary"
          OnClick={() => history.goBack("/Inicio")}
          >
          Regresar

        </button>
      </form>
    </div>
  </div>
  );
};

export default withRouter(Registro);
