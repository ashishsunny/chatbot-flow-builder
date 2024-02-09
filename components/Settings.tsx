'use client'
import React from 'react'
import { Button } from './ui/button'

const SettingsPanel = () => {
  return (
    <div
      className={`fixed top-[4rem] right-0 z-20 w-64 h-screen bg-white border-l border-gray-200 p-4 translate-x-0 transition-all duration-300}`}
    >
      <div className="mb-4">
        <Button variant="ghost">Message</Button>
      </div>
    </div>
  )
}

export default SettingsPanel
