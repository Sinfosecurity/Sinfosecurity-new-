"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare, X, Send } from "lucide-react"

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      sender: "bot",
      message: "Hello! How can our security team help you today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  // Enhance the chat functionality with more realistic responses
  const botResponses = [
    "Thank you for your message. One of our security experts will connect with you shortly. In the meantime, can you provide more details about your security needs?",
    "I understand your concern. Our team specializes in addressing these types of security challenges. Could you tell me more about your current security setup?",
    "That's helpful information. Based on what you've shared, I'd recommend scheduling a consultation with one of our security specialists. Would you like me to arrange that for you?",
    "Great! I've noted your information. A security consultant will reach out to you within the next business day. Is there anything else you'd like to know in the meantime?",
  ]

  // Update the handleSubmit function to use different bot responses
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message to chat
    const userMessage = {
      id: chatHistory.length + 1,
      sender: "user",
      message: message.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setChatHistory([...chatHistory, userMessage])
    setMessage("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
      const botResponse = {
        id: chatHistory.length + 2,
        sender: "bot",
        message: randomResponse,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setChatHistory((prev) => [...prev, botResponse])
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all ${
          isOpen ? "bg-accent text-white rotate-90" : "bg-primary text-white"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[500px]">
          {/* Chat Header */}
          <div className="bg-primary text-white p-4">
            <h3 className="font-bold">Live Security Support</h3>
            <p className="text-xs opacity-80">Our team typically responds in under 5 minutes</p>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-80">
            {chatHistory.map((chat) => (
              <div key={chat.id} className={`flex ${chat.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    chat.sender === "user" ? "bg-secondary text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  <p className="text-sm">{chat.message}</p>
                  <p className="text-xs opacity-70 mt-1 text-right">{chat.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="bg-accent text-white p-2 rounded-md hover:bg-accent/90 transition-colors"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}

