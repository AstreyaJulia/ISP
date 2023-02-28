import React, { useEffect } from 'react';
import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import useAuth from '../../hooks/useAuth';

const Settings = () => {

  /** Состояние пользователя */
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  return (
    <BasicPage title="Настройки" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader header="Настройки" />
    </BasicPage>
  );
};

export default Settings;
