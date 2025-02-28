import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Dice from "./components/Dice";

import { nanoid } from "nanoid";

function randomValue() {
  return Math.floor(Math.random() * 6) + 1;
}

const initDice = new Array(10).fill(0).map(() => ({
  value: randomValue(),
  lock: false,
  id: nanoid(),
}));

function App() {
  const [dice, setDice] = useState(initDice);
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
      prev.map((die) => (die.id === id ? { ...die, lock: !die.lock } : die))
    );
  }

  function rollDice() {
    setDice((prev) => {
      return prev.map((die) =>
        die.lock ? die : { ...die, value: randomValue() }
      );
    });
  }

  function resetGame() {
    setGameWon(false);
    setDice((prev) =>
      prev.map((die) => ({
        ...die,
        value: randomValue(),
        lock: false,
      }))
    );
  }

  const diceElements = dice.map((die, idx) => (
    <Dice
      key={die.id}
      id={die.id}
      value={die.value}
      handleClick={handleClick}
      lock={die.lock}
    />
  ));

  return (
    <>
      <main>
        <Header />
        {gameWon && <h2>You win!</h2>}
        <section className="dice-grid">{diceElements}</section>
        <button onClick={rollDice} disabled={gameWon}>
          Roll
        </button>
        {gameWon && <button onClick={resetGame}>Play Again</button>}
      </main>
    </>
  );
}

export default App;
