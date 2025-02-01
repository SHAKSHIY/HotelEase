import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Chatbot from "./components/Chatbot";
import MyBookings from "./components/MyBookings"; // Import MyBookings
import ExploreRooms from "./components/ExploreRooms";

const App = () => {
    return(
            <Routes>
                {/* Home Page with Hero (Includes Navbar) and Chatbot */}
                <Route path="/" element={
                    <div>
                        <Hero />
                        <Chatbot />
                    </div>
                } />

                {/* My Bookings Page */}
                <Route path="/my-bookings" element={<MyBookings />} />
                <Route path="/explore-rooms" element={<ExploreRooms />} />
            </Routes>
    );
};

export default App;