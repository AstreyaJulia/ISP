import ContentLayoutBlank from "../layouts/ContentLayouts/ContentLayoutBlank";

const breadcrumbs = [{name: "Графики", href: "#", current: true}];

const Stat = () => {
    return (
        <ContentLayoutBlank header="Графики" breadcrumbs={breadcrumbs} title="Графики" boxed={false} >
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

export default Stat;