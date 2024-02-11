'use client'
import React from 'react'
import { Button } from './ui/button'
import { FaRegMessage } from 'react-icons/fa6'
import { usePlaygroundContext } from '@/contexts/sendMessageContextHandler'

const SettingsPanel = () => {
  const { 
    handleClick,
 } = usePlaygroundContext();
  return (
    <div
      className={`fixed top-[4rem] right-0 z-20 w-[15rem] h-screen bg-white border-l border-gray-200 p-4 translate-x-0 transition-all duration-300}`}
    >
      <Button className="mb-4 flex flex-col ml-2" variant="ghost" onClick={()=> handleClick()}>
          <div className="flex items-center justify-center pt-4">
            <FaRegMessage />
          </div>
          <p className="font-light pb-3">Message</p>
      </Button>
    </div>
  )
}

export default SettingsPanel
