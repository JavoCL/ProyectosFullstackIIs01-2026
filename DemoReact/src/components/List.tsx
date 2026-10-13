import { Fragment, useState } from "react";

interface ListProps {
  data: string[];
  onSelect?: (element: string) => void;
}

function List({ data, onSelect }: ListProps) {
  const list = { data };

  if (data.length === 0) {
    return (
      <Fragment>
        <p>No hay elementos para mostrar</p>
      </Fragment>
    );
  }
  // Si hay elementos en la lista 'data', los mostramos y retornamos
  const [index, setIndex] = useState(-1);
  const seleccionaElemento = (i: number, elemento: string) => {
    setIndex(i);
    if (onSelect) {
      onSelect(elemento);
    }
  };

  return (
    <ul
      className="list-group"
      style={{
        width: "350px", // DISTINTO DE HTML ORIGINAL => style="width: 700px"
      }}
    >
      {list.data.map((elemento, i) => (
        <li
          key={elemento}
          onClick={() => seleccionaElemento(i, elemento)}
          className={`list-group-item ${index === i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
