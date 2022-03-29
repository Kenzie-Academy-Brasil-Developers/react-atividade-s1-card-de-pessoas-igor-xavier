import "./App.css";
import Developers from "./Componentes/Developer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Developers name="Gabriel" age="19" country="Brasil" />
          <Developers name="Filipe" age="28" country="Brasil" />
          <Developers name="Mariana" age="24" country="Itália" />
        </div>
      </header>
    </div>
  );
}

export default App;
