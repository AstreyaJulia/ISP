import React from 'react';
import { Link } from 'react-router-dom';

import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';

const Faq = () => {
  const breadcrumbs = [{ name: 'База знаний', href: '', current: true }];

  return (
    <BasicPage title="База знаний" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="База знаний" />
      <div className="grid grid-cols-4 gap-3 mt-5">
        <Link
          to="/faq/gas"
          className="bg-white hover:shadow-lg flex flex-col items=center p-5 rounded-md shadow gap-4 border-b-4 border-indigo-600"
        >
          <h4 className="text-xl font-bold text-gray-700 justify-center text-center">Подсистемы ГАС Правосудие</h4>
          <p className="text-sm font-medium text-gray-600 justify-center text-center">
            Судебное делопроизводство и статистика, Банк судебных решений и другие подсистемы
          </p>
        </Link>
      </div>
    </BasicPage>
  );
};

export default Faq;
