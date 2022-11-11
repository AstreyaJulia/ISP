import React, {useEffect} from 'react';
import BasicPage from '../../pagesLayouts/BasicPage';
import PageHeader from '../../../components/PageHeader';
import useAuth from "../../../hooks/useAuth";

const Icons = () => {
  const breadcrumbs = [
    { name: 'Компоненты', href: '', current: false },
    { name: 'Значки', href: '', current: true },
  ];

  /** Состояние пользователя */
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);


  return (
    <BasicPage title="Значки" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Значки" />
    </BasicPage>
  );
};

export default Icons;
