import "./Style/index.css";
import User from "./components/User";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Profil from "./components/Profil";
import FormExp from "./components/FormExp";


function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="sidebar">
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
