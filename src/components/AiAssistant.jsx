import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const AiAssistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const recognitionRef = useRef(null);
  const [token,setToken] = useState('');

  // VOICE RECOGNITION
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      sendMessage(text);
    };

    recognition.start();
    recognitionRef.current = recognition;
  };

  // TEXT → SPEECH (MALE VOICE)
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";

    const voices = window.speechSynthesis.getVoices();
    const maleVoice = voices.find(
      (v) => v.name.toLowerCase().includes("male") || v.name.includes("David")
    );

    if (maleVoice) utterance.voice = maleVoice;

    window.speechSynthesis.speak(utterance);
  };

  // SEND MESSAGE
  const sendMessage = async (text) => {
    if (!text) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");

    //const token = localStorage.getItem("token");

    const res = await axios.post(
      "http://localhost:4000/ai/chat",
      { message: text },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    setMessages((prev) => [
      ...prev,
      { role: "ai", text: res.data.reply },
    ]);

    speak(res.data.reply);
  };

  useEffect(()=>{

    const t=sessionStorage.getItem('token')
    setToken(t)

  },[])

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full w-14 h-14 shadow-lg text-xl"
      >
        🤖
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-xl flex flex-col">
          <div className="p-3 font-semibold border-b">
            JOBIFY AI Assistant
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`text-sm p-2 rounded ${
                  msg.role === "user"
                    ? "bg-blue-100 self-end"
                    : "bg-gray-100"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-2 flex gap-2 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded px-2 text-sm"
              placeholder="Type or use voice..."
            />
            <button
              onClick={() => sendMessage(input)}
              className="bg-blue-600 text-white px-3 rounded"
            >
              Send
            </button>
            <button
              onClick={startListening}
              className="bg-gray-200 px-2 rounded"
            >
              🎤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistant;
