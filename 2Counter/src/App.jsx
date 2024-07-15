import { useState } from "react";
import "./App.css";

function App() {
  const [chantCount, setChantCount] = useState(0);
  const [roundCount, setRoundCount] = useState(0);

  const handleIncrease = () => {
    if (chantCount < 108) {
      setChantCount(chantCount + 1);
    } else {
      setRoundCount(roundCount + 1);
      setChantCount(0);
    }
  };

  const handleDecrease = () => {
    if (chantCount > 0) {
      setChantCount(chantCount - 1);
    }
  };

  const handleClear = () => {
    setChantCount(0);
    setRoundCount(0);
  };

  
  return (
    <>
      <h1 className="title">108 Japa Counter</h1>
      <p className="mantra">
        Hare Krishna Hare Krishna Krishna Krishna Hare Hare
        <br />
        Hare Rama Hare Rama Rama Rama Hare Hare
      </p>
      <p>Round: {roundCount}</p>
      <p>Chant: {chantCount}</p>
      <button onClick={handleDecrease} className="decrease">
        Decrease -
      </button>
      <button onClick={handleIncrease} className="increase">
        Increase +
      </button>
      <br />
      <button onClick={handleClear} className="clear">
        Clear
      </button>
    </>
  );
}

export default App;
