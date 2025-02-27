export default function Dice({ id, value, handleClick, lock }) {
  return (
    <div
      onClick={() => handleClick(id)}
      className={`die ${lock ? "die-locked" : ""}`}
    >
      {value}
    </div>
  );
}
