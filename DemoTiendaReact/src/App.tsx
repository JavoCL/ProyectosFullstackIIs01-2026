import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Contenedor from "./components/Contenedor";
import Tarjeta from "./components/Tarjeta";

function App() {
  return (
    <Fragment>
      {/* style="text-align: center;" */}
      <h1 className="text-center py-5">🛍️ Te lo compro, te lo vendo 🛒</h1>

      {/* ===== NAV BAR ===== */}
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="index.html"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="productos.html">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contacto.html">
                  Contacto
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  Quienes somos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* =================== */}

      {/* ====== MAIN ======= */}

      <main>
        <h3 className="text-center p-4"> Productos Destacados</h3>
        <Contenedor>
          <Tarjeta
            urlImagen="img/producto01.jpg"
            titulo="Taladro Amarillo HD"
            texto="Some quick example text to build on the card title and make up the bulk of the card’s content."
          ></Tarjeta>
          <Tarjeta
            urlImagen="img/producto02.jpg"
            titulo="Taladro Azul"
            texto="Some quick example text to build on the card title and make up the bulk of the card’s content."
          ></Tarjeta>
          <Tarjeta
            urlImagen="img/producto03.jpg"
            titulo="Taladro Rojo"
            texto="Some quick example text to build on the card title and make up the bulk of the card’s content."
          ></Tarjeta>
        </Contenedor>
      </main>

      {/* =================== */}

      {/* =====  FOOTER  ===== */}
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="index.html" className="nav-link px-2 text-body-secondary">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="productos.html"
              className="nav-link px-2 text-body-secondary"
            >
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a
              href="contacto.html"
              className="nav-link px-2 text-body-secondary"
            >
              Contacto
            </a>
          </li>
          <li className="nav-item">
            <a href="about.html" className="nav-link px-2 text-body-secondary">
              Quienes somos
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          © 2026 Desarrollo Fullstack II - DuocUC Concepción
        </p>
      </footer>
      {/* =================== */}
    </Fragment>
  );
}

export default App;
