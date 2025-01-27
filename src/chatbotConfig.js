import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "HotelEaseBot",
  initialMessages: [createChatBotMessage("Hi! How can I assist you in finding the perfect stay?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;