'use client'
import React from 'react';
import { Button } from "@/components/ui/button"
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="fixed top-0 left-0 z-20 w-full bg-white border-b border-gray-200 py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Your Brand Logo */}
        <a href="/">BiteSpeedFlow</a>

        {/* Navigation Links (adjust as needed) */}
        <ul className="flex space-x-6">
          <li>
            <Button className='p-2' variant="outline">Save Changes</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;