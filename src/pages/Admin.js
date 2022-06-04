import ContentLayoutBlank from "../layouts/ContentLayouts/ContentLayoutBlank";

const breadcrumbs = [{name: "Администрирование", href: "#", current: true}];

const Admin = () => {
    return (
        <ContentLayoutBlank header="Администрирование" breadcrumbs={breadcrumbs} title="Администрирование" boxed={false} >
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

export default Admin;