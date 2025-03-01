import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Dice from "./components/Dice";
import Confetti from "react-confetti";

import { nanoid } from "nanoid";

function randomValue() {
  return Math.floor(Math.random() * 6) + 1;
}

function App() {
  function makeInitDice() {
    const initDice = new Array(10).fill(0).map(() => ({
      value: randomValue(),
      lock: false,
      id: nanoid(),
    }));
    return initDice;
  }
  const [dice, setDice] = useState(makeInitDice);

  //const firstDie = dice[0].value;
  //const gameWon = dice.reduce((acc, die) => acc && die.value == firstDie, true);
  const gameWon = dice.every((die) => die.value == dice[0].value);

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
        {gameWon && (
          <>
            <h2>You win!</h2>
            <Confetti />
          </>
        )}
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
