import React, {useEffect} from 'react';
import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import useAuth from "../../hooks/useAuth";

const Admin = () => {
  const breadcrumbs = [{ name: 'Администрирование', href: '', current: true }];

    /** Состояние пользователя */
    const { initialize, user } = useAuth();

    useEffect(() => {
        initialize();
        // eslint-disable-next-line
    }, []);


    return (
    <BasicPage title="Администрирование" className="max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Администрирование" />
    </BasicPage>
  );
};

export default Admin;
