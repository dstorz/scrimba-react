import React from "react";
import avatar from "./images/user.png";

import Star from "./Star";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });

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
          <Star isFilled={contact.isFavorite} />
          <h2 className="name">{contact_full_name}</h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
