// import "./index.js";
// import useRef from "react";

function Sidebar() {
  return (
    <nav className="navbar navbar-expand-lg p-2 ">
      <a
        href="/"
        className="navbar-brand d-none d-lg-block  text-light"
      >
        <strong>Cássio Gabriel</strong>
      </a>
      <div className="d-block d-lg-none ">
        <ul className="nav d-flex ">
          <li className="nav-item ">
            <a
              className="nav-link text-light"
              href="/"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="/"
            >
              <i className="fa fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <a
        href="/"
        className="navbar-brand d-block d-lg-none text-light"
      >
        <strong>Cássio Gabriel</strong>
      </a>

      <nav className="navbar navbar-dark  ref={cart} ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Alterna navegação"
          id="btn-collapse"
          // onClick={apearCart}:
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>

      <div
        // ref={cart}:
        className="navbar-collapse collapse justify-content-center"
        id="navbar4"
      >
        <ul className="navbar-nav d-flex ">
          <li className="nav-item d-flex">
            <i className="fa-solid fa-lightbulb text-light"></i>
            <a
              className="nav-link text-light  mx-auto"
              href="/"
            >
              Skill
            </a>
          </li>
          <li className="nav-item d-flex">
            <a
              className="nav-link text-light  mx-auto"
              href="#Knowledgeknowledge"
            >
              PROJETOS
            </a>
          </li>
          <li className="nav-item d-flex">
            <a
              className="nav-link text-light  mx-auto"
              href="#Experience"
            >
              EXPERIÊNCIA
            </a>
          </li>
          <li className="nav-item d-flex">
            <a
              className="nav-link text-light  mx-auto"
              href="#Teaching"
            >
              ENSINO
            </a>
          </li>
          <li className="nav-item d-flex">
            <a
              className="nav-link text-light  mx-auto"
              href="#network"
            >
              CONTATO
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
