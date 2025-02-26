import { useState } from "react";

export default function Pad({ color, on: initOn }) {
  const [on, setOn] = useState(initOn);

  function toggle() {
    setOn((prev) => !prev);
  }

  return (
    <button
      onClick={toggle}
      style={{ backgroundColor: color }}
      className={on ? "on" : undefined} // React recommends using undefined instead of null, but both work
    ></button>
  );
}
