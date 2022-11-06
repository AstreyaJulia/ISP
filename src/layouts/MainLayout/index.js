import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import { navigation } from '../../config';
import Layout from './layout';

/** Основная раскладка с меню и заголовком
 * @returns {JSX.Element|null}
 * @constructor
 */
const MainLayout = () => {
  /** Стейты */
  const [isMounted, setIsMounted] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(false);

  /** Для серверной навигации */
  const [menuData, setMenuData] = useState([]);

  /** Стейт видимости */
  const [visible, setVisible] = useState(false);

  /** ComponentDidMount */
  useEffect(() => {
    setIsMounted(true);
    setMenuData(navigation);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  const scrollHandler = (evt) => {
    if (evt.target.scrollTop >= 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const handleScrollToTop = () => {
    document.querySelector('.content-body').scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="h-full">
        {/* Сайдбар меню */}
        <Sidebar menuVisibility={menuVisibility} menuData={menuData} setMenuVisibility={setMenuVisibility} />
        <Layout setMenuVisibility={setMenuVisibility} scrollHandler={scrollHandler} />
        {/* Кнопка назад наверх */}
        {visible && (
          <button
            type="button"
            className="flex fixed px-3 text-white py-2 w-12 h-12 rounded-full z-50 bottom-5 right-6 items-center justify-center bg-indigo-500/70 hover:bg-indigo-700/70 shadow-xl"
            onClick={handleScrollToTop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default MainLayout;
