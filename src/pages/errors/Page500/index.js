import React from "react";
import { Link } from "react-router-dom";
import astronautsTalking from "../../../assets/images/pages/astronauts-talking.svg";
import BasicPage from "../../pagesLayouts/BasicPage";

const index = () => (
  <BasicPage title='Ошибка сервера' className='main-content' >
    <div className="overscroll-y-auto p-4 w-full h-screen flex justify-center items-center flex-col flex-grow m-y-auto">
      <img className="w-52" src={astronautsTalking} alt="Not authorized page"/>
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">500</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 dark:sm:border-gray-600 sm:pl-6">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-200 tracking-tight sm:text-5xl">Ошибка сервера</h1>
              <p className="mt-1 text-base text-gray-500">У нас что-то сломалось, но мы уже это чиним.</p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link to="/home"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                На главную
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  </BasicPage>
  );

export default index;