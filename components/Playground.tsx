import React, { useCallback, ReactNode } from 'react'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
} from 'reactflow'
import MessageNode from './MessageNode/MessageNode'
import 'reactflow/dist/style.css'
import './MessageNode/message-updater-node.css'

interface NodeData {
  label: string
}

interface PlaygroundAreaProps {
  children: ReactNode
}

const initialNodes: Node<NodeData>[] = [
  {
    id: '1',
    type: 'textUpdater',
    position: { x: 0, y: 0 },
    data: { label: '1' },
  },
  {
    id: '2',
    type: 'textUpdater',
    position: { x: 0, y: 100 },
    data: { label: '2' },
  },
]

const nodeTypes = { textUpdater: MessageNode }

const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }]

const PlaygroundArea: React.FC<PlaygroundAreaProps> = ({ children }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeData>(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: Parameters<typeof addEdge>[0]) =>
      setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

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

export default PlaygroundArea
