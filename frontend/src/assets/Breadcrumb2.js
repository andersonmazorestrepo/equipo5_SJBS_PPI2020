import React from "react";

export const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">
   Correo electrónico
        </li>
      </ol>
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">
          Contraseña
        </li>
      </ol>
    </nav>


  );
};
