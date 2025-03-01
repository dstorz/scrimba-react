export default function Dice({ id, value, handleClick, lock }) {
  return (
    <button
      onClick={() => handleClick(id)}
      className={`die ${lock ? "die-locked" : ""}`}
      aria-label={`Die with value ${value}, ${lock ? "held" : "not held"}`}
      aria-pressed={lock}
    >
      {value}
    </button>
  );
}
