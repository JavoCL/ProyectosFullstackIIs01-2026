import { Fragment } from "react/jsx-runtime";
import Boton from "./Boton";

interface Props {
  title: string;
  text?: string;
}

function Card(props: Props) {
  const { title } = props;
  const { text } = props;

  return (
    <div
      className="card"
      style={{
        width: "350px", // DISTINTO DE HTML ORIGINAL => style="width: 700px"
      }}
    >
      <div className="card-body">
        <CardBody title={title} text={text} />
      </div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text?: string;
}

export function CardBody({ title, text }: CardBodyProps) {
  return (
    <Fragment>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <Boton>Añade a carrito</Boton>
    </Fragment>
  );
}

export default Card;
