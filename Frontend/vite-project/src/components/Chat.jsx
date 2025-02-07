import React, { useState } from "react";
import axios from "axios";

const Chat = ({ apiKey }) => {
    const [userMessage, setUserMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);

    const sendMessage = async () => {
        if (!userMessage.trim() || !apiKey) return;

        const newMessage = { role: "user", content: userMessage };
        setChatHistory([...chatHistory, newMessage]);

        try {
            const response = await axios.post("http://localhost:5000/api/chat", {
                message: userMessage,
                apiKey: apiKey,
            });

            setChatHistory([...chatHistory, newMessage, { role: "assistant", content: response.data.reply }]);
        } catch (error) {
            setChatHistory([...chatHistory, { role: "error", content: "Error connecting to AI tutor." }]);
        }

        setUserMessage("");
    };

    return (
        <div className="chat">
            <h2>Chat with Python Tutor</h2>
            <div className="chat-box">
                {chatHistory.map((msg, index) => (
                    <p key={index} className={msg.role}>{msg.content}</p>
                ))}
            </div>
            <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Ask a Python question..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
