import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to HotelEase</h1>
      <button onClick={() => navigate("/voice-search")}>Voice Search</button>
      <button onClick={() => navigate("/image-search")}>Image Search</button>
      <button onClick={() => navigate("/results")}>Start Searching</button>
    </div>
  );
};

export default Homepage;