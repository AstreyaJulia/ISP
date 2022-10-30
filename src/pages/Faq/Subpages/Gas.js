import React from 'react';
import { Link } from 'react-router-dom';

import BasicPage from '../../pagesLayouts/BasicPage';
import PageHeader from '../../../components/PageHeader';

const Gas = () => {
  const breadcrumbs = [
    { name: 'База знаний', href: '/faq', current: false },
    {
      name: 'Подсистемы ГАС Правосудие',
      href: '/faq/gas',
      current: true,
    },
  ];

  return (
    <BasicPage title="Подсистемы ГАС Правосудие" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Подсистемы ГАС Правосудие" />
      <div className="grid grid-cols-4 gap-3 mt-5">
        <Link
          to="/faq/gas/g-category"
          className="bg-white hover:shadow-lg flex flex-col items=center p-5 rounded-md shadow gap-4 border-b-4 border-emerald-500"
        >
          <h4 className="text-base font-medium text-gray-700 justify-center text-center">
            Категории гражданских и административных дел
          </h4>
        </Link>
      </div>
    </BasicPage>
  );
};

export default Gas;
