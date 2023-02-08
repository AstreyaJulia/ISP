import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import toast from 'react-hot-toast';

import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import useAuth from '../../hooks/useAuth';
import axios from '../../utils/axios';
import {setSession} from '../../utils/jwt';
import Toast, {toastStyles} from '../../components/Toast';
import UserViewSection from "../../components/UserViewSection";

const UserView = () => {

    /** Состояние пользователя */
    const {initialize} = useAuth();
    const {id = ''} = useParams();
    const [currentUser, setCurrentUser] = useState({});

    const breadcrumbs = [{name: 'Пользователи', href: '/admin/users/', current: false}, {
        name: currentUser.fullname ?? 'Пользователь', href: '', current: true,
    }];


    const getUser = async () => {
        await axios
            .get(`/staff/${id}`)
            .then((res) => setCurrentUser(res.data.data[0]))
            .catch((err) => {
                const error = err.message && err.info ? `${err.message}: ${err.info}` : err.toString();
                if (err.code.toString() === '401') {
                    setSession(null);
                }
                toast((t) => <Toast t={t} message={error} type='error'/>, {className: toastStyles});
            });
    }

    useEffect(() => {
        initialize();
        // eslint-disable-next-line
        getUser()
        // установить стейт профессии
    }, []);

    return (
        <BasicPage title={currentUser.fullname ?? 'Пользователь'}
                   className='max-w-6xl mx-auto px-5'>
            <PageHeader pages={breadcrumbs}/>
            <UserViewSection currentUser={currentUser ?? []}/>
        </BasicPage>);
};

export default UserView;
