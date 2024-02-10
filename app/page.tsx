'use client'
import { useState } from "react"
import SettingsPanel from "@/components/Settings"
import Playground from "@/components/Playground"
import PlaygroundContextProvider, {usePlaygroundContext} from '@/contexts/sendMessageContextHandler'
import ReactFlow, {
  MiniMap,
  Controls,
  Background} from 'reactflow'

const App = () => {
  return (
    <PlaygroundContextProvider>
    <div className="w-screen h-screen">
      <Playground>
        <Controls/> 
        <MiniMap style={{zIndex:"100"}}/>
        <Background variant="dots" gap={12} size={1} />
        <SettingsPanel/>
      </Playground>
    </div>
    </PlaygroundContextProvider>
  )
}

export default App
