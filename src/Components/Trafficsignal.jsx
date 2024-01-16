import { useEffect, useState } from "react";
import "./Trafficsignal.css";

function Trafficsignal() {
const [color,setColor]=useState('red')

  useEffect(() => {
setInterval(()=>{

  if(color=='red'){
    setColor('yellow')
  }
  else if(color=='yellow'){
    setColor('green')
  }
  else if(color=='green'){
    setColor('red')
  }

},2000)
   
},[color])

  return (
    <div>
      <div className="wrap">
        <div
          className="wrap-item"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundColor: color=='red' ? "red" : "grey",
          }}
        >
          1
        </div>
        <div
          className="wrap-item"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundColor: color=='yellow' ? "yellow" : "grey",
          }}
        >
          2
        </div>
        <div
          className="wrap-item"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundColor: color=='green' ? "green" : "grey",
          }}
        >
          3
        </div>
      </div>
    </div>
  );
}

export default Trafficsignal;
