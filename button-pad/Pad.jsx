export default function Pad({ color, on }) {
  return (
    <button
      style={{ backgroundColor: color }}
      className={on ? "on" : undefined} // React recommends using undefined instead of null, but both work
    ></button>
  );
}
