import React, { useState } from "react";

const ChatBox = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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

                const API_URL =
                    "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill";
                const API_KEY = "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";

                const response = await fetch(API_URL, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        inputs: currentMessage,
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
                console.log("API Response:", data);

                const aiResponse = {
                    text: data[0]?.generated_text || "Sorry, I couldn't process your request.",
                    sender: "Moto-AI",
                    isCustomer: false,
                    id: new Date().getTime() + 1,
                };

                setMessages((prevMessages) => [...prevMessages, aiResponse]);
            } catch (error) {
                console.error("Error fetching AI response:", error);

                const errorMessage = {
                    text: `Error: ${error.message}`,
                    sender: "Moto-AI",
                    isCustomer: false,
                    id: new Date().getTime() + 1,
                };

                setMessages((prevMessages) => [...prevMessages, errorMessage]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            {/* Chat Button */}
            <button
                className="bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
                onClick={toggleChat}
            >
                💬
            </button>

            {/* Chatbox Content */}
            <div
                className={`transition-all duration-500 ease-in-out transform ${
                    isChatOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90 pointer-events-none"
                }`}
            >
                {isChatOpen && (
                    <div className="bg-white w-[400px] h-[600px] rounded-xl shadow-xl mt-4 p-6 flex flex-col">
                        {/* Chatbox Header */}
                        <div className="flex justify-between items-center border-b pb-3">
                            <h3 className="text-xl font-bold text-gray-800">
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
                                <p className="text-gray-500 text-sm text-center">
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
                                            {message.text}
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
                                className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-orange-500 transition-shadow duration-300 ease-in-out"
                                value={currentMessage}
                                onChange={(e) =>
                                    setCurrentMessage(e.target.value)
                                }
                                onKeyDown={(e) =>
                                    e.key === "Enter" && !isLoading && handleSendMessage()
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