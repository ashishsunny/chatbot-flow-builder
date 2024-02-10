'use client'
import React from 'react'
import { Button } from './ui/button'
import { FaRegMessage } from 'react-icons/fa6'

const SettingsPanel = () => {
  return (
    <div
      className={`fixed top-[4rem] right-0 z-20 w-[12.5rem] h-screen bg-white border-l border-gray-200 p-4 translate-x-0 transition-all duration-300}`}
    >
      <Button className="mb-4 flex flex-col" variant="ghost">
          <div className="flex items-center justify-center">
            <FaRegMessage />
          </div>
          <p className="font-light" onClick={handleClick}>Message</p>
      </Button>
    </div>
  )
}

export default SettingsPanel
