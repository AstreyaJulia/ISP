import React from 'react';
import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';

const Settings = () => {
  const breadcrumbs = [{ name: 'Настройки', href: '', current: true }];

  return (
    <BasicPage title="Настройки" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Настройки" />
    </BasicPage>
  );
};

export default Settings;
