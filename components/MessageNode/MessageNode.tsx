import React, { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

interface TextUpdaterNodeProps {
  data: any; 
  isConnectable: boolean;
}

const handleStyle = { left: 10 };

function MessageNode({ data, isConnectable }: TextUpdaterNodeProps) {
  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" id="a" position={Position.Left} isConnectable={isConnectable} />
      <div>
        <label htmlFor="text">Send Message:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default MessageNode;
