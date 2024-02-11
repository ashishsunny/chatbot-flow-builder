'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
interface NavbarProps {}
import { usePlaygroundContext } from '@/contexts/sendMessageContextHandler'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import { GiConsoleController } from 'react-icons/gi'

const Navbar: React.FC<NavbarProps> = () => {
  const { toast } = useToast()
  const { handleSave } = usePlaygroundContext()
  return (
    <nav className="fixed top-0 left-0 z-20 w-full bg-white border-b border-gray-200 py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Your Brand Logo */}
        <a href="/">BiteSpeedFlow</a>

        {/* Navigation Links (adjust as needed) */}
        <ul className="flex space-x-6">
          <li>{handleSave ? <Toaster /> : <Toaster />}</li>
          <li>
            <Button
              className="p-2"
              onClick={() => {
                handleSave ? toast({
                  title: 'Changes Saved',
                  description: '',
                }) : toast({
                  title: 'Cannot Save Flow',
                  description: 'Connect unconnected edges',
                })
              }}
              variant="outline"
            >
              Save Changes
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
