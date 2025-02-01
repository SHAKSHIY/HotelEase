import React,{ useState, useEffect, useRef } from "react"
import "../styles/Chatbot.css"

const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: "Hello! How can I assist you today?", sender: "bot" }])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const chatBodyRef = useRef(null)

  const sendMessage = async () => {
    if (input.trim() === "") return

    const newMessages = [...messages, { text: input, sender: "user" }]
    setMessages(newMessages)
    setInput("")
    setIsTyping(true)

    try {
      const response = await fetch("http://127.0.0.1:8000/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      })
      const data = await response.json()

      const botMessages = [{ text: data.response, sender: "bot" }]

      if (data.hotels && data.hotels.HotelResult && data.hotels.HotelResult.length > 0) {
        botMessages.push({ text: "Here are some hotel options:", sender: "bot" })
        botMessages.push({
          type: "hotelList",
          hotels: data.hotels.HotelResult,
          sender: "bot",
        })
      }

      setMessages([...newMessages, ...botMessages])
    } catch (error) {
      setMessages([...newMessages, { text: "Something went wrong!", sender: "bot" }])
    } finally {
      setIsTyping(false)
    }
  }

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight
    }
  }, [messages]) //Corrected dependency

  return (
    <div className="chatbot">
      <div className="chat-header">Hotel Chatbot</div>
      <div className="chat-body" ref={chatBodyRef}>
        {messages.map((msg, index) =>
          msg.type === "hotelList" ? (
            <div key={index} className="hotels-container">
              <div className="hotels-grid">
                {msg.hotels.map((hotel, idx) => (
                  <div key={idx} className="hotel-card">
                    <img
                      src={
                        hotel.ImageUrl ||
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-01%20233417-NccfPv7ATchog7OzAETHf6i2TDkHUf.png"
                      }
                      alt={hotel.HotelCode}
                      className="hotel-image"
                    />
                    <h3 className="hotel-name">{hotel.HotelCode}</h3>
                    <p className="hotel-location">{hotel.Location || "India"}</p>
                    <p className="hotel-price">₹{hotel.Rooms[0].TotalFare}/night</p>
                    <div className="hotel-buttons">
                      <button className="book-now">Book Now</button>
                      <button className="show-details">Show Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div key={index} className={`chat-message ${msg.sender}`}>
              <p>{msg.text}</p>
            </div>
          ),
        )}
        {isTyping && (
          <div className="chat-message bot">
            <p>Typing...</p>
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
  )
}

export default Chatbot

