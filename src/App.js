import "./Style/index.css";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="sidebar">
          <User/>
        </div>
        <div className="main">main</div>
      </div>
      coucou
    </div>
  );
}

export default App;
