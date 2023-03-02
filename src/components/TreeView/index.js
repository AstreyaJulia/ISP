import TreeNode from './TreeNode';

const TreeView = ({data=[], handleOpen, handleNameClick, count, isLoading, error, selectedNode, setSelectedNode}) => {
  count += 1;

  return (
    <ul>
      {data.map((node) => (
        <TreeNode node={node} key={node?.id} handleOpen={handleOpen} handleNameClick={(node) => handleNameClick(node)} count={count} isLoading={isLoading} error={error} selectedNode={selectedNode} setSelectedNode={(node) => setSelectedNode(node)} />
      ))}
    </ul>
  );
}

export default TreeView