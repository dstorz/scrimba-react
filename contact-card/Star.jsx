import starFilled from "./images/star-filled.png";
import starEmpty from "./images/star-empty.png";

export default function Star({ isFilled }) {
  return (
    <button
      // onClick={toggleFavorite}
      aria-pressed={isFilled}
      aria-label={isFilled ? "Remove from favorites" : "Add to favorites"}
      className="favorite-button"
    >
      <img
        src={isFilled ? starFilled : starEmpty}
        alt={`${isFilled ? "filled" : "empty"} star icon`}
        className="favorite"
      />
    </button>
  );
}
