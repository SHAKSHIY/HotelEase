import React from "react";
import "../styles/App.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#">Discover</a>
            <a href="#">Stay</a>
            <a href="#">Dine</a>
            <a href="#" className="btn">Reserve</a>
        </nav>
    );
};

export default Navbar;