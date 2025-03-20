import React, { useState, useEffect } from "react";
import "../styles/Hot.css";

const Hot = () => {
  const [callStatus, setCallStatus] = useState("Dialing...");
  const [isCalling, setIsCalling] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setCallStatus("Connected"), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleEndCall = () => {
    setIsCalling(false);
    setCallStatus("Call Ended");
  };

  return (
    <div className="hot-container"><h1>TaniHotline</h1>
    <p>Silakan lakukan panggilan melalui nomor di bawah, kamu akan diarahkan untuk berbicara dengan opreator kami, AITani.</p>
    <div className="call-container">
      <div className="call-screen">
        <div className="call-status">{callStatus}</div>
        <div className="call-number">📞 Calling: +123-4567</div>
      </div>
      {isCalling && (
        <button className="end-call-button" onClick={handleEndCall}>
          End Call
        </button>
      )}
    </div></div>
  );
};

export default Hot;