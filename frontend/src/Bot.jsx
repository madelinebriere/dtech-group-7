import React, { useState } from "react";
import { DropdownMenu } from './DropdownMenu';

export const Bot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I assist you today?", isUser: false },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleUserMessage = () => {
    if (userInput.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userInput, isUser: true },
      ]);
      setUserInput("");
      // Implement the logic to process user input here
      // You can update the bot's responses based on user input
      // For simplicity, we'll just add a hard-coded response here
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "I'm just a hard-coded chatbot. Sorry, I can't respond intelligently.", isUser: false },
        ]);
      }, 500);
    }
  };

  return (
    <div>
    <div className="chatbot-container">
      <h1>Chatbot</h1>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={message.isUser ? "user-message" : "bot-message"}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="user-input">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Type your message..."
        />
        <button onClick={handleUserMessage}>Send</button>
      </div>
    </div>
    </div>
  );
};

export default Bot;
