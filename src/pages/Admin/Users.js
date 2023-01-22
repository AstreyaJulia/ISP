import React, { useEffect } from 'react';
import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import useAuth from '../../hooks/useAuth';
import UsersListAdmin from '../../components/DataTable/UsersListAdmin';
import { usersAdminList } from '../../@mock/users_admin';

const UsersAdmin = () => {
  const breadcrumbs = [{ name: 'Управление пользователями', href: '', current: true }];

  /** Состояние пользователя */
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  return (
    <BasicPage title="Управление пользователями" className="max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Управление пользователями" />
      <UsersListAdmin error={null} isLoading='false' data={usersAdminList} />
    </BasicPage>
  );
};

export default UsersAdmin;
