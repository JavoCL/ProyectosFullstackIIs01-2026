import type { ReactNode } from "react";

interface Props {
  // Clase del div de contenedor
  clase?: string;
  children?: ReactNode;
}

function Contenedor({ clase = "container", children }: Props) {
  return (
    <div className={clase}>
      {/* Acá ira el contenido */}
      {children}
    </div>
  );
}

export default Contenedor;
