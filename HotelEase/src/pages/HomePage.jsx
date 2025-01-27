
import React from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Main Banner */}
      <div className="home-banner">
        <h1>Welcome to HotelEase</h1>
        <p>Your one-stop solution for smarter, faster hotel searches</p>
        <button onClick={() => navigate("/image-search")}>Start Exploring</button>
      </div>

      {/* Services Section */}
      <div className="services-container">
        <div className="service-card" onClick={() => navigate("/image-search")}>
          <img src="https://static.vecteezy.com/system/resources/previews/015/337/677/non_2x/transparent-search-icon-free-png.png" alt="Image Search" />
          <h3>Image Search</h3>
          <p>Upload images to find hotels with matching aesthetics.</p>
        </div>
        <div className="service-card" onClick={() => navigate("/voice-search")}>
          <img src="https://icon-library.com/images/voice-search-icon/voice-search-icon-7.jpg" alt="Voice Search" />
          <h3>Voice Search</h3>
          <p>Search hotels effortlessly using voice commands.</p>
        </div>
        <div className="service-card" onClick={() => navigate("/messenger")}>
          <img src="https://cdn3.iconfinder.com/data/icons/chat-bot-filled-color/300/2155613Untitled-3-1024.png" alt="Messenger" />
          <h3>Messenger</h3>
          <p>Get real-time assistance via our chat interface.</p>
        </div>
        <div className="service-card" onClick={() => navigate("/results")}>
          <img src="https://static.vecteezy.com/system/resources/previews/026/530/391/non_2x/hotel-icon-accommodation-icon-vector.jpg" alt="Hotel Listings" />
          <h3>Hotel Listings</h3>
          <p>Explore and book from our extensive hotel database.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        © 2025 HotelEase. All Rights Reserved.
      </footer>
    </div>
  );
};

export default HomePage;
