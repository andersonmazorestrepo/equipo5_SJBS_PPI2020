import React, { useState } from "react";

import { Link, withRouter} from 'react-router-dom';
import Navegation from "../components/Navegation"


const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue("")
  };
};

export default ({ onSubmit }) => {
  const { resetValue, ...text } = useInputValue("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(text.value);
        resetValue();
      }}
    >
      <div class="form-group">
      <small class="form-text text-muted">
           ECOARTE
        </small>
      </div>
        <input
          type="text"
          class="form-control form-control-lg"
          id="name"
          placeholder="Sugerencias"
          {...text}
        />
        <div>
      <small class="form-text text-muted">
           Sugerencias del Usuario, para la aplicación
        </small>
      </div>
    </form>
  );
};
