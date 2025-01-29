import React from "react";
import { FaSearch, FaMicrophone, FaCamera } from "react-icons/fa";
import Navbar from "./Navbar";

const Hero = () => {
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        console.log("Image uploaded:", file.name);
    };

    const startVoiceRecognition = () => {
        const recognition = new window.SpeechRecognition();
        recognition.lang = "en-US";

        recognition.onstart = () => console.log("Listening...");
        recognition.onresult = (event) => console.log("Voice Input:", event.results[0][0].transcript);
        recognition.onerror = () => console.log("Voice recognition failed!");

        recognition.start();
    };

    return (
        <div className="hero">
            <Navbar />
            <h1>Welcome to HotelEase</h1>
            <p>Explore the best rooms for your stay</p>

            <div className="search-container">
                <input type="text" placeholder="Search for hotels..." />
                <button className="search-btn">
                    <FaSearch /> Search
                </button>
                <button className="icon-btn" onClick={startVoiceRecognition}>
                    <FaMicrophone />
                </button>
                <label className="icon-btn">
                    <FaCamera />
                    <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />
                </label>
            </div>
        </div>
    );
};

export default Hero;
