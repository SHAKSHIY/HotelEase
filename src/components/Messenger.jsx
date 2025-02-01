import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../chatbotConfig";

const Messenger = () => {
  return <Chatbot config={config} />;
};

export default Messenger;