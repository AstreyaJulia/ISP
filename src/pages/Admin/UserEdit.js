import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import useAuth from '../../hooks/useAuth';
import axios from '../../utils/axios';
import UserNewEditForm from '../../components/UserNewEditForm';
import apiErrorHelper from '../../utils/apiErrorHelper';

const UserEdit = () => {

  /** Состояние пользователя */
  const { initialize } = useAuth();
  const { id = '' } = useParams();
  const { pathname } = useLocation();
  const isEdit = pathname.includes('edit');
  const [currentUser, setCurrentUser] = useState({});

  const getUser = async () => {
    if (isEdit) {
      await axios
        .get(`/staff/${id}`)
        .then((res) => setCurrentUser(res.data.data[0]))
        .catch((error) => apiErrorHelper(error));
    }
  }

  useEffect(() => {
    initialize();
    getUser()
    // eslint-disable-next-line
  }, []);

  return (
    <BasicPage title={!isEdit ? 'Добавить пользователя' : 'Редактирование пользователя'}
               className='max-w-6xl mx-auto px-5'>
      <PageHeader header={!isEdit ? 'Добавить пользователя' : 'Редактирование пользователя'} />
      <UserNewEditForm isEdit={isEdit} currentUser={currentUser ?? []} getFunc={getUser} />
    </BasicPage>);
};

export default UserEdit;
