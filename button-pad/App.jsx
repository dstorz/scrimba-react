import { useState } from "react";

import padsData from "./pads";
import Pad from "./Pad";

export default function App() {
  const [pads, setPads] = useState(padsData);

  const padElements = pads.map((pad) => (
    <Pad key={pad.id} color={pad.color} on={pad.on} />
  ));

  function turnAllOff() {
    setPads((prev) => {
      return prev.map((pad) => ({
        ...pad,
        on: false,
      }));
    });
  }

  return (
    <main>
      <div className="pad-container">{padElements}</div>
      <button onClick={turnAllOff} className="on">
        Turn off all pads
      </button>
    </main>
  );
}
