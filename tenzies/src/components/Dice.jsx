export default function Dice({ id, value, handleClick, lock }) {
  return (
    <button
      onClick={() => handleClick(id)}
      className={`die ${lock ? "die-locked" : ""}`}
    >
      {value}
    </button>
  );
}
