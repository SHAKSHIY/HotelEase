import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Chatbot from "./components/Chatbot";
import MyBookings from "./components/MyBookings"; // Import MyBookings

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
            </Routes>
    );
};

export default App;