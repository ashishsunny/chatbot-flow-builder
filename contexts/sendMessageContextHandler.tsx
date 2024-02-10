import React, { createContext, useContext, useCallback, ReactNode } from 'react'
import ReactFlow, {
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
    nodes: Node<NodeData>[];
    edges: Edge[];
    onNodesChange: any;
    onEdgesChange: any;
    handleClick: () => void;
    onConnect: (params: Parameters<typeof addEdge>[0]) => void;
    nodeTypes: any;
}

const PlaygroundContext = createContext<PlaygroundContextType | null>(null)


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

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
]

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
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  )
}

export function usePlaygroundContext() {
    const context = useContext(PlaygroundContext);
    if (context === null) {
      throw new Error(
        'usePlaygroundContext must be used within PlaygroundContextProvider'
      );
    }
    return context;
  }

export default PlaygroundContextProvider;