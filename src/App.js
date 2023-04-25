import React from "react";
import Testimonial from "./Components/Testimonial";
import { reviews } from "./data";
import "./App.css"



const App = () => {
  return (
    <div >
      <div>
        <h1 className="title">Our Testimonials</h1>
        <div></div>
        <Testimonial reviews={reviews}/>
      </div>
    </div>
  );
};

export default App;
