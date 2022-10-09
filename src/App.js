import React from "react";
import amazon from "./Assets/amazon.jpg";
import Hero from "./components/Hero";
import Slider from "./components/Slider"
import sad from "./Assets/sad.jpeg";
import deserttours from "./Assets/deserttours";


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
        imageSrc={deserttours}
        
      
      />
      
    </div>
  );
   
  }
export default App;