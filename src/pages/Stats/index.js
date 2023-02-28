import React, { useEffect } from 'react';
import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import useAuth from '../../hooks/useAuth';

const Stats = () => {
  /** Состояние пользователя */
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  return (
    <BasicPage title="Графики" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader header="Графики" />
    </BasicPage>
  );
};

export default Stats;
