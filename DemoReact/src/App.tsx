import React, { Fragment, useState } from "react";
import Titulo from "./Titulo";
import Card from "./components/Card";
import List from "./components/List";
import Boton from "./components/Boton";

function App() {
  /*
  // Declaramos un estado booleano para verificar el estado de cargando, meidante useState
  // Se declara constante, como array[2]: [0] nombre del estado, [1] funcion que edita el valor del estado
  const [estaCargando, setEstaCargando] = useState(false);
  const handleClick = () => setEstaCargando(!estaCargando);
  const segundaFX = () => console.log("Aprete el segundo boton");

  // Incorporamos el boton creado, con el children siendo el texto del boton
  return (
    <Fragment>
      {estaCargando === true && <Card title="Tarjeta de contenido"></Card>}
      <br></br>
      <Boton alClikear={handleClick} estaCargandoContenido={estaCargando}>
        Ver producto
      </Boton>
      <Boton alClikear={segundaFX}>Boton inutil</Boton>
    </Fragment>
  );*/

  const manipuladorSeleccion = (elemento: string) => {
    console.log("Elemento seleccionado: ", elemento);
  };

  //<List data={dataSW} onSelect={manipuladorSeleccion} />

  const [datos, setDatos] = useState(["Luke", "Han", "Leia"]);
  const agregarTrooper = () => setDatos([...datos, "Trooper" + numTroopers]);
  const eliminarTrooper = () => setDatos(datos.slice(0, -1));
  const numTroopers = datos.filter((item) => item.startsWith("Trooper")).length;

  return (
    <Fragment>
      {/*
      <Card title="Producto 1" text="Descripcion producto 1" />
      <Card title="Producto 2" text="Descripcion producto 2" />
      <Card title="CEO empresa" />*/}

      <Boton alClikear={agregarTrooper}>+ Trooper</Boton>
      <Boton alClikear={eliminarTrooper}>- Trooper</Boton>
      <br></br>
      <br></br>
      <List data={datos} onSelect={manipuladorSeleccion}></List>

      {/*<List data={["Vader", "Emperor"]} />*/}

      {/*Comparacion con operador ternario. Considera un camino 'true' y otro 'false' 
      {dataSW.length === 0 ? (
        <p>No hay elementos para mostrar(Ternario)</p>
      ) : (
        <List data={dataSW}></List>
      )}*/}

      {/*Operador AND: evalua la primera parte antes de '&&'. Considera SOLO un camino 'true'      */}
      {/*{dataSW.length > 0 && <List data={dataSW}></List>}*/}
    </Fragment>
  );
}

export default App;
