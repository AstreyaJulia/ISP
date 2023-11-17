import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import BasicPage from '../../pagesLayouts/BasicPage';
import PageHeader from '../../../components/PageHeader';
import useAuth from '../../../hooks/useAuth';
import { PATH_INFO } from '../../../routes/paths';

const Gas = () => {

  /** Состояние пользователя */
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  return (
    <BasicPage title="Подсистемы ГАС Правосудие" className="main-content max-w-6xl mx-auto px-12">
      <PageHeader header="Подсистемы ГАС Правосудие" />
      <div className="grid grid-cols-4 gap-3">
        <Link
          to={PATH_INFO.faq.client.gCategory}
          className="bg-white dark:bg-gray-900 hover:shadow-lg flex flex-col items=center p-5 rounded-md shadow gap-4 border-b-4 border-emerald-500"
        >
          <h4 className="text-md font-bold text-gray-700 dark:text-gray-200 justify-center text-center">
            Категории гражданских и административных дел
          </h4>
        </Link>
        <Link
          to={PATH_INFO.faq.client.mCategory}
          className="bg-white dark:bg-gray-900 hover:shadow-lg flex flex-col items=center p-5 rounded-md shadow gap-4 border-b-4 border-emerald-500"
        >
          <h4 className="text-md font-bold text-gray-700 dark:text-gray-200 justify-center text-center">
            Категории материалов
          </h4>
        </Link>
      </div>
    </BasicPage>
  );
};

export default Gas;
