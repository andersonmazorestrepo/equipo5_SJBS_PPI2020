import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Ppicontainer from "./container/Ppicontainer";





const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Ppicontainer />
  </React.StrictMode>,
  rootElement


);


