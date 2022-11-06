import React from 'react';
import BasicPage from '../../pagesLayouts/BasicPage';
import PageHeader from '../../../components/PageHeader';

const Icons = () => {
  const breadcrumbs = [
    { name: 'Компоненты', href: '', current: false },
    { name: 'Значки', href: '', current: true },
  ];

  return (
    <BasicPage title="Значки" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Значки" />
    </BasicPage>
  );
};

export default Icons;
