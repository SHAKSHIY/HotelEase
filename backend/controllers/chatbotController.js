const chatbotQuery = async (req, res) => {
    const { message } = req.body;
  
    let responseMessage;
  
    if (message.toLowerCase().includes("location")) {
      responseMessage = "Please provide your preferred location.";
    } else if (message.toLowerCase().includes("budget")) {
      responseMessage = "What is your preferred budget range?";
    } else if (message.toLowerCase().includes("check-in")) {
      responseMessage = "Please provide your check-in and check-out dates.";
    } else {
      responseMessage = "I'm here to assist you with hotel bookings. Ask me anything!";
    }
  
    res.status(200).json({ response: responseMessage });
  };
  
  module.exports = { chatbotQuery };