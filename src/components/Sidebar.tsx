'use client'

import React, { useState } from 'react'

type Props = {}

const Sidebar: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='h-full'>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden p-2 text-Black"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block w-full md:w-64 bg-gray-800 text-white p-4 h-full`}
      >
        <div className="space-y-4">
          <ul>
            <li className="text-lg font-semibold">Home</li>
            <li className="text-lg font-semibold">Data</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
