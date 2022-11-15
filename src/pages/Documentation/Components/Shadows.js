import React, { useEffect } from 'react';
import BasicPage from '../../pagesLayouts/BasicPage';
import PageHeader from '../../../components/PageHeader';
import useAuth from '../../../hooks/useAuth';

const Shadows = () => {
  const breadcrumbs = [
    { name: 'Компоненты', href: '', current: false },
    { name: 'Тени', href: '', current: true },
  ];

  /** Состояние пользователя */
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  return (
    <BasicPage title="Тени" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Тени" />
    </BasicPage>
  );
};

export default Shadows;
