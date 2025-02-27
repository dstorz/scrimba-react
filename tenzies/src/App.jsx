import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Dice from "./components/Dice";

function App() {
  const [dice, setDice] = useState([
    { value: 1, lock: false },
    { value: 2, lock: false },
    { value: 3, lock: false },
    { value: 4, lock: false },
    { value: 5, lock: false },
    { value: 6, lock: false },
    { value: 1, lock: false },
    { value: 2, lock: false },
    { value: 3, lock: false },
    { value: 4, lock: false },
  ]);

  function handleClick(id) {
    setDice((prev) =>
      prev.map((die) => ({
        ...die,
        lock: !die.lock,
      }))
    );
  }

  const diceElements = dice.map((die, idx) => (
    <Dice
      key={idx}
      value={die.value}
      handleClick={handleClick}
      lock={die.lock}
    />
  ));

  return (
    <>
      <Header />
      <main>
        <section className="dice-grid">{diceElements}</section>
        <button>Roll</button>
      </main>
    </>
  );
}

export default App;
