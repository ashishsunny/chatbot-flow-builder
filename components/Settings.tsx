'use client'
import React from 'react'


const SettingsPanel = () => {
  return (
    <div
      className={`fixed top-[4rem] right-0 z-20 w-64 h-screen bg-white border-l border-gray-200 p-4 translate-x-0 transition-all duration-300}`}
    >
      {/* Settings options go here */}
      <h3 className="text-lg font-semibold mb-3">Settings</h3>
      {/* Example Setting */}
      <div className="mb-4">
        <label htmlFor="theme" className="block mb-1">
          Theme:
        </label>
        <select
          id="theme"
          className="block w-full border border-gray-300 rounded p-2"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  )
}

export default SettingsPanel
