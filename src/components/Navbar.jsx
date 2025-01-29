import React from "react";
import "../styles/App.css";
import { FaSearch, FaMicrophone, FaCamera } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>HotelEase</h1>
            <a href="#">Home</a>
            <a href="#">Explore Rooms</a>
            <a href="#">Offers</a>
            <a href="#">My Bookings</a>
            <a href="#">Contact Us</a>
            <div className="nav-actions">
                <button className="search-btn">
                    <FaSearch size={18} /> Search
                </button>
                <button className="icon-btn">
                    <FaMicrophone size={18} />
                </button>
                <button className="icon-btn">
                    <FaCamera size={18} />
                </button>
                <button className="login-btn">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
