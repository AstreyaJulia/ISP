import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import useAuth from '../../hooks/useAuth';
import axios from '../../utils/axios';
import { setSession } from '../../utils/jwt';
import Toast, { toastStyles } from '../../components/Toast';
import UserNewEditForm from '../../components/UserNewEditForm';

const UserEdit = () => {
  const breadcrumbs = [{ name: 'Пользователи', href: '/admin/users/', current: false }, {
    name: 'Добавить пользователя', href: '', current: true,
  }];
  const breadcrumbsEdit = [{
    name: 'Пользователи', href: '/admin/users/', current: false,
  }, { name: 'Редактирование пользователя', href: '', current: true }];

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
        .catch((err) => {
          const error = err.message && err.info ? `${err.message}: ${err.info}` : err.toString();
          if (err.code.toString() === '401') {
            setSession(null);
          }
          toast((t) => <Toast t={t} message={error} type='error' />, { className: toastStyles });
        });
    }
  }

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
    getUser()
    // установить стейт профессии
  }, []);

  return (
    <BasicPage title={!isEdit ? 'Добавить пользователя' : 'Редактирование пользователя'}
               className='max-w-6xl mx-auto px-5'>
      <PageHeader pages={!isEdit ? breadcrumbs : breadcrumbsEdit}
                  header={!isEdit ? 'Добавить пользователя' : 'Редактирование пользователя'} />
      <UserNewEditForm isEdit={isEdit} currentUser={currentUser ?? []} />
    </BasicPage>);
};

export default UserEdit;
