import React from "react"; 
import { Link } from "react-router-dom"; // Import Link
import "../styles/App.css";
import { FaSearch, FaMicrophone, FaCamera } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>HotelEase</h1>
            <Link to="/">Home</Link>
            <Link to="/explore-rooms">Explore Rooms</Link>
            <Link to="/offers">Offers</Link>
            <Link to="/my-bookings">My Bookings</Link>  {/* Add My Bookings Link */}
            <Link to="/contact">Contact Us</Link>
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
