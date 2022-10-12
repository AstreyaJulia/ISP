import React from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";

const Faq = () => {
  const breadcrumbs = [{ name: "База знаний", href: "", current: true }];

  const faqPages = [{
    title: "Категории дел",
    href: "",
    children: [
      { title: "Категории гражданских дел", href: "/g-cases-category" },
      { title: "Категории материалов", href: "/m-cases-category" }
    ]
  }
  ];

  return (<BasicPage title="База знаний" className="main-content max-w-6xl mx-auto px-3">
    <PageHeader pages={breadcrumbs} header="База знаний" />
  </BasicPage>);
};

export default Faq;
