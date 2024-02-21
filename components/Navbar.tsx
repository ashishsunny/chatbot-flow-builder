'use client'
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
interface NavbarProps {}
import { usePlaygroundContext } from '@/contexts/sendMessageContextHandler'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'

const Navbar: React.FC<NavbarProps> = () => {
  const { toast } = useToast()
  const { isConnected } = usePlaygroundContext()
  const [message, setMessage] = useState('')

  useEffect(() => {
    isConnected ? setMessage('Flow Saved') : setMessage('Cannot Save Flow')
  }, [isConnected])

  const handleSaveClick = () => {
    toast({
      title: message,
      variant: isConnected ? 'default' : 'destructive'
    })
  }

  return (
    <nav className="fixed top-0 left-0 z-20 w-full bg-white border-b border-gray-200 py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h3>ChatBotFlow</h3>

        <ul className="flex space-x-6">
          <Toaster />
          <li>
            <Button className="p-2" onClick={handleSaveClick} variant="outline">
              Save Changes
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
