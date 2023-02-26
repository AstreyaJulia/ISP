import React, { useEffect } from 'react';
import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import useAuth from '../../hooks/useAuth';
import UsersListAdmin from '../../components/DataTable/UsersListAdmin';
import { useDispatch, useSelector } from '../../store';
import { getStaffList } from '../../store/slices/staff';

const UsersAdmin = () => {

  const dispatch = useDispatch();

  /** Состояние пользователя */
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  const { staffList, isLoading, error } = useSelector((state) => state.staff);

  useEffect(() => {
    dispatch(getStaffList());
    // eslint-disable-next-line
  }, [dispatch]);

  const getUsersList = async () => dispatch(getStaffList());

  return (
    <BasicPage title="Пользователи" className="max-w-6xl mx-auto px-5">
      <PageHeader header="Пользователи" />
      <UsersListAdmin error={error} isLoading={isLoading} data={staffList ?? []} getFunc={getUsersList} />
    </BasicPage>
  );
};

export default UsersAdmin;
