import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { getAmount } from "../../../utils/getAmount";
import Badge from "../../../components/Badge";
import { classNames } from "../../../utils/classNames";

const SearchResults = ({ show, query, searchQueryClose, searchType, searchresults }) => {

  const searchTypesSettings = {
    users: {
      element: (item) => {
        return (
          <a key={item.fullname}
             className="flex flex-col border border-transparent border-b-slate-300 border-dashed py-2 hover:cursor-pointer hover:bg-emerald-50 hover:border-emerald-300 hover:border hover:rounded-md p-2">
            <p className="text-sm font-bold text-slate-800">{item.fullname}</p>
            <p className="flex items-center text-sm text-slate-600">
              <span>{item.profession}</span>
              <span className="mx-2">•</span>
              <span>{item.room}</span>
              <span className="mx-2">•</span>
              <span>{item.phone}</span>
            </p>
          </a>
        );
      }
    },
    inbox: {
      element: (item) => {
        return (
          <a key={item.number}
             className="flex flex-col border border-transparent border-b-slate-300 border-dashed py-2 hover:cursor-pointer hover:bg-emerald-50 hover:border-emerald-300 hover:border hover:rounded-md p-2">
            <div className='flex flex-col'>
              <p className="text-sm font-bold text-slate-800 mb-1">
                <Badge item={`Вх. №: ${item.number}`} size='small' color='cyan' shape='rounded' />
                <span className='ml-2'>{item.content}</span>
              </p>
              <p className="flex items-center text-sm text-slate-600">
                {item.type === 'Электронная почта' ?
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                  </svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                  </svg>
                }
                <span>{item.sender}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mx-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
                <span>{item.sendto}</span>
              </p>
            </div>
          </a>
        );
      }
    },
    outbox: {
      element: (item) => {
        return (
          <a key={item.number}
             className="flex flex-col border border-transparent border-b-slate-300 border-dashed py-2 hover:cursor-pointer hover:bg-emerald-50 hover:border-emerald-300 hover:border hover:rounded-md p-2">
            <div className='flex flex-col'>
              <p className="text-sm font-bold text-slate-800 mb-1">
                <Badge item={`Исх. №: ${item.number}`} size='small' color='indigo' shape='rounded' />
                <span className='ml-2'>{item.content}</span>
              </p>
              <p className="flex items-center text-sm text-slate-600">
                {item.type === 'Разноска' ?
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                  </svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                  </svg>
                }
                <span>{item.sender}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mx-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
                <span>{item.sendto},</span>
                <span className='ml-2'>{item.address}</span>
              </p>
            </div>
          </a>
        );
      }
    }
  };

  return (
    show ?
      <div
        className="absolute inset-y-full right-0 flex flex-col bg-white rounded-md w-full h-min max-h-96 mt-4 border border-slate-300 dark:border-slate-600 shadow-xl p-3">
        <div className="w-full flex items-center">
          <div className="bg-indigo-100 rounded-md p-3 flex items-center justify-between grow">
            <p className="uppercase font-bold text-xs text-slate-600 wrap">
              {query !== "" ?
                <>
                  <span>Результаты поиска:</span>
                  <span className="ml-2">"{query}"</span>
                </>
                : <span>Введите поисковой запрос</span>
              }
            </p>
          </div>
          <button onClick={searchQueryClose} title="Закрыть окно результатов поиска"
                  className="ml-2 p-1 rounded-full text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:text-indigo-600"
                  type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className={classNames(query !== "" ? 'pt-3' : '', "flex-1 flex flex-col overflow-y-auto")}>
          <PerfectScrollbar
            className="ps__show pr-3"
            options={{ wheelPropagation: false }}
          >
            {
              searchresults.map((item) => {
                return searchTypesSettings[searchType].element(item);
              })
            }
          </PerfectScrollbar>
        </div>
        {query !== "" ?
          <div className="w-full flex items-center mt-3 pr-3">
            <div className="bg-slate-100 rounded-md p-3 flex items-center justify-between grow">
              <p className="uppercase font-bold text-xs text-slate-600 wrap">
                {searchresults.length > 0 && query !== "" ? <>
                  <span>Найдено:</span>
                  <span className="ml-2">{searchresults.length}</span>
                  <span className="ml-2">{getAmount(searchresults.length, {
                    single: "результат",
                    multi: "результата",
                    count: "результатов"
                  })}</span>
                </> : <span className="ml-2">Ничего не найдено</span>
                }
              </p>
            </div>
          </div> : ""
        }
      </div>
      : ""
  );
};

export default SearchResults;