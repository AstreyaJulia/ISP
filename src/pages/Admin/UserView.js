import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import useAuth from '../../hooks/useAuth';
import UserViewSection from '../../components/UserViewSection';
import { useDispatch, useSelector } from '../../store';
import { getStaffInfoById } from '../../store/slices/staff';
import { PATH_ADMIN, PATH_INFO } from '../../routes/paths';

const UserView = ({ user }) => {

  const dispatch = useDispatch();
  const { staffUser, isLoading, error } = useSelector((state) => state.staff);

  /** Состояние пользователя */
  const { initialize } = useAuth();
  const { id = '' } = useParams();

  const getUser = async () => dispatch(getStaffInfoById(id))

  useEffect(() => {
    initialize();
    dispatch(getStaffInfoById(id));
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <BasicPage title={staffUser.fullname ?? 'Пользователь'}
               className='max-w-6xl mx-auto px-5'>
      <PageHeader />
      <UserViewSection currentUser={staffUser ?? []} getFunc={getUser} isLoading={isLoading} error={error} />
    </BasicPage>);
};

export default UserView;

UserView.propTypes = {
  user: PropTypes.bool
};