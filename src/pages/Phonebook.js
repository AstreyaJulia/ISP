import ContentLayoutBlank from "../layouts/ContentLayouts/ContentLayoutBlank";

const breadcrumbs = [{name: "Телефонный справочник", href: "#", current: true}];

const Phonebook = () => {
    return (
        <ContentLayoutBlank header="Телефонный справочник" breadcrumbs={breadcrumbs} title="Телефонный справочник" boxed={false} >
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

export default Phonebook;