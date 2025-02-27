import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Dice from "./components/Dice";

function App() {
  function randomValue() {
    return Math.floor(Math.random() * 6) + 1;
  }
  const [dice, setDice] = useState([
    { value: randomValue(), lock: false },
    { value: randomValue(), lock: false },
    { value: randomValue(), lock: false },
    { value: randomValue(), lock: false },
    { value: randomValue(), lock: false },
    { value: randomValue(), lock: false },
    { value: randomValue(), lock: false },
    { value: randomValue(), lock: false },
    { value: randomValue(), lock: false },
    { value: randomValue(), lock: false },
  ]);

  function handleClick(id) {
    setDice((prev) =>
      prev.map((die, idx) => ({
        ...die,
        lock: idx === id ? !die.lock : die.lock,
      }))
    );
  }

  function rollDice() {
    setDice((prev) => {
      return prev.map((die) => ({
        // randomize the dice value
        ...die,
        value: die.lock ? die.value : randomValue(),
      }));
    });
  }

  const diceElements = dice.map((die, idx) => (
    <Dice
      key={idx}
      id={idx}
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
        <button onClick={rollDice}>Roll</button>
      </main>
    </>
  );
}

export default App;
