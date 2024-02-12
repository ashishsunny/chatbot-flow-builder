'use client'
import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import {
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
} from 'reactflow'
import MessageNode from '@/components/MessageNode/MessageNode'
import 'reactflow/dist/style.css'
import '@/components/MessageNode/message-updater-node.css'
interface NodeData {
  label: string
}

type PlaygroundContextProviderProps = { children: React.ReactNode }

interface PlaygroundContextType {
  nodes: Node<NodeData>[]
  edges: Edge[]
  onNodesChange: any
  onEdgesChange: any
  handleClick: any
  onConnect: (params: Parameters<typeof addEdge>[0]) => void
  nodeTypes: any
  isConnected: any
}

const PlaygroundContext = createContext<PlaygroundContextType | null>(null)

const initialNodes: Node<NodeData>[] = [
  {
    id: '1',
    type: 'textUpdater',
    position: { x: 200, y: 200 },
    data: { label: '1' },
  },
]

const nodeTypes = { textUpdater: MessageNode }

const initialEdges: Edge[] = []

const PlaygroundContextProvider = ({
  children,
}: PlaygroundContextProviderProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeData>(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const handleClick = () => {
    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        type: 'textUpdater',
        position: {
          x: prevNodes[prevNodes.length - 1].position.x + 300,
          y: prevNodes[prevNodes.length - 1].position.y,
        },
        data: { label: `${prevNodes.length + 1}` },
      },
    ])
  }

  const onConnect = useCallback(
    (params: Parameters<typeof addEdge>[0]) =>
      setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )
  const [nodeL, setNodeL] = useState(3)
  const [edgeL, setEdgeL] = useState(2)
  const [isConnected, setIsConnected] = useState(true)


  useEffect(() => {
    setNodeL(nodes.length)
    setEdgeL(edges.length)
    if (edgeL === nodeL - 1) {
      setIsConnected(true)
    } else setIsConnected(false)
  }, [nodes, edges, edgeL, nodeL])


  console.log(edgeL)
  console.log(nodeL)
  console.log(isConnected)

  return (
    <PlaygroundContext.Provider
      value={{
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        handleClick,
        onConnect,
        nodeTypes,
        isConnected,
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  )
}

export function usePlaygroundContext() {
  const context = useContext(PlaygroundContext)
  if (context === null) {
    throw new Error(
      'usePlaygroundContext must be used within PlaygroundContextProvider'
    )
  }
  return context
}

export default PlaygroundContextProvider
