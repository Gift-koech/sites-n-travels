import "./App.css"
import React from "react";
import amazon from "./Assets/amazon.jpg";
import Hero from "./components/Hero";
import Slider from "./components/Slider"
import spacetour from "./Assets/spacetour.jpg";
import deserttour from "./Assets/deserttour.jpg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import marineholiday from "./Assets/marineholiday.jpg"





function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Hero imageSrc={spacetour} />
    
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
       <Slider
        imageSrc={marineholiday}
        title={"relax and enjoy the serene vacay spots "}
        subtitle={"Your  Vacay awaits."}
            
      />
    <Footer/> 
    </div>
    
  );
   
  }
export default App;