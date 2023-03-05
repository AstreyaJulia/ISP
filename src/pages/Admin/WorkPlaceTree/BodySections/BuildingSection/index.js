import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import BodySection from '../BodySection';
import BasicButton from '../../../../../components/BasicButton';
import Typography from '../../../../../components/Typography';

const BuildingSection = ({ selectedNode }) => {

  const [selectedTab, setSelectedTab] = useState('buildingInfo');

  const sectionsTabs = [
    { name: 'Информация', value: 'buildingInfo', onClick: null },
    { name: 'План здания', value: 'buildingPlan', onClick: null },
  ];

  return (
    <BodySection tabs={sectionsTabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
      {  /* eslint-disable-next-line */}
      {selectedTab === 'buildingInfo' ? <>
          {  /* eslint-disable-next-line */}
          <div className='pb-3 mb-2 flex items-center gap-2 border-b border-gray-300 dark:border-gray-600'>
            <BasicButton size='small' type='button' variant='primary'>
              Редактировать
            </BasicButton>
            <BasicButton size='small' type='button' variant='danger'>
              Удалить
            </BasicButton>

          </div>
          <PerfectScrollbar options={{ wheelPropagation: false }}>
            <div className='flex flex-col gap-3 items-start p-3'>
              {selectedNode ? <Typography variant='h5' classname='mb-2'>{selectedNode.name}</Typography> : ""}
              <Typography variant='caption' classname='mb-2'>Почтовый адрес: г. Сафоново, ул. Красногвардейская, д.41</Typography>
              <Typography variant='h6' classname='mb-2'>Примечание</Typography>
              <Typography variant='caption' classname='mb-2'>Основное здание суда. Подсудность - Сафоновский район.</Typography>
            </div>
          </PerfectScrollbar></>
        : selectedTab === 'buildingPlan' ? <>
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

export default BuildingSection;