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

interface PlaygroundProps {
  children: ReactNode
}

const initialNodes: Node<NodeData>[] = [
  {
    id: '1',
    type: 'textUpdater',
    position: { x: 200, y: 200 },
    data: { label: '1' },
  },
  {
    id: '2',
    type: 'textUpdater',
    position: { x: 200, y: 250 },
    data: { label: '2' },
  },
  {
    id: '3',
    type: 'textUpdater',
    position: { x: 200, y: 300 },
    data: { label: '3' },
  },
]

const nodeTypes = { textUpdater: MessageNode }

const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' },
{ id: 'e2-3', source: '2', target: '3' },
]

const Playground: React.FC<PlaygroundProps> = ({ children }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeData>(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const handleClick = () => {
    setNodes((prevNodes) => [
      ...prevNodes, 
      {
        id: `${prevNodes.length + 1}`,
        type: 'textUpdater',
        position: { x: (prevNodes[prevNodes.length-1]).position.x + 300 , y: (prevNodes[prevNodes.length-1]).position.y},
        data: { label: `${prevNodes.length + 1}` }, 
      },
    ]);
  };
  

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
      <button onClick={() => handleClick() }>Click Me</button>
    </div>
  )
}

export default Playground
