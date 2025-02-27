import { useState } from "react";
import "./App.css";

import WindowTracker from "./components/WindowTracker";

function App() {
  const [showTracker, setShowTracker] = useState(true);

  return (
    <>
      <button onClick={() => setShowTracker((prev) => !prev)}>
        Toggle WindowTracker
      </button>
      {showTracker && <WindowTracker />}
    </>
  );
}

export default App;
