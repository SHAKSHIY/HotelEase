// const config = {
//     botName: "HotelEase Bot",
//     initialMessages: [
//       { type: "text", id: 1, message: "Hi! How can I assist you today?" },
//     ],
//     customStyles: {
//       botMessageBox: {
//         backgroundColor: "#5A9",
//       },
//       chatButton: {
//         backgroundColor: "#5A9",
//       },
//     },
//   };
  
//   export default config;
  


import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "HotelEaseBot",
  initialMessages: [createChatBotMessage("Hello! How can I assist you today?")],
};

export default config;
