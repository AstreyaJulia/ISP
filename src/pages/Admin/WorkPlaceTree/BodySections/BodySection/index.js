import PropTypes from "prop-types";
import { classNames } from '../../../../../utils/classNames';

const BodySection = ({ children, tabs, selectedTab, setSelectedTab }) => (
    <div className='p-1 h-full flex flex-col'>
      <div className='flex items-center pb-2 mb-2 border-b border-b-transparent gap-2'>

        {tabs.map((tab, key) => <button
          /* eslint-disable-next-line */
          key={key}
          type='button'
          onClick={() => {
            setSelectedTab(tab.value)
            if (tab.onClick) tab.onClick();
          }}
          className={classNames('w-32 p-2 text-sm inline-flex items-center justify-center leading-4 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 focus:outline-none dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg', selectedTab === tab.value ? 'bg-gray-200 dark:bg-gray-700' : '')}
        >
          {tab.name}
        </button>)}

      </div>
      <div
        className='full-h-sidebar h-full flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg py-3 px-2'>
        {children}
      </div>
    </div>
  );

export default BodySection;

BodySection.propTypes = {
  children: PropTypes.node,
  tabs: PropTypes.array,
  selectedTab: PropTypes.string,
  setSelectedTab: PropTypes.func
}