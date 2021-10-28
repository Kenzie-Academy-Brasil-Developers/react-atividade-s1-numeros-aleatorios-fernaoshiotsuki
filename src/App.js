import { useState } from "react";
import "./App.css";
import Buttons from "./components/button";
import "./components/index.css";
function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const RandomNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>{number}</div>
        <Buttons onClick={RandomNumber} />
      </header>
    </div>
  );
}

export default App;
