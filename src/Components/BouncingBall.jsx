import { useEffect, useState } from "react";

// Custom hook for handling intervals

function BouncingBall() {
  const [pos, setPos] = useState(0);
  const [direction, setDirection] = useState(1); 

  useEffect(() => {
   let intervalId= setInterval(() => {
      setPos((prev) => {
        if (prev >= 450) {
          setDirection(-1);
        } else if (prev <= 0) {
          setDirection(1);
        }
        return prev + direction;
      });
    }, 1);

    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <div
        style={{
          width: "500px",
          height: "500px",
          position: "relative",
          border: "1px solid black",
        }}
      >
        <div
          style={{
            border: "1px solid black",
            borderRadius: "50%",
            position: "absolute",
            width: "50px",
            height: "50px",
            left: "45%",
            top: pos,
            backgroundColor:'blue'
          }}
        ></div>
      </div>
    </div>
  );
}

export default BouncingBall;
