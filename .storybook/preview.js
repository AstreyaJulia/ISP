import "../src/scss/App.scss";

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: 'White',
        values: [
            {
                name: 'Slate',
                value: '#F1F5F9',
            },
            {
                name: 'Dark Slate',
                value: '#334155',
            },
        ],
    },
    viewMode: 'docs',
    previewTabs: {
        canvas: {hidden: true},
    },
};
