import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BasicPage from '../../pagesLayouts/BasicPage';
import PageHeader from '../../../components/PageHeader';
import CategoryDataTable from '../../../components/DataTable/CategoryDataTable';
import { useDispatch, useSelector } from '../../../store';
import { getGcategory, getMcategory, resetGcategory, resetMcategory } from '../../../store/slices/casescategory';
import useAuth from '../../../hooks/useAuth';

const Gas = ({ type }) => {
  /** Состояние пользователя */
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  const dispatch = useDispatch();

  const { gcategory, mcategory, isLoading, error } = useSelector((state) => state.casescategory);

  useEffect(() => {
    dispatch(typesSettings[type].query);
    return () => {
      dispatch(resetGcategory());
      dispatch(resetMcategory());
    };
    // eslint-disable-next-line
  }, [dispatch]);

  const typesSettings = {
    gcases: {
      data: gcategory ?? [],
      query: getGcategory(),
      name: 'Категории гражданских и административных дел',
      href: '/faq/gas/g-category',
    },
    mcases: {
      data: mcategory ?? [],
      query: getMcategory(),
      name: 'Категории материалов',
      href: '/faq/gas/m-category',
    },
  };

  const breadcrumbs = [
    { name: 'База знаний', href: '/faq', current: false },
    {
      name: 'Подсистемы ГАС Правосудие',
      href: '/faq/gas',
      current: false,
    },
    { name: typesSettings[type].name, href: typesSettings[type].href, current: true },
  ];

  return (
    <BasicPage title={typesSettings[type].name} className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header={typesSettings[type].name} />
      <CategoryDataTable data={typesSettings[type].data} isLoading={isLoading} type={type} error={error} />
    </BasicPage>
  );
};

Gas.propTypes = {
  type: PropTypes.string,
};

export default Gas;
