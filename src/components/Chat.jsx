import React, { useState } from "react";
import "../styles/Geng.css"; 

function Chat({ user }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "me" }]);
      setInput("");

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: `Halo, saya ${user.name}!`, sender: "other" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      <h3>Chat dengan {user.name}</h3>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender === "me" ? "sent" : "received"}>
            {msg.text}
          </p>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Ketik pesan..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Kirim</button>
      </div>
    </div>
  );
}

export default Chat;
