import Sidebar from "./Components/sidebar/Sidebar.js";
import Presentation from "./Components/presentation/Presentation.js";
import Knowledgeknowledge from "./Components/knowledgeknowledge/Knowledgeknowledge.js";
import Teaching from "./Components/teaching/Teaching.js";
import Experience from "./Components/experience/Experience.js";
import Footer from "./Components/footer/Footer.js";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <Sidebar />
      <Presentation />
      <Knowledgeknowledge />
      <Teaching />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
