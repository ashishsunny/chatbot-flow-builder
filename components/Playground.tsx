import React, { useCallback, ReactNode } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Node, 
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

interface NodeData {
  label: string;
}

interface PlaygroundAreaProps {
  children: ReactNode; // Type 'children' as ReactNode
}

const initialNodes: Node<NodeData>[] = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }];

const PlaygroundArea: React.FC<PlaygroundAreaProps> = ({ children }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeData>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Parameters<typeof addEdge>[0]) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <main className="container bg-white h-screen mx-auto px-4 pt-16">
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          {children}
        </ReactFlow>
      </div>
    </main>
  );
};

export default PlaygroundArea;
