import logo from "./logo.svg";
import "./App.css";
import { Title } from "@storybook/blocks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Hello, welcome to Empowered Voice in Pregnancy!</h1>

        <p>
          Welcome to Empowered Voice (EmPV), which is here to help share
          education and tools about how to have joyful and healthy pregnancy
          outcomes for all!
          <p>
            Whether you are thinking about, currently are, or have been pregnant
            or you are here to support some folks you care about through their
            pregnancies, please get comfortable and cozy as we help you navigate
            the nuances of this magical and at times challenging journey.
          </p>
          <h2>So, how can I help?</h2>
          <p>
            DISCLAIMER: Empowered Voice does not provide medical advice or
            services - please seek care with medical professional for health
            care maintanence and acute health concerns.
          </p>
        </p>

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
