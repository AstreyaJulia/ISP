import ContentLayoutBlank from "../layouts/ContentLayouts/ContentLayoutBlank";

const breadcrumbs = [{name: "Тестовая страница", href: "#", current: true}];

const Test = () => {
    return (
        <ContentLayoutBlank header="Тестовая страница" breadcrumbs={breadcrumbs} title="Тестовая страница" boxed={false} >
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

export default Test;