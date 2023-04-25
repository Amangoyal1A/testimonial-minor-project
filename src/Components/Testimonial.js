import React, { useState } from "react";
import Card from "./Card";
import "./Cards.css"; // Import the CSS file

const Testimonial = (props) => {
  let review = props.reviews;
  const[index,setIndex]=useState(0);

function rightShifthandler(){
    if(index+1>review.length-1)
    {
        setIndex(0)
    }else{
        setIndex(index+1);
    }
}

function leftShiftHandler(){
    if(index-1<0)
    {
        setIndex(review.length-1)
    }else{
        setIndex(index-1);
    }

}

function surpriseHandler(){
let randomindex= Math.floor(Math.random()*review.length)
setIndex(randomindex)
}

  return (
    <>
      <div className="card">
        <Card review={review[index]} />
        <div>
          <button onClick={leftShiftHandler}>{"<"}</button>
          <button onClick={rightShifthandler}>{">"}</button>
        </div>
        <div>
          <button onClick={surpriseHandler}>Surprise me</button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
