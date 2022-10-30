import React from 'react';
import BasicPage from '../../pagesLayouts/BasicPage';
import PageHeader from '../../../components/PageHeader';
import CategoryDataTable from '../../../components/DataTable/CategoryDataTable';
import category from '../../../@mock/grcategory.json';

const Gas = () => {
  const breadcrumbs = [
    { name: 'База знаний', href: '/faq', current: false },
    {
      name: 'Подсистемы ГАС Правосудие',
      href: '/faq/gas',
      current: false,
    },
    { name: 'Категории гражданских и административных дел', href: '/faq/gas/g-category', current: true },
  ];

  return (
    <BasicPage title="Категории гражданских и административных дел" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Категории гражданских и административных дел" />
      <CategoryDataTable rows={category} />
    </BasicPage>
  );
};

export default Gas;
