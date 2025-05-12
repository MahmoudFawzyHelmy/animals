import bird from "./assets/bird.svg";
import cat from "./assets/cat.svg";
import cow from "./assets/cow.svg";
import dog from "./assets/bird.svg";
import gator from "./assets/gator.svg";
import horse from "./assets/horse.svg";
import heart from "./assets/heart.svg";
import { useState } from "react";
import "./AnimalShow.css";
export default function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClicks = () => {
    setClicks(clicks + 1);
  };
  const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse,
  };
  return (
    <div
      onClick={handleClicks}
      style={{ overflow: "hidden" }}
      className="animal-show"
    >
      <img alt="animal " src={svgMap[type]} className="animal" />
      <img
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + "px" }}
        className="heart"
      />
    </div>
  );
}
