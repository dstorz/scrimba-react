import { useState } from "react";

export default function Pad({ id, color, on, handleClick }) {
  return (
    <button
      onClick={() => handleClick(id)}
      style={{ backgroundColor: color }}
      className={on ? "on" : undefined} // React recommends using undefined instead of null, but both work
    ></button>
  );
}
