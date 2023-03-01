import { useEffect, useState } from 'react';
import TreeNode from './TreeNode';

const TreeView = ({data=[], handleOpen, handleNameClick, count}) => {
  count += 1;

  return (
    <ul>
      {data.map((node) => (
        <TreeNode node={node} key={node?.id} handleOpen={handleOpen} handleNameClick={(node) => handleNameClick(node)} count={count}/>
      ))}
    </ul>
  );
}

export default TreeView