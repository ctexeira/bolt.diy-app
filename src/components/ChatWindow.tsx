import React, { useState } from 'react'
import { X } from '@lucide-react/icons'

interface ChatWindowProps {
  isOpen: boolean
  onClose: () => void
  colorScheme: { primary: string, secondary: string }
  aiModel: string
}

const ChatWindow: React.FC<ChatWindowProps> = ({ isOpen, onClose, colorScheme, aiModel }) => {
  const { primary, secondary } = colorScheme
  const [message, setMessage] = useState('')
  const [chatLog, setChatLog] = useState([
    { sender: 'Argus', text: 'Hello! How can I help you today?' },
  ])

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatLog([...chatLog, { sender: 'User', text: message }])
      // Here you would typically send the message to the AI model and handle the response
      // For now, let's simulate an AI response
      setTimeout(() => {
        setChatLog([...chatLog, { sender: 'Argus', text: `Simulated response from ${aiModel} for: "${message}"` }])
      }, 500)
      setMessage('')
    }
  }

  return (
    <div
      className={`fixed inset-0 bottom-24 right-6 bg-white rounded-lg shadow-xl max-w-md w-full transition-transform transform-gpu ${isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-10 opacity-0'} origin-bottom-right`}
      style={{ backgroundColor: 'white', color: secondary, maxHeight: 'calc(100vh - 120px)' }}
    >
      <div className="p-4 border-b flex justify-between items-center" style={{ backgroundColor: primary, color: 'white' }}>
        <h3 className="text-lg font-semibold">Argus Chat</h3>
        <button onClick={onClose} aria-label="Close Chat" className="hover:opacity-70">
          <X size={20} color="white" />
        </button>
      </div>
      <div className="p-4 h-[calc(100%-120px)] overflow-y-auto flex flex-col space-y-2">
        {chatLog.map((msg, index) => (
          <div key={index} className={`p-2 rounded-lg ${msg.sender === 'User' ? 'bg-gray-100 self-end text-right' : 'bg-gray-200 self-start'}`}>
            <p className="text-sm font-semibold">{msg.sender}</p>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex rounded-lg overflow-hidden border" style={{ borderColor: primary }}>
          <input
            type="text"
            className="w-full px-4 py-2 text-black focus:outline-none"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 font-semibold transition-colors"
            style={{ backgroundColor: primary }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatWindow
```
