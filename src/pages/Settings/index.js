import React, {useEffect} from 'react';
import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import useAuth from "../../hooks/useAuth";

const Settings = () => {
  const breadcrumbs = [{ name: 'Настройки', href: '', current: true }];

    /** Состояние пользователя */
    const { initialize, user } = useAuth();

    useEffect(() => {
        initialize();
        // eslint-disable-next-line
    }, []);

    return (
    <BasicPage title="Настройки" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Настройки" />
    </BasicPage>
  );
};

export default Settings;
