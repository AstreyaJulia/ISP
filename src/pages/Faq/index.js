import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import useAuth from '../../hooks/useAuth';

const Faq = () => {
  const breadcrumbs = [{ name: 'База знаний', href: '', current: true }];

  /** Состояние пользователя */
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  return (
    <BasicPage title="База знаний" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="База знаний" />
      <div className="grid grid-cols-4 gap-3 mt-5">
        <Link
          to="/faq/gas"
          className="bg-white dark:bg-slate-900 hover:shadow-lg flex flex-col items=center p-5 rounded-md shadow gap-4 border-b-4 border-emerald-500"
        >
          <h4 className="text-xl font-bold text-gray-700 dark:text-gray-200 justify-center text-center">
            Подсистемы ГАС Правосудие
          </h4>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300 justify-center text-center">
            Судебное делопроизводство и статистика, Банк судебных решений и другие подсистемы
          </p>
        </Link>
      </div>
    </BasicPage>
  );
};

export default Faq;
