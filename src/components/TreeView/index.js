import PropTypes from "prop-types";
import TreeNode from "./TreeNode";

const TreeView = ({
                    data = [],
                    handleOpen,
                    handleNameClick,
                    count,
                    isLoading,
                    error,
                    selectedNode,
                    setSelectedNode,
                    nodeMenu
                  }) => (
    <ul>
      {data.map((node, key) => (
        <TreeNode node={node} key={node?.id} handleOpen={handleOpen} handleNameClick={(node) => handleNameClick(node)}
                  count={count} isLoading={isLoading} error={error} selectedNode={selectedNode}
                  setSelectedNode={(node) => setSelectedNode(node)} nodeMenu={nodeMenu ? (props) => nodeMenu( props ) : () => null} firstNode={key === 0}
                  lastNode={key === data.length - 1} />
      ))}
    </ul>
  );

export default TreeView;

TreeView.propTypes = {
  data: PropTypes.array,
  handleOpen: PropTypes.func,
  handleNameClick: PropTypes.func,
  count: PropTypes.number,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  selectedNode: PropTypes.object,
  setSelectedNode: PropTypes.func,
  nodeMenu: PropTypes.func
}