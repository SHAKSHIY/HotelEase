import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <div className="hero">
            <Navbar />
            <h1>CELEBRATE THE EVERYDAY WITH</h1>
            <h1>The GTG</h1>
            <p>Explore the best rooms for your stay</p>
            <a href="#" className="btn">Explore Rooms</a>
        </div>
    );
};

export default Hero;