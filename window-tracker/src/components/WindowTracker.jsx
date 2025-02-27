import { useState, useEffect } from "react";

export default function WindowTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWindowWidth() {
      console.log("Resized!");
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWindowWidth);

    return () => {
      window.removeEventListener("resize", watchWindowWidth);
    };
  }, []);

  return <h1>Window Width: {width}px</h1>;
}
