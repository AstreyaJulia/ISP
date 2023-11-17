import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import TreeView from "../index";
import { classNames } from "../../../utils/classNames";
import { workplacesTreeIcons } from "../workplacesTreeIcons";

const TreeNode = ({
                    node,
                    handleOpen,
                    handleNameClick,
                    count,
                    isLoading,
                    error,
                    selectedNode,
                    setSelectedNode,
                    nodeMenu,
                    firstNode,
                    lastNode
                  }) => {

  const { name, icon, childNodes, brand, model, inventNumber, version, children } = node;
  const [open, setOpen] = useState(false);

  const handleClick = (node) => {
    setOpen(!open);
    if (handleOpen) handleOpen(node);
  };

  const handleNameSelectClick = (node) => {
    setSelectedNode(node);
    if (handleNameClick) handleNameClick(node);
  };

  return (
    <>
      <div className="flex flex-col" style={count !== 0 ? { marginLeft: `${count * 6}px` } : { marginLeft: 0 }}>

        <div className="flex items-center justify-between">
          <div
            className={classNames(selectedNode && selectedNode?.id === node?.id ? "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-lg" : "text-gray-700 dark:text-gray-300", "flex items-center w-full")}>
            {childNodes === "true" || children ?
              <button type="button" onClick={() => handleClick(node)} className="py-3 pl-1.5">
                <svg xmlns="http://www.w3.org/2000/svg"
                     className={classNames("w-5 h-5 text-gray-400", open ? "" : "-rotate-90")} height="24px"
                     viewBox="0 0 24 24" width="24px" fill="currentColor">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                </svg>
              </button> : ""}
            <button type="button"
                    style={childNodes === "false" ? { marginLeft: `${26}px` } : { marginLeft: 0 }}
                    className={classNames("flex items-center py-3 text-sm w-full gap-3")}
                    onClick={() => handleNameSelectClick(node)}>
              <img src={workplacesTreeIcons(icon).icon} alt="Значок"
                   className="h-4 w-4" />
              {name ? <span>{name}</span> : ""}
              {brand || model ? <span>{brand} {model}</span> : ""}
              {inventNumber ? <span>инв. №: {inventNumber}</span> : ""}
              {version ? <span>{version}</span> : ""}
            </button>
            {nodeMenu(firstNode || lastNode) && nodeMenu(firstNode || lastNode).length > 0 ? <Menu as="div" className="relative">
              <Menu.Button>
                <div className="flex-shrink-0">
                  <div
                    className="w-6 h-6 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Открыть меню</span>
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </div>
                </div>
              </Menu.Button>
              <Menu.Items
                className="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                { /* eslint-disable-next-line */ }
                {nodeMenu({firstNode, lastNode}).map((menuItem, key) =>
                  <div key={key} className="px-1 py-1">
                    <Menu.Item disabled={menuItem.disabled}>
                      {({ active }) => (
                        <a
                          href={menuItem.href}
                          onClick={() => menuItem.onClick(node)}
                          className={classNames(active ? "cursor-pointer bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" : "text-gray-900 dark:text-gray-100", "group flex w-full gap-2 items-center rounded-md px-2 py-2 text-sm", menuItem.disabled ? "opacity-50" : "")}
                        >
                          {menuItem.icon}
                          {menuItem.title}
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                )}
              </Menu.Items>
            </Menu> : ""}
          </div>


        </div>

        <Transition
          show={open}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >

          {open ? <TreeView data={node.children} count={count + 1} handleOpen={handleOpen}
                            handleNameClick={handleNameClick} setSelectedNode={setSelectedNode}
                            selectedNode={selectedNode} isLoading={isLoading} error={error} nodeMenu={nodeMenu} /> : ""}

        </Transition>

      </div>

    </>
  );
};

export default TreeNode;

TreeNode.propTypes = {
  node: PropTypes.object,
  handleOpen: PropTypes.func,
  handleNameClick: PropTypes.func,
  count: PropTypes.number,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  selectedNode: PropTypes.object,
  setSelectedNode: PropTypes.func,
  nodeMenu: PropTypes.func,
  firstNode: PropTypes.bool,
  lastNode: PropTypes.bool
}