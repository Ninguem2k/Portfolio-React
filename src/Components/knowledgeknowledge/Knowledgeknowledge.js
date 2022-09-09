// import "./index.js";
import "./style.css";
// import reactIcon from "../../acennts/img/icons/reactIcon.svg";

function Nowhaw() {
  return (
    <div
      className="container-fluid  "
      id="Knowledgeknowledge"
    >
      <div className="row d-flex">
        <div className="col-md-9 mx-auto text-center ">
          <div className="row">
            <div className="presentationContainer col-md-6">
              <div className="presentation">
                <div className="card">
                  <h3>titulo</h3>
                  <div className="chosenItem">
                    <span className="support"></span>
                    <img
                      className="iconKnowledge"
                      draggable="true"
                      src="./assets/img/icons/reactIcon.svg"
                      alt="react Ícone"
                    />
                  </div>
                </div>
                <h4>
                  Nível da habilidade
                </h4>
                <p></p>
                <h4>Informações</h4>
                <p></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="choice">
                <h4>
                  <strong>
                    Minhas principais
                    ferramentas
                  </strong>
                </h4>
                <div className="toolsContainer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nowhaw;
