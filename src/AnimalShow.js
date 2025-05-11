import { useState } from "react";

export default function AnimalShow() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p>Animal Count :{count}</p>
      <button className="btn btn-outline-info" onClick={handleClick}>
        AnimalShow
      </button>
    </>
  );
}
