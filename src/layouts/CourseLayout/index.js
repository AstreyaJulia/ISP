import React, { useEffect, useState } from 'react';
import Sidebar from '../MainLayout/sidebar';
import { navigation } from '../../config';
import Layout from './layout';

/** Основная раскладка с меню и заголовком
 * @returns {JSX.Element|null}
 * @constructor
 */
const CourseLayout = () => {
  /** Стейты */
  const [isMounted, setIsMounted] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(false);

  /** Для серверной навигации */
  const [menuData, setMenuData] = useState([]);

  /** ComponentDidMount */
  useEffect(() => {
    setIsMounted(true);
    setMenuData(navigation);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="h-full">
        {/* Сайдбар меню */}
        <Sidebar menuVisibility={menuVisibility} menuData={menuData} setMenuVisibility={setMenuVisibility} />
        <Layout setMenuVisibility={setMenuVisibility} />
      </div>
    </>
  );
};

export default CourseLayout;
