// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1>HotelEase</h1>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/image-search">Image Search</Link></li>
//         <li><Link to="/voice-search">Voice Search</Link></li>
//         <li><Link to="/messenger">Messenger</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;




// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">HotelEase</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/image-search">Image Search</a></li>
        <li><a href="/voice-search">Voice Search</a></li>
        <li><a href="/messenger">Messenger</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
