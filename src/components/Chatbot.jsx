import React from "react";

const Chatbot = () => {
    return (
        <div className="chatbot">
            <div className="chat-header">HotelEase Chatbot</div>
            <div className="chat-body">
                <div className="chat-message">
                    <img src="https://via.placeholder.com/30" alt="Bot" />
                    <p>Welcome! How can I assist you with your booking today?</p>
                </div>
                <div className="chat-message">
                    <img src="https://via.placeholder.com/30" alt="User" />
                    <p>I want to book a room from 2nd to 6th of November.</p>
                </div>
                <div className="chat-message">
                    <img src="https://via.placeholder.com/30" alt="Bot" />
                    <p>Awesome! We have the following rooms available during that period:</p>
                </div>
                <div className="room-card">
                    <img src="https://source.unsplash.com/350x150/?hotel,room" alt="Room" />
                    <div className="details">
                        <h3>Superior Room with Private Pool</h3>
                        <p>Mini bar • Complimentary Wi-Fi • Infinity pool</p>
                        <a href="#" className="btn">Book Now</a>
                        <a href="#" className="btn">Virtual Tour</a>
                    </div>
                </div>
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Type your message..." />
                <button>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;