import { useState } from "react";

function Comment({ message }) {
  /*
  I wanted to do this with a function instead of an inline
  anonymous function for clarity, but looking at how close it is to a component,
  maybe there's a better pattern.

  There's an argument to be made that the better patern is:

  <ul>
    {comments.map((comment) => <Comment msg={comment} />}
  </ul>
  */

  return <li>{message}</li>;
}

export default function Joke({
  setup,
  punchline,
  upvotes,
  downvotes,
  comments,
}) {
  const [isShown, setIsShown] = useState(false);

  function togglePunchline() {
    setIsShown((prev) => !prev);
  }

  return (
    <div className="joke">
      {setup && <p className="setup">{setup}</p>}
      <button onClick={togglePunchline}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>
      {isShown && <p className="punchline">{punchline}</p>}
      <div>
        👍{upvotes} 👎{downvotes}
      </div>
      <ul className="comment-list">
        {comments.map((comment) => (
          <Comment message={comment} />
        ))}
      </ul>
    </div>
  );
}
