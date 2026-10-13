import React from "react";

function Titulo() {
  const nombre = "Profe Javier";
  if (nombre) {
    return <p>Hola {nombre}</p>;
  }

  return <p>Hola mundo</p>;
}

export default Titulo;
