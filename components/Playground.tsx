import React, { useCallback } from 'react'
import ReactFlow from 'reactflow'
import 'reactflow/dist/style.css'
import './MessageNode/message-updater-node.css'
import { usePlaygroundContext } from '@/contexts/sendMessageContextHandler'

type PlaygroundProps = { children: React.ReactNode }

const Playground: React.FC<PlaygroundProps> = ({ children }) => {
  const { nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    nodeTypes, } = usePlaygroundContext();


  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        {children}
      </ReactFlow>
    </div>
  )
}

export default Playground
