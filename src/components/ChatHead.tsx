import React from 'react'

interface ChatHeadProps {
  isOpen: boolean
  toggleChat: () => void
  colorScheme: { primary: string, secondary: string }
}

const ChatHead: React.FC<ChatHeadProps> = ({ isOpen, toggleChat, colorScheme }) => {
  const { primary, secondary } = colorScheme

  return (
    <button
      onClick={toggleChat}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-transform transform-gpu hover:scale-105"
      style={{ backgroundColor: primary, color: secondary }}
      aria-label="Toggle Chat"
    >
      <span className="text-2xl font-bold">Argus</span>
    </button>
  )
}

export default ChatHead
```
