import React, {useState} from "react";
import {Disclosure} from "@headlessui/react";

import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";
import {classNames} from "../../utils/classNames";
import {Card} from '../../components/Card'
import ContentLayoutWithSidebar from "../pagesLayouts/ContentLayoutWithSidebar";

const Faq = () => {
  const breadcrumbs = [{name: "База знаний", href: "", current: true}];

  const faqPages = [{
    title: "Подсистемы ГАС Правосудие",
    href: "/gas-pravosudie",
    children: [
      {
        title: "Судебное делопроизводство и статистика",
        href: "/sdp",
        children: [
          { title: "Категории гражданских дел", href: "/g-cases-category" },
          { title: "Категории материалов", href: "/m-cases-category" }
        ],
      },
      {
        title: "Банк судебных решений",
        href: "/bsr"
      }
    ]
  }
  ];

  const columns = Object.keys(faqPages[0]);

  const [sortedBy, setSortedBy] = useState({
    column: columns[0],
    asc: false
  });

  const [query, setQuery] = useState("");

  function sort(rows) {
    const {column, asc} = sortedBy;
    return rows.sort((a, b) => {
      if (a[column].toString() > b[column].toString()) return asc ? -1 : 1;
      if (b[column].toString() > a[column].toString()) return asc ? 1 : -1;
      return 0;
    });
  }

  function filter(rows) {
    return rows.filter((row) =>
        columns.some(
            (column) => row[column].toLowerCase().indexOf(query.toLowerCase()) > -1
        )
    );
  }

  const sortFilter = () => sort(filter(faqPages));

  const sidebarLink = (item, key) => (
      <Disclosure key={key}>
        {({open}) => (
            <>
              <Disclosure.Button className={classNames("py-3 pl-2 w-full flex items-center rounded-md shrink-0 w-full hover:bg-slate-200", open ? 'bg-indigo-100 text-indigo-800' : 'bg-slate-50 text-slate-800')}>
                <div className="flex grow items-center">
                  <div className="flex flex-col items-start">
                    <p
                        className="font-medium text-sm flex flex-wrap justify-start items-center text-left mb-1">{item.title}</p>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3}
                     stroke="currentColor"
                     className={classNames(open ? 'rotate-90 transform fill-slate-600' : '', "w-3 h-3 mx-3 shrink-0")}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500 py-3">
                {item.children?.length > 0 ? item.children.map((item, key) => sidebarLink(item, key))
                : <p className="py-3 pl-2 w-full flex items-center rounded-md shrink-0 w-full hover:bg-slate-200">{item.title}</p>
                }
              </Disclosure.Panel>
            </>
        )}
      </Disclosure>
  )

  const searchQueryClearHandler = () => {
    setQuery("");
  };

  return (
      <ContentLayoutWithSidebar
          boxed="true"
          title="База знаний"
          breadcrumbs={breadcrumbs}
          header="База знаний"
          sidebarSize='medium'
          fullHeight="true"
      >
        <ContentLayoutWithSidebar.Sidebar >
          <div className='p-3'>
            {sortFilter().length > 0 ? sortFilter()
                    .map((item, key) =>
                        sidebarLink(item,key))
                : <p className="text-center py-6">Нет строк для отображения</p>
            }
          </div>
        </ContentLayoutWithSidebar.Sidebar>
        <ContentLayoutWithSidebar.Body color="white">
          <Card classname='mt-4 p-3'/>
        </ContentLayoutWithSidebar.Body>

      </ContentLayoutWithSidebar>
  );
};

export default Faq;
