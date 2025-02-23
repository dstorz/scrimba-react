/**
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
 *
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 *
 * E.g.: "It’s hard to explain puns to kleptomaniacs because
 * they always take things literally."
 *
 * If you don't pass in a "question" prop, how might you make it only
 * show the punchline?
 */

import Joke from "./components/Joke";

export default function App() {
  const comments = ["Boo!", "Harharhar", "Dereshishishishi"];

  return (
    <>
      <Joke
        setup="What do you get if you cross an elephant and a rhino?"
        punchline="Elephino"
        upvotes={0}
        downvotes={0}
        comments={comments}
      />
      <Joke
        setup="What's a pirate's favorite letter?"
        punchline="Arrr."
        upvotes={10}
        downvotes={0}
        comments={comments}
      />
      <Joke
        setup="How did the hacker escape from the police?"
        punchline="He just randomware."
        upvotes={0}
        downvotes={0}
        comments={comments}
      />
      <Joke
        setup="Why was 6 afraid of 7?"
        punchline="Because 7 8 9."
        upvotes={4}
        downvotes={8}
        comments={comments}
      />
      <Joke
        setup="Does Fungalore grant wishes?"
        punchline="No, Fungalore hears them only."
        upvotes={0}
        downvotes={0}
        comments={comments}
      />
      <Joke
        punchline="Feed fish man eat fish teach fish lifetime"
        upvotes={0}
        downvotes={0}
        comments={comments}
      />
    </>
  );
}
