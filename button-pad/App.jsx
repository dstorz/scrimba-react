import { useState } from "react";

import padsData from "./pads";
import Pad from "./Pad";

export default function App() {
  const [pads, setPads] = useState(padsData);

  function turnAllOff() {
    setPads((prev) => {
      return prev.map((pad) =>
        // one liner alt
        // pad.id === id ? {...pad, on: !pad.on} : pad
        ({
          ...pad,
          on: false,
        })
      );
    });
  }

  function toggle(id) {
    setPads((prev) =>
      prev.map((pad) => ({
        ...pad,
        on: pad.id === id ? !pad.on : pad.on,
      }))
    );
  }

  const padElements = pads.map((pad) => (
    <Pad
      key={pad.id}
      id={pad.id}
      color={pad.color}
      on={pad.on}
      handleClick={toggle}
    />
  ));

  return (
    <main>
      <div className="pad-container">{padElements}</div>
      <button onClick={turnAllOff} className="on">
        Turn off all pads
      </button>
    </main>
  );
}
