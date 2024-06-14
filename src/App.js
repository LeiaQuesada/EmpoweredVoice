import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, welcome to Empowered Voice!</p>
        <a
          className="App-link"
          href="https://github.com/LeiaQuesada/EmpoweredVoice"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute to this project
        </a>
      </header>
    </div>
  );
}

export default App;
