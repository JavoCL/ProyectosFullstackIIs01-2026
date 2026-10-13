import type { ReactNode } from "react";

interface Props {
  clase?: string;
  titulo?: string;
  texto?: string;
  children?: ReactNode;
}

function TarjetaCuerpo({ clase = "card-body", titulo, texto, children }) {
  return (
    <div className={clase}>
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">
        {/* Some quick example text to build on the card title and make up the bulk
        of the card’s content. */}
        {texto}
      </p>
      {children}
      {/* <a href="#" className="btn btn-primary">
        Go somewhere
      </a> */}
    </div>
  );
}

export default TarjetaCuerpo;
