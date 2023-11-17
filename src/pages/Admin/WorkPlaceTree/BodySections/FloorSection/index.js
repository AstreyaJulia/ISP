import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from "prop-types";
import BodySection from '../BodySection';
import Typography from '../../../../../components/Typography';
import BasicButton from '../../../../../components/BasicButton';

const FloorSection = ({ selectedNode }) => {

  const [selectedTab, setSelectedTab] = useState('floorInfo');

  const sectionsTabs = [
    { name: 'Информация', value: 'floorInfo', onClick: null }
  ];

  /*
    const sectionsTabs = [
    { name: 'Информация', value: 'floorInfo', onClick: null },
    { name: 'План этажа', value: 'floorPlan', onClick: null },
  ];
   */

  return (
    <BodySection tabs={sectionsTabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
      {  /* eslint-disable-next-line */}
      {selectedTab === 'floorInfo' ? <>
          {  /* eslint-disable-next-line */}
          <div className='pb-3 mb-2 flex items-center gap-2 border-b border-gray-300 dark:border-gray-600'>
            <BasicButton size='small' type='button' variant='primary'>
              Редактировать информацию
            </BasicButton>

          </div>
          <PerfectScrollbar options={{ wheelPropagation: false }}>
            <div className='flex flex-col gap-3 items-start p-3'>
              {selectedNode ? <Typography variant='h5' classname='mb-2'>{selectedNode.name}</Typography> : ""}
              <Typography variant='h6' classname='mb-2'>Примечание</Typography>
              <Typography variant='caption' classname='mb-2'>Какое-то описание этажа</Typography>
            </div>
          </PerfectScrollbar></>
        : selectedTab === 'floorPlan' ? <>
          {  /* eslint-disable-next-line */}
          <div className='pb-3 mb-2 flex items-center gap-2 border-b border-gray-300 dark:border-gray-600'>
            <BasicButton size='small' type='button' variant='primary'>
              Загрузить изображение
            </BasicButton>
            <BasicButton size='small' type='button' variant='danger'>
              Удалить изображение
            </BasicButton>

          </div>
          <PerfectScrollbar options={{ wheelPropagation: false }}>
            <div className='flex flex-col gap-3 items-start p-3'>
              {selectedNode ? <Typography variant='h5' classname='mb-2'>{selectedNode.name}</Typography> : ""}
            </div>
          </PerfectScrollbar></> : ''}

    </BodySection>
  );
};

export default FloorSection;

FloorSection.propTypes = {
  selectedNode: PropTypes.object,
}