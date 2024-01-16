import { useState, useEffect } from "react";
import "./Watch.css";

function Watch() {
  const [milsecond, setMilsecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [stop, setStop] = useState(false);
  var intervalId;

  const setFormat = () => {
    return minute + ":" + second + ":" + milsecond;
  };
  useEffect(() => {
clearInterval(intervalId)
  }, [stop]);

  const handleStart = () => {
    setStop(false);
    intervalId = setInterval(() => {
      setMilsecond((prev) => {
        if (prev % 100 === 0 && prev !== 0) {
          setSecond((prevSecond) => {
            if (prevSecond % 60 === 0 && prevSecond !== 0) {
              setMinute((prevMinute) => prevMinute + 1);
              setSecond(0);
            }
            return prevSecond + 1;
          });
          setMilsecond(0);
        }
        return prev + 1;
      });
    }, 10); // Adjusted the interval delay to 10 milliseconds
  };
  const handleStop = () => {
setStop(true)
  };

  return (
    <div>
      <h3>Watch</h3>
      <br />
      <div style={{ fontSize: "2rem" }}>{setFormat()}</div>
      <div style={{ fontSize: "2rem" }}>
        <button
          className="btn"
          onClick={() => {
            handleStart();
          }}
        >
          Start
        </button>
        <button
          className="btn"
          onClick={() => {
            handleStop();
          }}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default Watch;
