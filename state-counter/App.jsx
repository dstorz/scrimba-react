import { useState } from "react";

import Count from "./Count";

export default function App() {
  const [count, setCount] = useState(0);
  const [isGoingOut, setIsGoingOut] = useState(false);

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function toggleGoingOut() {
    setIsGoingOut((prev) => !prev);
  }

  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button
          className="minus"
          aria-label="Decrease count"
          onClick={decrement}
        >
          –
        </button>
        <Count number={count} />
        <button
          className="plus"
          aria-label="Increase count"
          onClick={increment}
        >
          +
        </button>
      </div>
      <div>
        <h1>Do I feel like going out tonight?</h1>
        <button onClick={toggleGoingOut}>{isGoingOut ? "Yes" : "No"}</button>
      </div>
    </main>
  );
}
