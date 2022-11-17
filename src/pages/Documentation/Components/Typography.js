import React, { useEffect } from 'react';
import BasicPage from '../../pagesLayouts/BasicPage';
import PageHeader from '../../../components/PageHeader';
import Typography from '../../../components/Typography';
import Card from '../../../components/Card';
import useAuth from '../../../hooks/useAuth';

const TypographyPage = () => {
  const breadcrumbs = [
    { name: 'Компоненты', href: '', current: false },
    { name: 'Текстовые стили', href: '', current: true },
  ];

  /** Состояние пользователя */
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  return (
    <BasicPage title="Текстовые стили" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Текстовые стили" />
      <div className="mt-5">
        <div className="mt-5 border-t border-gray-200 dark:border-gray-700">
          <dl className="sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-700">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Заголовки</dt>
              <dd className="flex flex-col mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 gap-3">
                <Card classname="p-4 flex flex-col">
                  <Typography variant="h1">h1. Заголовок 1 уровня</Typography>
                  <code className="my-3">
                    <pre>{`<Typography variant='h1'>h1. Заголовок 1 уровня</Typography>`}</pre>
                  </code>
                </Card>
                <Card classname="p-4 flex flex-col">
                  <Typography variant="h2">h2. Заголовок 2 уровня</Typography>
                  <code className="my-3">
                    <pre>{`<Typography variant='h2'>h2. Заголовок 2 уровня</Typography>`}</pre>
                  </code>
                </Card>
                <Card classname="p-4 flex flex-col">
                  <Typography variant="h3">h3. Заголовок 3 уровня</Typography>
                  <code className="my-3">
                    <pre>{`<Typography variant='h3'>h3. Заголовок 3 уровня</Typography>`}</pre>
                  </code>
                </Card>
                <Card classname="p-4 flex flex-col">
                  <Typography variant="h4">h4. Заголовок 4 уровня</Typography>
                  <code className="my-3">
                    <pre>{`<Typography variant='h4'>h4. Заголовок 4 уровня</Typography>`}</pre>
                  </code>
                </Card>
                <Card classname="p-4 flex flex-col">
                  <Typography variant="h5">h5. Заголовок 5 уровня</Typography>
                  <code className="my-3">
                    <pre>{`<Typography variant='h5'>h5. Заголовок 5 уровня</Typography>`}</pre>
                  </code>
                </Card>
                <Card classname="p-4 flex flex-col">
                  <Typography variant="h6">h6. Заголовок 6 уровня</Typography>
                  <code className="my-3">
                    <pre>{`<Typography variant='h6'>h6. Заголовок 6 уровня</Typography>`}</pre>
                  </code>
                </Card>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Подзаголовки</dt>
              <dd className="flex flex-col mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 gap-3">
                <Card classname="p-4 flex flex-col">
                  <Typography variant="subtitle1">subtitle1. Подзаголовок 1 уровня</Typography>
                  <code className="my-3">
                    <pre>{`<Typography variant='subtitle1'>subtitle1. Подзаголовок 1 уровня</Typography>`}</pre>
                  </code>
                </Card>
                <Card classname="p-4 flex flex-col">
                  <Typography variant="subtitle2">subtitle2. Подзаголовок 2 уровня</Typography>
                  <code className="my-3">
                    <pre>{`<Typography variant='subtitle2'>subtitle2. Подзаголовок 2 уровня</Typography>`}</pre>
                  </code>
                </Card>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Значения</dt>
              <dd className="flex flex-col mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 gap-3">
                <Card classname="p-4 flex flex-col">
                  <Typography variant="caption">caption. Значение</Typography>
                  <code className="my-3">
                    <pre>{`<Typography variant='caption'>caption. Значение</Typography>`}</pre>
                  </code>
                </Card>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Текст</dt>
              <dd className="flex flex-col mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 gap-3">
                <Card classname="p-4 flex flex-col">
                  <Typography variant="body1">body1. Текст 1</Typography>
                  <code className="my-3">
                    <pre>{`<Typography variant='body1'>body1. Текст 1</Typography>`}</pre>
                  </code>
                </Card>
                <Card classname="p-4 flex flex-col">
                  <Typography variant="body2">body2. Текст 2</Typography>
                  <code className="my-3">
                    <pre>{`<Typography variant='body2'>body2. Текст 2</Typography>`}</pre>
                  </code>
                </Card>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </BasicPage>
  );
};

export default TypographyPage;
