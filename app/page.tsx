'use client'
import { useState } from 'react'
import SettingsPanel from '@/components/Settings'
import Playground from '@/components/Playground'
enum BackgroundVariant {
  Lines = 'lines',
  Dots = 'dots',
  Cross = 'cross',
}

import { MiniMap, Controls, Background } from 'reactflow'

const App = () => {
  return (
    <div className="w-screen h-screen">
      <Playground>
        <Controls />
        <MiniMap style={{ zIndex: '100' }} />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        <SettingsPanel />
      </Playground>
    </div>
  )
}

export default App
