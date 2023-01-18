import "./Style/index.css";
import User from "./components/User";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Profil from "./components/Profil";
import FormExp from "./components/FormExp";
import DarkMode from "./components/DarkMode";
import Pdf from "./components/Pdf";


function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="sidebar">
          <div className="button-action">
            <DarkMode/>
            <Pdf/>
          </div>
          <User/>
          <Skills/>
          <Interests/>
        </div>
        <div className="main">
          <Profil/>
          <FormExp/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
