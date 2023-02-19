import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import useAuth from '../../hooks/useAuth';
import UserViewSection from '../../components/UserViewSection';
import { useDispatch, useSelector } from '../../store';
import { getStaffInfoById } from '../../store/slices/staff';

const UserView = ({ user }) => {

  const dispatch = useDispatch();
  const { staffUser, isLoading } = useSelector((state) => state.staff);

  /** Состояние пользователя */
  const { initialize } = useAuth();
  const { id = '' } = useParams();

  const breadcrumbs = [{ name: 'Пользователи', href: `${user ? '/phonebook/' : '/admin/users/'}`, current: false }, {
    name: staffUser.fullname ?? 'Пользователь', href: '', current: true,
  }];


  const getUser = async () => dispatch(getStaffInfoById(id))

  useEffect(() => {
    initialize();
    dispatch(getStaffInfoById(id));
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <BasicPage title={staffUser.fullname ?? 'Пользователь'}
               className='max-w-6xl mx-auto px-5'>
      <PageHeader pages={breadcrumbs} />
      <UserViewSection currentUser={staffUser ?? []} getFunc={getUser} isLoading={isLoading} />
    </BasicPage>);
};

export default UserView;

UserView.propTypes = {
  user: PropTypes.object
};