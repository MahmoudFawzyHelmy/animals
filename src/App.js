import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";
export default function App() {
  function getRandomAnimal() {
    const animals = ["cat", "dog", "bird", "gator", "horse", "cow"];
    return animals[Math.floor(Math.random() * animals.length)];
  }
  const [animals, setAnimal] = useState([]);
  const handleClick = () => {
    setAnimal([...animals, getRandomAnimal()]);
  };
  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">
        {animals.map((animal, index) => {
          return <AnimalShow type={animal} key={index} />;
        })}
      </div>
    </div>
  );
}
