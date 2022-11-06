import React from 'react';
import BasicPage from '../../pagesLayouts/BasicPage';
import PageHeader from '../../../components/PageHeader';

const Grid = () => {
  const breadcrumbs = [
    { name: 'Компоненты', href: '', current: false },
    { name: 'Сетка', href: '', current: true },
  ];

  return (
    <BasicPage title="Сетка" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Сетка" />
    </BasicPage>
  );
};

export default Grid;
