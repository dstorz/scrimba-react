import { useState, useEffect } from "react";

const IMGFLIP_API_URL = "https://api.imgflip.com/get_memes";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    image: "http://i.imgflip.com/1bij.jpg",
  });
  /* Structure of one meme in memeSet array
    {
      "id": "101470",
      "name": "Ancient Aliens",
      "url": "https://i.imgflip.com/26am.jpg",
      "width": 500,
      "height": 437,
      "box_count": 2
    } 
  */
  const [memeSet, setMemeSet] = useState([]);

  useEffect(() => {
    fetch(IMGFLIP_API_URL)
      .then((res) => res.json())
      .then((data) => setMemeSet(data.data.memes));
  }, []);

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function getMeme() {
    // Math.random() = [0, 1) so this will never evaluate to memeSet.length
    const randomIdx = Math.floor(Math.random() * memeSet.length);
    setMeme((prev) => ({
      ...prev,
      image: memeSet[randomIdx].url,
    }));
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
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button onClick={getMeme}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.image} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
