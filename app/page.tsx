'use client'
import { useState } from "react"
import SettingsPanel from "@/components/Settings"
import PlaygroundArea from "@/components/Playground"
import ReactFlow, {
  MiniMap,
  Controls,
  Background} from 'reactflow'

const App = () => {
  return (
    <div className="w-screen h-screen">
      <PlaygroundArea>
        <Controls/> 
        <MiniMap style={{zIndex:"100"}}/>
        <Background variant="dots" gap={12} size={1} />
        <SettingsPanel/>
      </PlaygroundArea>
    </div>
  )
}

export default App
