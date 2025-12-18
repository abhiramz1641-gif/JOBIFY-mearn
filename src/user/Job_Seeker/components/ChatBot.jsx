import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverURL } from "../../../services/serverURL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faX, faMicrophone, faStop } from "@fortawesome/free-solid-svg-icons";

export default function ChatBotVoicePopup() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "bot", text: "Hi 👋 I’m Jobify Assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [listening, setListening] = useState(false);

    const chatEndRef = useRef(null);
    const recognition = useRef(null);
    const navigate = useNavigate();

    //scrollll
    useEffect(() => {
        if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    // speech recogntn
    useEffect(() => {
        if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
            console.warn("Browser does not support Speech Recognition");
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition.current = new SpeechRecognition();
        recognition.current.continuous = true;      
        recognition.current.interimResults = true; 
        recognition.current.lang = "en-US";

        recognition.current.onresult = (event) => {
            let transcript = "";
            for (let i = event.resultIndex; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript;
            }
            setInput(transcript);
        };

        recognition.current.onerror = (event) => {
            console.error("Speech recognition error", event.error);
            setListening(false);
        };

        recognition.current.onend = () => {
            if (listening) recognition.current.start();
        };
    }, [listening]);

    const startListening = async () => {
        try {
            if (recognition.current && !listening) {
               
                await navigator.mediaDevices.getUserMedia({ audio: true });
                setListening(true);
                recognition.current.start();
            }
        } catch (err) {
            console.error("Mic permission denied or error:", err);
            alert("Please allow microphone access for voice input.");
        }
    };

    const stopListening = () => {
        if (recognition.current) {
            recognition.current.stop();
            setListening(false);
        }
    };

    const speakReply = (text) => {
        const utter = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utter);
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const res = await axios.post(
                `${serverURL}/api/chat`,
                { message: input },
                { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } }
            );

            const botMessage = res.data;
            setMessages(prev => [...prev, { role: "bot", text: botMessage.reply }]);
            speakReply(botMessage.reply);

            if (botMessage.action?.type === "navigate" && botMessage.action.url) {
                navigate(botMessage.action.url);
            }

        } catch (err) {
            console.error(err.response || err.message);
            const errorMsg = "Something went wrong. Please try again.";
            setMessages(prev => [...prev, { role: "bot", text: errorMsg }]);
            speakReply(errorMsg);
        }

        setLoading(false);
    };

    return (
        <>
            {/* Toggle Button */}
            <button onClick={() => setOpen(prev => !prev)} style={styles.toggleButton}>
                {open ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faRobot} bounce />}
            </button>

            {/* Chat Popup */}
            {open && (
                <div style={styles.wrapper}>
                    <div style={styles.header}>
                        Jobify Assistant
                        <button onClick={() => setOpen(false)} style={styles.closeButton}>✖</button>
                    </div>

                    <div style={styles.body}>
                        {messages.map((msg, index) => (
                            <div key={index} style={{ ...styles.message, ...(msg.role === "user" ? styles.user : styles.bot) }}>
                                {msg.text}
                            </div>
                        ))}
                        {loading && <div style={{ ...styles.message, ...styles.bot }}>Typing…</div>}
                        <div ref={chatEndRef} />
                    </div>

                    <div style={styles.inputBox}>
                        <input
                            type="text"
                            placeholder="Type or speak…"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => e.key === "Enter" && sendMessage()}
                            style={styles.input}
                        />
                        <button onClick={sendMessage} style={styles.button}>Send</button>
                    </div>

                    <div style={styles.voiceControls}>
                        <button onClick={startListening} style={styles.voiceButton}><FontAwesomeIcon icon={faMicrophone} /> Start</button>
                        <button onClick={stopListening} style={styles.voiceButton}><FontAwesomeIcon icon={faStop} /> Stop</button>
                        <span>{listening ? "Listening..." : "Not listening"}</span>
                    </div>
                </div>
            )}
        </>
    );
}

const styles = {
    toggleButton: { position: "fixed", bottom: "20px", right: "20px", width: "60px", height: "60px", borderRadius: "50%", background: "#2563eb", color: "#fff", fontSize: "28px", border: "none", cursor: "pointer", zIndex: 99999, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" },
    wrapper: { position: "fixed", bottom: "90px", right: "20px", width: "350px", height: "480px", background: "#fff", borderRadius: "14px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", display: "flex", flexDirection: "column", zIndex: 99999, fontFamily: "Inter, sans-serif" },
    header: { background: "#111827", color: "#fff", padding: "14px", textAlign: "center", fontWeight: 600, position: "relative" },
    closeButton: { position: "absolute", right: "10px", top: "10px", background: "transparent", border: "none", color: "#fff", fontSize: "16px", cursor: "pointer" },
    body: { flex: 1, padding: "12px", overflowY: "auto", background: "#f9fafb" },
    message: { maxWidth: "80%", padding: "10px 12px", marginBottom: "10px", borderRadius: "10px", fontSize: "14px", lineHeight: 1.4 },
    user: { background: "#2563eb", color: "#fff", marginLeft: "auto", borderBottomRightRadius: "2px" },
    bot: { background: "#e5e7eb", color: "#111827", marginRight: "auto", borderBottomLeftRadius: "2px" },
    inputBox: { display: "flex", padding: "10px", borderTop: "1px solid #e5e7eb", background: "#fff" },
    input: { flex: 1, padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px", outline: "none" },
    button: { marginLeft: "8px", padding: "0 16px", background: "#2563eb", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "14px" },
    voiceControls: { display: "flex", justifyContent: "space-between", padding: "8px 10px", borderTop: "1px solid #e5e7eb", background: "#f9fafb", alignItems: "center" },
    voiceButton: { padding: "6px 12px", borderRadius: "6px", border: "none", background: "#2563eb", color: "#fff", cursor: "pointer", marginRight: "5px" }
};
