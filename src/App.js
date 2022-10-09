import "./App.css"
import React from "react";
import amazon from "./Assets/amazon.jpg";
import Hero from "./components/Hero";
import Slider from "./components/Slider"
import sad from "./Assets/sad.jpeg";
import deserttour from "./Assets/deserttour.jpg";
import Navbar from "./components/Navbar";




function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Hero imageSrc={sad} />
    
      <Slider
        imageSrc={amazon}
        title={" Want to Become an explorer?"}
        subtitle={
          "Our platform offers a wide variety of unique tropical rainforests locations!"
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