import React, { useEffect } from 'react';
import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import UsersList from '../../components/DataTable/UsersList';
import { useDispatch, useSelector } from '../../store';
import { getPhonebookList } from '../../store/slices/users';

const Phonebook = () => {
  const breadcrumbs = [
    { name: 'Информация', href: '', current: false },
    { name: 'Сотрудники', href: '', current: true },
  ];

  const dispatch = useDispatch();

  const { userList, isLoading, error } = useSelector((state) => state.phonebook);

  useEffect(() => {
    dispatch(getPhonebookList());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <BasicPage title="Сотрудники" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Сотрудники" />
      <UsersList data={userList ?? []} isLoading={isLoading} error={error} />
    </BasicPage>
  );
};

export default Phonebook;
