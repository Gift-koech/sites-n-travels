import React from "react";
import amazon from "./Assets/amazon.jpg";
import Hero from "./components/Hero";
import Slider from "./components/Slider"
import sad from "./Assets/sad.jpeg";
import deserttour from "./Assets/deserttour.jpg";


function App() {
  return (
    <div>
      <Hero imageSrc={sad} />
      <Slider
        imageSrc={amazon}
        title={"Become an explorer."}
        subtitle={
          "Our platform offers a wide variety of unique travel locations!"
        }
      />
      <Slider
        imageSrc={deserttour}
        title={"Create eternal memories with loved ones"}
        subtitle={"Your dream Vacay is our calling"}
        flipped={true}      
      />
      
    </div>
  );
   
  }
export default App;