import React from 'react'
import { X } from '@lucide-react/icons'

interface SettingsWindowProps {
  isOpen: boolean
  onClose: () => void
  colorScheme: { primary: string, secondary: string }
  onColorSchemeChange: (colorScheme: { primary: string, secondary: string }) => void
  aiModels: string[]
  selectedAiModel: string
  onAiModelChange: (model: string) => void
}

const SettingsWindow: React.FC<SettingsWindowProps> = ({
  isOpen,
  onClose,
  colorScheme,
  onColorSchemeChange,
  aiModels,
  selectedAiModel,
  onAiModelChange,
}) => {
  const { primary, secondary } = colorScheme

  const handlePrimaryColorChange = (color: string) => {
    onColorSchemeChange({ ...colorScheme, primary: color })
  }

  const handleSecondaryColorChange = (color: string) => {
    onColorSchemeChange({ ...colorScheme, secondary: color })
  }

  return (
    <div
      className={`fixed inset-0 bg-white rounded-lg shadow-xl max-w-md w-full m-auto transition-transform transform-gpu ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} origin-center`}
      style={{ backgroundColor: 'white', color: secondary, maxHeight: 'calc(100vh - 40px)' }}
    >
      <div className="p-4 border-b flex justify-between items-center" style={{ backgroundColor: primary, color: 'white' }}>
        <h3 className="text-lg font-semibold">Settings</h3>
        <button onClick={onClose} aria-label="Close Settings" className="hover:opacity-70">
          <X size={20} color="white" />
        </button>
      </div>
      <div className="p-6 space-y-6 overflow-y-auto h-[calc(100%-80px)]">
        <div>
          <h4 className="text-md font-semibold">Color Scheme</h4>
          <div className="flex space-x-4 mt-2">
            <div>
              <label htmlFor="primaryColor" className="block text-sm font-medium text-gray-700">Primary Color</label>
              <input
                type="color"
                id="primaryColor"
                className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={colorScheme.primary}
                onChange={(e) => handlePrimaryColorChange(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="secondaryColor" className="block text-sm font-medium text-gray-700">Secondary Color</label>
              <input
                type="color"
                id="secondaryColor"
                className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={colorScheme.secondary}
                onChange={(e) => handleSecondaryColorChange(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-md font-semibold">AI Model Selection</h4>
          <div className="mt-2">
            <select
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={selectedAiModel}
              onChange={(e) => onAiModelChange(e.target.value)}
            >
              {aiModels.map((model) => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <h4 className="text-md font-semibold">Feedback & Support</h4>
          <div className="mt-2 space-y-2">
            <a href="#" className="text-blue-500 hover:underline block">Send Feedback</a>
            <a href="#" className="text-green-500 hover:underline block">Donate to Support Development</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsWindow
```
