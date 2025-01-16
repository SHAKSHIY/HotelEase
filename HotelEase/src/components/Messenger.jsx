import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../chatbotConfig";

const Messenger = () => {
  return (
    <div className="messenger">
      <h2>Messenger</h2>
      <Chatbot config={config} />
    </div>
  );
};

export default Messenger;
