import { useState } from "react";

// Declaramos las propiedades que debe recibir el componente 'MenuDesplegable'
interface Props {
  titulo: string; // titulo del menu
  opciones: string[]; // opciones del menu
  // Fx que se añadirá a cada elemento al momento de ser seleccionado
  alSeleccionar: (opcionElegida: string) => void;
}

// Declaramos la Fx con los parametros de tipo 'Props' que debe recibir
function MenuDesplegable(props: Props) {
  // Definimos un estado 'estaAbierto' que nos permite controlar el estado
  // de apertura del menu desplegable
  const [estaAbierto, setEstaAbierto] = useState(false);

  // Fx que invierte el valor de 'estaAbierto'
  function abreMenu() {
    setEstaAbierto(!estaAbierto);
  }

  // Fx que se ejecuta cuando hacen clic en una opcion de la lista
  function manejarClicEnOpcion(opcionTexto: string) {
    props.alSeleccionar(opcionTexto);
    // Cerramos el menu desplegable al seleccionar opcion
    setEstaAbierto(false);
  }

  // Definimos cual será la clase de la lista de opciones si el
  // menu esta abiero o cerrado
  const menuClase =
    estaAbierto == true ? "dropdown-menu show" : "dropdown-menu";

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        // Se le asgina la Fx de abrir el menu al onClick del boton
        onClick={abreMenu}
      >
        {/* Ingresamos el titulo que dimos desde parámetros */}
        {props.titulo}
      </button>
      {/* Recorremos el arreglo de opciones */}
      <ul className={menuClase}>
        {/* Mediante la estructura 'map' podemos recorrer cada elemento y almacenar su
            contenido en 'opcionesTexto', y su indice en 'indice' 
            
            Similar a otros lenguajes con foreach(TIPO t in Listado<TIPO>){}
        */}
        {props.opciones.map(function (opcionTexto, indice) {
          return (
            // Generar un elemento 'li' con un key igual al indice
            <li key={indice}>
              {/* Un boton para cada opcion con el texto indicado 
                  en el elemento actual del arreglo
               */}
              <button
                className="dropdown-item"
                type="button"
                // Cuando haga clic, llamar a la Fx que trajimos desde la invocacion
                // de este menu desplegable
                onClick={function () {
                  manejarClicEnOpcion(opcionTexto);
                }}
              >
                {opcionTexto}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MenuDesplegable;
