import "./App.css";
import Header from "./components/Header";

function App() {
  const diceVals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const diceElements = diceVals.map((val) => <div key={val}>{val}</div>);
  return (
    <>
      <Header />
      {diceElements}
      <button>Roll</button>
    </>
  );
}

export default App;
