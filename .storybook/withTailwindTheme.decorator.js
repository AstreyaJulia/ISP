import { useEffect } from 'react';

export const DEFAULT_THEME = 'light';

export const withTailwindTheme = (Story, context) => {
  const { theme } = context.globals;

  const classnames = {
    light: 'bg-gray-100',
    dark: 'bg-gray-800'
  }

  useEffect(() => {
    const element = window.document.body;

    // Set the "data-mode" attribute on the iFrame html tag
    element.setAttribute('class', `${theme} ${classnames[theme]}` || `${DEFAULT_THEME} ${classnames[DEFAULT_THEME]}`);
  }, [theme]);

  return <div className='p-3 max-w-4xl mx-auto'><Story/></div> ;
};