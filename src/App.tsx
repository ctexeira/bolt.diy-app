import React, { useState } from 'react'
import ChatHead from './components/ChatHead'
import ChatWindow from './components/ChatWindow'
import SettingsWindow from './components/SettingsWindow'
import { Cog6ToothIcon } from '@lucide-react/icons'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [colorScheme, setColorScheme] = useState({
    primary: 'aqua',
    secondary: 'black',
  })
  const [aiModel, setAiModel] = useState('GPT-4')
  const aiModels = ['GPT-4', 'Gemini Pro', 'Claude 3', 'Mistral Large']

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
    setIsSettingsOpen(false) // Close settings when chat opens
  }

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen)
    setIsChatOpen(false) // Close chat when settings open
  }

  const handleColorSchemeChange = (newColorScheme: { primary: string, secondary: string }) => {
    setColorScheme(newColorScheme)
  }

  const handleAiModelChange = (model: string) => {
    setAiModel(model)
  }

  return (
    <div className="relative h-screen w-screen">
      {isChatOpen && (
        <ChatWindow
          isOpen={isChatOpen}
          onClose={toggleChat}
          colorScheme={colorScheme}
          aiModel={aiModel}
        />
      )}
      {isSettingsOpen && (
        <SettingsWindow
          isOpen={isSettingsOpen}
          onClose={toggleSettings}
          colorScheme={colorScheme}
          onColorSchemeChange={handleColorSchemeChange}
          aiModels={aiModels}
          selectedAiModel={aiModel}
          onAiModelChange={handleAiModelChange}
        />
      )}
      <ChatHead
        isOpen={isChatOpen}
        toggleChat={toggleChat}
        colorScheme={colorScheme}
      />
      <button
        onClick={toggleSettings}
        className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300"
        aria-label="Open Settings"
      >
        <Cog6ToothIcon size={20} />
      </button>
    </div>
  )
}

export default App
