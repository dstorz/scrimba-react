import { useState } from "react";

import pads from "./pads";

export default function App({ darkMode }) {
  const [padData, setPadData] = useState(pads);

  const buttonElements = padData.map((data) => {
    return (
      <button
        key={data.id}
        style={{ backgroundColor: darkMode ? "#cccccc" : "#222222" }}
      >
        {data.id}
      </button>
    );
  });

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}
