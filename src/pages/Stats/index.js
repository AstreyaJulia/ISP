import React, { useEffect } from 'react';
import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import useAuth from '../../hooks/useAuth';

const Stats = () => {
  const breadcrumbs = [
    { name: 'Статистика', href: '', current: false },
    { name: 'Графики', href: '', current: true },
  ];

  /** Состояние пользователя */
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  return (
    <BasicPage title="Графики" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Графики" />
    </BasicPage>
  );
};

export default Stats;
