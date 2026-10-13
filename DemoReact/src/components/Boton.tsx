import type { ReactNode, useState } from "react";

type Props = {
  // JSX hijo que ira dentro de las etiquetas <...> y <.../>
  children: ReactNode;
  // Estado bool de si esta cargando o no
  estaCargandoContenido?: boolean;
  // Agregamos onClick como propiedad necesaria del boton, sin argumentos ni retorno
  alClikear?: () => void;
};

// La funcion Boton requiere un children de entrada para su ejecucion
function Boton({ children, estaCargandoContenido, alClikear }: Props) {
  return (
    <button
      //{/*disabled={estaCargandoContenido}*/}
      type="button"
      className={`btn btn-${estaCargandoContenido == true ? "danger" : "primary"}`}
      onClick={alClikear}
    >
      {/*El children de entrada se inserta como JSX (o pseudo HTML) entre las etiquetas
        de apertura y cierre del boton*/}
      {estaCargandoContenido == true ? "Cerrar" : children}
    </button>
  );
}

export default Boton;
