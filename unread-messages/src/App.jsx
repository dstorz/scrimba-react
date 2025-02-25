import { useState } from "react";
import "./App.css";

function App() {
  const [unreadMessages, setUnreadMessages] = useState(["a", "b"]);
  // const [unreadMessages, setUnreadMessages] = useState(["a"]);
  // const [unreadMessages, setUnreadMessages] = useState([]);

  return (
    <div>
      {unreadMessages.length > 0 ? (
        <h1>
          You have {unreadMessages.length} unread message
          {unreadMessages.length !== 1 && "s"}!
        </h1>
      ) : (
        <p>You have no unread messages.</p>
      )}
    </div>
  );
}

export default App;
