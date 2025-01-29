import React, { useState, useEffect, useRef } from "react";
import axios from "axios"; // For API calls
import "../styles/App.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef(null);

  // TBO API credentials
  const TBO_API = {
    url: "http://api.tbotechnology.in/TBOHolidays_HotelAPI/",
    username: "hackathontest",
    password: "Hac@98910186",
  };

  // API Call: Fetch hotel data
  const fetchHotels = async (city, checkInDate, checkOutDate) => {
    setIsTyping(true);
  
    try {
      const response = await axios.post("http://localhost:5000/search-hotels", {
        city,
        checkInDate,
        checkOutDate,
      });
  
      const hotels = response.data.HotelSearchResult || [];
      if (hotels.length > 0) {
        const hotelMessage = hotels.map(
          (hotel) =>
            `<div class="room-card">
              <h3>${hotel.HotelName}</h3>
              <p>${hotel.Category} • ${hotel.Address}</p>
              <a href="#" class="btn">Book Now</a>
            </div>`
        ).join("");
  
        setMessages((prev) => [
          ...prev,
          { text: `Here are some options in ${city}:`, sender: "bot" },
          { text: hotelMessage, sender: "bot" },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { text: "No hotels found for your search.", sender: "bot" },
        ]);
      }
    } catch (error) {
      console.error("Backend API Error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Oops! Something went wrong. Please try again later.", sender: "bot" },
      ]);
    } finally {
      setIsTyping(false);
    }
  };
  

  // Handle user input and send messages
  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Simulate bot thinking
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I'm thinking...", sender: "bot", typing: true },
      ]);

      // Call API if user asks about hotels
      if (input.toLowerCase().includes("book a room")) {
        fetchHotels("Delhi", "2025-02-01", "2025-02-05"); // Example city and dates
      } else {
        setMessages((prev) => [
          ...prev,
          { text: "I didn't understand that. Can you rephrase?", sender: "bot" },
        ]);
        setIsTyping(false);
      }
    }, 500);
  };

  // Scroll to the latest message
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chatbot">
      <div className="chat-header">Chatbot</div>
      <div className="chat-body" ref={chatBodyRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.sender === "bot" && (
              <img
                src="https://img.freepik.com/premium-photo/conversations-unleashed-vibrant-purple-chatbot-robot-white-background_983420-135039.jpg"
                alt="Bot"
                className="w-8 h-8 rounded-full mr-2"
              />
            )}
            <p dangerouslySetInnerHTML={{ __html: msg.text }}></p>
          </div>
        ))}
        {isTyping && (
          <div className="chat-message bot">
            <img
              src="https://img.freepik.com/premium-photo/conversations-unleashed-vibrant-purple-chatbot-robot-white-background_983420-135039.jpg"
              alt="Bot"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;