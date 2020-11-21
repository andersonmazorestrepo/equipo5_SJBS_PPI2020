import React, { memo } from "react";

import { Link, withRouter} from 'react-router-dom';
import Navegation from "../components/Navegation"


export default memo(({ text, complete, onClick }) => (
  <li
    class="task__item"
    key={text}
    style={{
      textDecoration: complete ? "line-through" : "",
      color: complete ? "#CCC" : ""
    }}
  >
    <div class="mr-auto">{text}</div>
    <div>
      <a onClick={onClick}>
        <i
          class="fa fa-check"
          style={{
            color: complete ? "#75b51b" : ""
          }}
        />
      </a>
    </div>
  </li>
));
