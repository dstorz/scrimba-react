import React from "react";
import avatar from "./images/user.png";
import starFilled from "./images/star-filled.png";
import starEmpty from "./images/star-empty.png";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */

  function toggleFavorite() {
    console.log("Toggle Favorite");
    setContact((prev) => {
      return {
        ...prev,
        isFavorite: !prev.isFavorite,
      };
    });
  }

  const contact_full_name = `${contact.firstName} ${contact.lastName}`;

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt={`User profile picture of ${contact_full_name}`}
        />
        <div className="info">
          <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label={
              contact.isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            className="favorite-button"
          >
            <img
              src={contact.isFavorite ? starFilled : starEmpty}
              alt={`${contact.isFavorite ? "filled" : "empty"} star icon`}
              className="favorite"
            />
          </button>
          <h2 className="name">{contact_full_name}</h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
