import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from "prop-types";
import BodySection from '../BodySection';
import BasicButton from '../../../../../components/BasicButton';
import Typography from '../../../../../components/Typography';

const DoorSection = ({ selectedNode }) => {

  const [selectedTab, setSelectedTab] = useState('doorInfo');

  const sectionsTabs = [
    { name: 'Информация', value: 'doorInfo', onClick: null }
  ];

  /*
   const sectionsTabs = [
    { name: 'Информация', value: 'doorInfo', onClick: null },
    { name: 'План кабинета', value: 'doorPlan', onClick: null },
  ];
   */

  return (
    <BodySection tabs={sectionsTabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
      {  /* eslint-disable-next-line */}
      {selectedTab === 'doorInfo' ? <>
          {  /* eslint-disable-next-line */}
          <div className='pb-3 mb-2 flex items-center gap-2 border-b border-gray-300 dark:border-gray-600'>
            <BasicButton size='small' type='button' variant='primary'>
              Редактировать информацию
            </BasicButton>

          </div>
          <PerfectScrollbar options={{ wheelPropagation: false }}>
            <div className='flex flex-col gap-3 items-start p-3'>
              {selectedNode ? <Typography variant='h5' classname='mb-2'>{selectedNode.name}</Typography> : ""}
              <Typography variant='h6' classname='mb-2'>Параметры</Typography>
              <Typography variant='caption' classname='mb-2'>Длина: 4м</Typography>
              <Typography variant='caption' classname='mb-2'>Ширина: 5м</Typography>
              <Typography variant='caption' classname='mb-2'>Площадь: 20 кв.м.</Typography>
              <Typography variant='caption' classname='mb-2'>Количество окон: 1</Typography>
              <Typography variant='caption' classname='mb-2'>Количество окон с металлическими решетками: 1</Typography>
              <Typography variant='caption' classname='mb-2'>Высота потолков: 2,4м.</Typography>
              <Typography variant='caption' classname='mb-2'>Заметка: длина - стена с окном. Покрытие пола - линолеум, покрытие стен - обои. </Typography>
              <Typography variant='h6' classname='mb-2'>Примечание</Typography>
              <Typography variant='caption' classname='mb-2'>Какое-то описание кабинета</Typography>
            </div>
          </PerfectScrollbar></>
        : selectedTab === 'doorPlan' ? <>
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

export default DoorSection;

DoorSection.propTypes = {
  selectedNode: PropTypes.object,
}