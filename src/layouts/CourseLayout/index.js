import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
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
        {menuData !== [] ? (
          <Sidebar menuVisibility={menuVisibility} menuData={menuData} setMenuVisibility={setMenuVisibility} />
        ) : (
          <Skeleton
            count="5"
            className="bg-gray-500/30 after:bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-400/10"
          />
        )}
        <Layout setMenuVisibility={setMenuVisibility} />
      </div>
    </>
  );
};

export default CourseLayout;
