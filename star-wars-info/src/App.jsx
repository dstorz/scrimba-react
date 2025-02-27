import { useState, useEffect } from "react";

export default function App() {
  const [starWarsInfo, setStarWarsInfo] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => setStarWarsInfo(data));
  }, [count]);

  function add() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div>
        The count is {count}
        <br />
        <button onClick={add}>Add</button>
      </div>
      <div>
        <pre>{JSON.stringify(starWarsInfo, null, 2)}</pre>
      </div>
    </>
  );
}
