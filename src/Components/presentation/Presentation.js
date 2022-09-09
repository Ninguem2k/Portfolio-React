import cover from "../../acennts/img/cover.png";
import "./style.css";
function Presentation() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex p-3">
          <div className="mx-auto">
            <p className="line typing-animation">
              Seja bem vindo ao
              meu&nbsp;
              <strong>
                Portfólio!
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="text mx-auto ">
              Hello, Eu me chamo&nbsp;
              <strong>
                Cássio Gabriel
              </strong>
              <br />
              sou um intusiasta da T.I,
              <br />
              curioso por natureza, e
              <br />
              apaxinado por programação,
              <br />
              por favor veja um
              pouquinho
              <br />
              da minha história.
              <br />
            </div>
          </div>
          <div className="col-md-6">
            <div className="imgpresetation">
              <img
                className="p-2"
                src={cover}
                alt="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
