import { useState } from "react";
import "./App.css";

export default function App() {
  const [level, setLevel] = useState(0); // State for 'level'

  // Function to handle click and increment score by a specific amount
  const handleImageClick = (increment) => {
    setLevel((prevLevel) => Math.min(prevLevel + increment, 100)); // Ensure level doesn't exceed 100
  };

  return (
    <>
      <h1>Feed the Moo Deng the game.</h1>
      <h1>Level {level}</h1>

      <div className="centered-image">
        {level < 100 ? (
          <img
            src="https://pbs.twimg.com/media/GXNjEPfWQAA49D_?format=jpg&name=900x900"
            alt="หมูเด้ง"
          />
        ) : (
          <img
            src="src\image\Handsome_guy.jpg" // Replace with the new image URL
            alt="Moo Deng Full"
          />
        )}
      </div>

      <div className="image-grid">
        <img
          src="https://cdn.readawrite.com/articles/5114/5113993/thumbnail/large.gif?5"
          alt="แตงโม"
          onClick={() => handleImageClick(1)} // Increase by 1 for แตงโม
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWHt5d2gbEVJOC_eAUhsWH-Vr4V2kQlGnsw&s"
          alt="ฟักทอง"
          onClick={() => handleImageClick(5)} // Increase by 5 for ฟักทอง
        />
        <img
          src="https://c8.alamy.com/comp/2FJYNKW/touching-the-grass-2FJYNKW.jpg"
          alt="หญ้า"
          onClick={() => handleImageClick(10)} // Increase by 10 for หญ้า
        />
      </div>
    </>
  );
}
