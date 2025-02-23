//function makeComment(comment) {
function Comment({ message }) {
  // This is very similar to a component function, but will not work as
  // a component because it accepts a string as its argument

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
  return (
    <div className="joke">
      {setup && <p className="setup">{setup}</p>}
      <p className="punchline">{punchline}</p>
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
