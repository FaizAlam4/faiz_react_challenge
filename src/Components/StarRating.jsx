// import React from 'react'
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import one from "../assets/one.jpg";
import two from "../assets/two.png";
import three from "../assets/three.jpeg";
import four from "../assets/four.jpeg";
import five from "../assets/five.jpeg";

function StarRating() {
  const clickIndex = [
    { index: 1, source: one, data: "Sami ignored me" },
    { index: 2, source: two, data: `Sami didn't reply` },
    { index: 3, source: three, data: `Finally she has seen` },
    { index: 4, source: four, data: "Sami is typing..." },
    { index: 5, source: five, data: "Calling" },
  ];

  const [click, setClick] = useState(0);
  const [mouseindex, setMouseindex] = useState(0);

  const handleClick = (ele) => {
    setClick(ele);
  };

  const handleMouse = (ele) => {
    setMouseindex(ele);
  };

  const handleImage = () => {
    let ans = clickIndex.filter((ele) => ele.index == click);
    console.log(ans);
    return ans.map((ele, i) => {
      return (
        <div style={{fontSize:'2rem'}} key={i}>
          <img
            style={{ width: "200px", height: "200px" }}
            key={i}
            src={ele.source}
            alt=""
          />
        {  ele.data}
        </div>
      );
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        width: "600px",
        margin: "auto",
        justifyContent: "center",
      }}
    >
      {[1, 2, 3, 4, 5].map((ele) => {
        return (
          <div
            key={ele}
            onClick={() => {
              handleClick(ele);
            }}
            onMouseOver={() => {
              handleMouse(ele);
            }}
            onMouseLeave={() => {
              setMouseindex(0);
            }}
            id={ele}
          >
            <StarIcon
              sx={{
                color: ele <= click || ele <= mouseindex ? "orange" : "black",
                fontSize: "3rem",
              }}
            />
          </div>
        );
      })}
      <div>{handleImage()}</div>
    </div>
  );
}

export default StarRating;
