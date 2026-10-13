import TarjetaCuerpo from "./TarjetaCuerpo";

interface Props {
  // Propiedades de la tarjeta en general
  clase?: string;
  titulo?: string;
  texto?: string;
  // Propiedades de la imagen
  urlImagen?: string; // URL de la imagen a mostrar
  claseImagen?: string;
  altImagen?: string;
}

function Tarjeta({
  clase = "card",
  titulo,
  texto,
  urlImagen,
  claseImagen,
  altImagen,
}: Props) {
  return (
    <div className={clase} style={{ width: "18rem" }}>
      <img src={urlImagen} className={claseImagen} alt={altImagen} />
      <TarjetaCuerpo titulo={titulo} texto={texto}></TarjetaCuerpo>
    </div>
  );
}

export default Tarjeta;
