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
        {comments.map((comment) => {
          return <li>{comment}</li>;
        })}
      </ul>
    </div>
  );
}
