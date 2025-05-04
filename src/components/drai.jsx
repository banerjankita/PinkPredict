import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './drai.css';
import { useEffect, useRef } from 'react';

const DrAi = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isTyping]);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const sendMessage = async () => {
    if (userInput.trim() === '') return;

    const messageText = userInput;

    setChatHistory((prev) => [...prev, { type: 'user', message: messageText }]);
    setUserInput('');
    setIsTyping(true);

    try {
      const result = await model.generateContent(messageText);
      const response = result.response;
      const text = await response.text();

      setChatHistory((prev) => [...prev, { type: 'bot', message: text }]);
    } catch (e) {
      console.error('Error occurred while fetching', e);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-y-auto">
      <div className="back">
        <h2>Welcome to AI Assistant</h2>
        <div className="chat-wrapper">
          <div className="chat-container">
          <div className="message-list">
  {chatHistory.map((msg, idx) => (
    <div
      key={idx}
      className={`message-bubble ${msg.type === 'user' ? 'user' : 'bot'}`}
    >
      {msg.message}
    </div>
  ))}
  {isTyping && (
    <div className="message-bubble bot">AI Assistant is typing...</div>
  )}
  <div ref={messagesEndRef} />
</div>

            </div>

            <div className="input-section">
            <input
  type="text"
  value={userInput}
  onChange={handleUserInput}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default form submission (if inside a form)
      sendMessage();
    }
  }}
  placeholder="Type message here"
  className="input-box"
/>

              <button onClick={sendMessage} className="send-button">
                Send
              </button>
            </div>

          <button onClick={() => navigate('/')} className="go-home-button">
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrAi;

