import React from "react";
import Testimonialss from "./Components/Testimonialss";
import reviews from "./data";

const App = () => {
  return (
  <div>
    <h2>Our Testimonials</h2>
    <div></div>
    <Testimonialss reviews={reviews}/>
  </div>
  )
};

export default App;
