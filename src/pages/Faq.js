import ContentLayoutBlank from "../layouts/ContentLayouts/ContentLayoutBlank";

const breadcrumbs = [{name: "База знаний", href: "#", current: true}];

const Faq = () => {
    return (
        <ContentLayoutBlank header="База знаний" breadcrumbs={breadcrumbs} title="База знаний" boxed={false} >
            <ContentLayoutBlank.Header>
                {/* Содержимое заголовка: кнопки и т.д. */}
            </ContentLayoutBlank.Header>
            <ContentLayoutBlank.Body>
                <div className="p-4">
                    {/* Содержимое страницы */}
                </div>
            </ContentLayoutBlank.Body>
        </ContentLayoutBlank>
    );
};

export default Faq;