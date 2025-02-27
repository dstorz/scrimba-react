import { useState } from "react";

export default function Main() {
  /**
   * Challenge: move the hardcoded meme info into React
   * state. Use an object with `topText`, `bottomText`,
   * and `image` properties, and set the initial values to
   * the ones hardcoded below.
   */
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    image: "http://i.imgflip.com/1bij.jpg",
  });

  function changeTopText(event) {
    setMeme((prev) => {
      return { ...prev, topText: event.target.value };
    });
  }
  function changeBottomText(event) {
    setMeme((prev) => {
      return { ...prev, bottomText: event.target.value };
    });
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={changeTopText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={changeBottomText}
          />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.image} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
