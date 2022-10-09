

import React from "react";

import "./Hero.css"
const Hero = ({ imageSrc }) => {
    return (
        <div className="hero">
            <img src={imageSrc} alt="Travel"/>

            
            <h1 className="hero__title">Travel made Cheaper.</h1>


        </div>
    );
}
export default Hero;
