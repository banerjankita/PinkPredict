import 'https://cdn.jsdelivr.net/npm/@chatscope/chat-ui-kit-react@2.0.3/dist/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./drai.css";

const DrAi = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false); // State to manage typing indicator
  const navigate = useNavigate();

  const handleUserInput = (value) => {
    setUserInput(value);
  };

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const sendMessage = async (messageText) => {
    if (messageText.trim() === "") return;

    // Add the user's message to the chat history before making the API call
    setChatHistory((prev) => [
      ...prev,
      { type: "user", message: messageText },
    ]);
    setUserInput("");
    setIsTyping(true); // Start typing indicator

    try {
      // Call the AI model to get the response
      const result = await model.generateContent(messageText);
      const response = result.response;
      const text = await response.text();
      
      // After receiving the response, add the bot's message to the chat history
      setChatHistory((prev) => [
        ...prev,
        { type: "bot", message: text },
      ]);
    } catch (e) {
      console.error("Error occurred while fetching", e);
    } finally {
      setIsTyping(false); // Hide typing indicator when response is received
    }
  };

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-y-auto">
    <div className="back">
    <h2>Welcome to AI Assistant</h2>
    <div className="chat-wrapper">
      <MainContainer   style={{
    marginTop: "10px",
    padding: "12px 16px",
    width: "100%",
    maxWidth: "800px",
    height: "100%",  // let wrapper control height
    position: "relative",
    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
    borderRadius: "16px",
    overflow: "hidden",
    backgroundColor: "#f7fafd",
    }}>


        <ChatContainer  style={{
    width: "100%",
    maxWidth: "1200px", // Wider on larger screens
    height: "100%",
    padding: "0 10px",
    boxSizing: "border-box",
  }}
>
          <MessageList>
            {chatHistory.map((elt, i) => (
              <Message
                key={i}
                model={{
                  message: elt.message,
                  sender: elt.type,
                  sentTime: "just now",
                  direction: elt.type === "user" ? "outgoing" : "incoming",
                }}
              />
            ))}
            
            {/* Show typing indicator when AI is typing  */}
             {isTyping && (
              <Message
                model={{
                  message: "AI Assistant is typing...",
                  sender: "bot",
                  sentTime: "just now",
                  direction: "incoming",
                }}
              />
            )}


          </MessageList>
          <MessageInput
          className="custom-message-input"
            placeholder="Type message here"
            value={userInput}
            onChange={(val) => handleUserInput(val)}
            onSend={sendMessage}
          />
        </ChatContainer>
      </MainContainer>

      <button
  onClick={() => navigate("/")}
  className="go-home-button"
>
  Go to Home
</button>

    </div>
    </div>
    </div>
  );
};

export default DrAi;
