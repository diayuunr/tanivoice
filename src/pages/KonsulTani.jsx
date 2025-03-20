import React, { useState } from "react";
import { sendMessageToOpenAI } from "../api/openai";
import '../styles/KonsulTani.css';

function KonsulTani() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await sendMessageToOpenAI(input);
      setMessages([...newMessages, { text: res, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...newMessages, { text: "Terjadi kesalahan, coba lagi nanti.", sender: "bot" }]);
    }
  };

  return (
    <div className="konsultani-page">
      <h1>KonsulTani</h1>
      <p>Silakan tanyakan apa saja terkait pertanian, konsultani siap membantumu.</p>
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis sesuatu..."
        />
        <button onClick={sendMessage}>Kirim</button>
      </div>
    </div>
  );
}

export default KonsulTani;