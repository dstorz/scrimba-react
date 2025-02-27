import { useState, useEffect } from "react";

export default function App() {
  const [starWarsInfo, setStarWarsInfo] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count + 1}`)
      .then((res) => res.json())
      .then((data) => setStarWarsInfo(data));
  }, [count]);

  return (
    <>
      <div>
        Person ID: {count + 1}
        <br />
        <button
          onClick={() => setCount((prev) => (prev - 1 > 0 ? prev - 1 : 0))}
        >
          Previous
        </button>
        <button onClick={() => setCount((prev) => prev + 1)}>Next</button>
      </div>
      <div>
        <pre>{JSON.stringify(starWarsInfo, null, 2)}</pre>
      </div>
    </>
  );
}
