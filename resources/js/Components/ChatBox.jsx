import React, { useState } from "react";

const ChatBox = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const TypingDots = () => (
        <span className="inline-block">
            <span className="dot-animation">.</span>
            <span className="dot-animation">.</span>
            <span className="dot-animation">.</span>
            <style jsx>{`
                .dot-animation {
                    display: inline-block;
                    animation: blink 1.5s infinite;
                    animation-delay: calc(var(--dot-index, 1) * 0.2s);
                }
                .dot-animation:nth-child(1) {
                    --dot-index: 1;
                }
                .dot-animation:nth-child(2) {
                    --dot-index: 2;
                }
                .dot-animation:nth-child(3) {
                    --dot-index: 3;
                }
                @keyframes blink {
                    0%,
                    20% {
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
            `}</style>
        </span>
    );

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const handleSendMessage = async () => {
        if (currentMessage.trim()) {
            const newMessage = {
                text: currentMessage,
                sender: "Customer",
                isCustomer: true,
                id: new Date().getTime(),
            };

            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setCurrentMessage("");

            try {
                setIsLoading(true);

                // Tambahkan placeholder "AI is typing..."
                const typingMessage = {
                    text: (
                        <span>
                            Moto lagi ngetik
                            <TypingDots />
                        </span>
                    ),
                    sender: "Moto-AI",
                    isCustomer: false,
                    id: new Date().getTime() + 1,
                    isTyping: true, // Penanda bahwa ini adalah placeholder
                };

                setMessages((prevMessages) => [...prevMessages, typingMessage]);

                // Identifikasi pertanyaan terkait model AI
                const aiRelatedKeywords = [
                    "gemini ai",
                    "google ai",
                    "model ai",
                    "moto ai",
                    "moto",
                ];
                const isAIQuery = aiRelatedKeywords.some((keyword) =>
                    currentMessage.toLowerCase().includes(keyword)
                );

                if (isAIQuery) {
                    const aiResponse = {
                        text: "Aku Moto-AI dari MotoCare, siap bantu kamu dengan gaya santai. Ada yang bisa dibantu? ✌️",
                        sender: "Moto-AI",
                        isCustomer: false,
                        id: new Date().getTime() + 2,
                    };

                    // Hapus "AI is typing..." dan tambahkan respon sebenarnya
                    setMessages((prevMessages) => [
                        ...prevMessages.filter((msg) => !msg.isTyping),
                        aiResponse,
                    ]);
                    return;
                }

                // URL dan API Key
                const API_URL =
                    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

                const API_KEY =
                    import.meta.env.VITE_GEMINI_API_KEY ||
                    process.env.REACT_APP_GEMINI_API_KEY;

                const response = await fetch(`${API_URL}?key=${API_KEY}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: currentMessage }] }],
                    }),
                });

                if (!response.ok) {
                    console.error(
                        "Error response:",
                        response.status,
                        response.statusText
                    );
                    throw new Error(
                        `Error ${response.status}: ${response.statusText}`
                    );
                }

                const data = await response.json();
                const aiResponseText =
                    data.candidates?.[0]?.content?.parts?.[0]?.text ||
                    "Hmm, aku lagi bingung jawabnya. Bisa ulangi nggak? 🙏";

                const modifiedResponse = `${aiResponseText} 😎`;

                const aiResponse = {
                    text: modifiedResponse,
                    sender: "Moto-AI",
                    isCustomer: false,
                    id: new Date().getTime() + 2,
                };

                // Hapus "AI is typing..." dan tambahkan respon sebenarnya
                setMessages((prevMessages) => [
                    ...prevMessages.filter((msg) => !msg.isTyping),
                    aiResponse,
                ]);
            } catch (error) {
                console.error("Error fetching AI response:", error);

                const errorMessage = {
                    text: `Oops, ada error nih: ${error.message} 🤔`,
                    sender: "Moto-AI",
                    isCustomer: false,
                    id: new Date().getTime() + 1,
                };

                // Hapus "AI is typing..." dan tambahkan pesan error
                setMessages((prevMessages) => [
                    ...prevMessages.filter((msg) => !msg.isTyping),
                    errorMessage,
                ]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            {/* Chat Button */}
            <button
                className="bg-white text-white p-4 mr-4 mb-4 rounded-full shadow-lg hover:bg-orange-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
                onClick={toggleChat}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-16 text-orange-500"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {/* Chatbox Content */}
            <div
                className={`fixed bottom-6 right-6 z-[9999] transition-all duration-500 ease-in-out transform ${
                    isChatOpen
                        ? "opacity-100 scale-100 visible pointer-events-auto"
                        : "opacity-0 scale-90 invi pointer-events-none"
                }`}
            >
                {isChatOpen && (
                    <div className="bg-white w-[400px] h-[600px] rounded-xl shadow-xl mt-4 p-6 flex flex-col">
                        {/* Chatbox Header */}
                        <div className="flex justify-between items-center border-b pb-">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 ml-2">
                                Chat with Moto-AI
                            </h3>
                            <button
                                className="text-gray-500 hover:text-gray-700 transition-colors duration-300 ease-in-out"
                                onClick={toggleChat}
                            >
                                ✖
                            </button>
                        </div>

                        {/* Chatbox Messages */}
                        <div className="flex-1 overflow-y-auto mt-4 space-y-4">
                            {messages.length === 0 ? (
                                <p className="text-gray-500 text-xl text-center">
                                    No messages yet
                                </p>
                            ) : (
                                messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex flex-col transition-transform duration-500 ease-in-out ${
                                            message.isCustomer
                                                ? "items-end"
                                                : "items-start"
                                        }`}
                                    >
                                        <span
                                            className={`text-sm font-semibold ${
                                                message.isCustomer
                                                    ? "text-orange-600"
                                                    : "text-gray-600"
                                            }`}
                                        >
                                            {message.sender}
                                        </span>
                                        <div
                                            className={`p-3 rounded-lg animate-slide-in ${
                                                message.isCustomer
                                                    ? "bg-orange-100 text-orange-800"
                                                    : "bg-gray-100 text-gray-800"
                                            } max-w-xs`}
                                        >
                                            {message.isTyping ? (
                                                <span className="flex items-center">
                                                    {message.text}
                                                </span>
                                            ) : (
                                                message.text
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Chatbox Input */}
                        <div className="mt-4 flex items-center space-x-2">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="flex-1 border text-lg border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-orange-500 transition-shadow duration-300 ease-in-out"
                                value={currentMessage}
                                onChange={(e) =>
                                    setCurrentMessage(e.target.value)
                                }
                                onKeyDown={(e) =>
                                    e.key === "Enter" &&
                                    !isLoading &&
                                    handleSendMessage()
                                }
                                disabled={isLoading}
                            />
                            <button
                                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
                                onClick={handleSendMessage}
                                disabled={isLoading}
                            >
                                {isLoading ? "Sending..." : "Send"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatBox;
