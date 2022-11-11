import React, {useEffect} from 'react';
import BasicPage from '../../pagesLayouts/BasicPage';
import PageHeader from '../../../components/PageHeader';
import useAuth from "../../../hooks/useAuth";

const Colors = () => {
  const breadcrumbs = [
    { name: 'Компоненты', href: '', current: false },
    { name: 'Цвета', href: '', current: true },
  ];

  /** Состояние пользователя */
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);


  return (
    <BasicPage title="Цвета" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Цвета" />
    </BasicPage>
  );
};

export default Colors;
