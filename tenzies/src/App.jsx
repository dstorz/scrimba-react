import { useState, useEffect } from "react";
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
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    const firstDieVal = dice[0].value;
    const allSame = dice.reduce(
      (acc, die) => acc && die.value === firstDieVal,
      true
    );
    if (allSame) {
      setGameWon(true);
    }
  }, [dice]);

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
      {gameWon && <h2>You win!</h2>}
      <main>
        <section className="dice-grid">{diceElements}</section>
        <button onClick={rollDice}>Roll</button>
      </main>
    </>
  );
}

export default App;
