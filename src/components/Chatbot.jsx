// import React from "react";

// const Chatbot = () => {
//     return (
//         <div className="chatbot">
//             <div className="chat-header">HotelEase Chatbot</div>
//             <div className="chat-body">
//                 <div className="chat-message">
//                     <img src="https://img.freepik.com/premium-photo/conversations-unleashed-vibrant-purple-chatbot-robot-white-background_983420-135039.jpg" alt="Bot" className="w-8 h-8 rounded-full mr-2"/>
//                     <p>Welcome! How can I assist you with your booking today?</p>
//                 </div>
//                 <div className="chat-message">
//                     <img src="https://www.kindpng.com/picc/m/722-7221920_placeholder-profile-image-placeholder-png-transparent-png.png" alt="User" className="w-8 h-8 rounded-full ml-2"/>
//                     <p>I want to book a room from 2nd to 6th of November.</p>
//                 </div>
//                 <div className="chat-message">
//                     <img src="https://img.freepik.com/premium-photo/conversations-unleashed-vibrant-purple-chatbot-robot-white-background_983420-135039.jpg" alt="Bot" className="w-8 h-8 rounded-full mr-2"/>
//                     <p>Awesome! We have the following rooms available during that period:</p>
//                 </div>
//                 <div className="room-card">
//                     <img src="https://cache.marriott.com/marriottassets/marriott/KULDT/kuldt-guestroom-0065-hor-clsc.jpg?interpolation=progressive-bilinear&" alt="Room" />
//                     <div className="details">
//                         <h3>Superior Room with Private Pool</h3>
//                         <p>Mini bar • Complimentary Wi-Fi • Infinity pool</p>
//                         <a href="#" className="btn">Book Now</a>
//                         <a href="#" className="btn">Virtual Tour</a>
//                     </div>
//                 </div>
//             </div>
//             <div className="chat-input">
//                 <input type="text" placeholder="Type your message..." />
//                 <button>Send</button>
//             </div>
//         </div>
//     );
// };

// export default Chatbot;




import React, { useState, useEffect, useRef } from "react";
import "../styles/App.css";


const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef(null);

  // Function to add a message
  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true); // Show typing indicator

    // Simulate bot response delay
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { text: "I'm thinking...", sender: "bot", typing: true },
      ]);

      setTimeout(() => {
        setMessages([
          ...newMessages,
          { text: "This is a bot response!", sender: "bot" },
        ]);
        setIsTyping(false);
      }, 1200);
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
            {msg.sender === "bot" && <img src="https://img.freepik.com/premium-photo/conversations-unleashed-vibrant-purple-chatbot-robot-white-background_983420-135039.jpg" alt="Bot" className="w-8 h-8 rounded-full mr-2"/>}
            <p>{msg.text}</p>
          </div>
        ))}
        {isTyping && (
          <div className="chat-message bot">
            <img src="https://img.freepik.com/premium-photo/conversations-unleashed-vibrant-purple-chatbot-robot-white-background_983420-135039.jpg" alt="Bot" className="w-8 h-8 rounded-full mr-2"/>
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
