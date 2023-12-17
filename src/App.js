import React from "react";
import Testimonialss from "./Components/Testimonialss";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
        <div className="text-center">
          <h2 className="text-black font-bold text-3xl">Our Testimonials</h2>
          <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
          <Testimonialss reviews={reviews}/>
      </div>
    </div>
  )
};

export default App;
