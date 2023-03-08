import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Markdown from 'markdown-to-jsx';
import Card from '../../../Card';
import LoadingButton from '../../../LoadingButton';
import { FormProvider, RHFMultiCheckbox, RHFRadioGroup } from '../../../hook-form';
import BasicButton from '../../../BasicButton';
import { mdOptions } from '../../../hook-form/inputsMdSettings';

const Quiz = ({ steps, answers }) => {
  const [testResults, setTestResults] = useState(null);

  const questionSchema = Yup.lazy(() => {
    const shapes = {};

    // eslint-disable-next-line
    steps.map((step) =>
      step.type === 'single'
        ? (shapes[step.value] = Yup.string().nullable().required('Выберите ответ'))
        : (shapes[step.value] = Yup.array().min(1, 'Выберите хотя бы 1 ответ').required('Выберите ответы'))
    );
    return Yup.object().shape(shapes);
  });

  const methods = useForm({
    resolver: yupResolver(questionSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    setTestResults(null);
    return () => {
      setTestResults(null);
    };
    // eslint-disable-next-line
  }, []);

  /** Рендер результатов ответов
   * @param results
   * @param question
   * @returns {JSX.Element}
   */
  const renderResult = (results, question) => {
    if (Array.isArray(results[question.value])) {
      if (results[question.value].some((a) => a === false)) {
        return <p className="text-red-500 text-base font-medium mt-2">Неправильный ответ</p>;
      }
      return <p className="text-green-500 text-base font-medium mt-2">Верный ответ</p>;
    }
    return testResults[question.value] === true ? (
      <p className="text-green-500 text-base font-medium mt-2">Верный ответ</p>
    ) : (
      <p className="text-red-500 text-base font-medium mt-2">Неправильный ответ</p>
    );
  };

  const makeQuestion = (question) => (
    <Card key={question.value} classname='px-5 py-4 flex flex-col' variant='grayShadowless' >
      <div className="text-md font-medium text-gray-900">
        <Markdown options={{ ...mdOptions }}>{question.label}</Markdown>
      </div>
      <legend className="sr-only">{question.label}</legend>

      {question.type === 'single' ? (
        <RHFRadioGroup
          size="5"
          color="indigo"
          disabled={testResults !== null}
          name={question.value}
          options={question.answers}
          defaultValue={null}
        />
      ) : (
        <RHFMultiCheckbox
          size="5"
          color="indigo"
          disabled={testResults !== null}
          name={question.value}
          options={question.answers}
          defaultValue={[]}
        />
      )}
      {/* eslint-disable-next-line */}
      {testResults !== null ? renderResult(testResults, question) : ''}
    </Card>
  )

  const resetHandle = () => {
    setTestResults(null);
    reset();
  };

  const checkAnswers = (data) => {
    const keys = Object.keys(answers);
    const resultArray = {};
    keys.forEach((key1) => {
      if (Array.isArray(data[key1])) {
        const subArray = [];
        data[key1].map((item, key2) => subArray.push(answers[key1].includes(data[key1][key2])));
        if (answers[key1].filter((x) => !data[key1].includes(x)).length > 0) {
          subArray.push(data[key1].includes(answers[key1].filter((x) => !data[key1].includes(x))));
        }
        resultArray[key1] = subArray;
      } else {
        resultArray[key1] = data[key1] === answers[key1];
      }
    });
    return resultArray;
  };

  const onSubmit = (data) => {
    const check = checkAnswers(data);
    setTestResults(check);
  };

  return (
    <Card classname="p-4 mt-5">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">{steps.map((question) => makeQuestion(question))}</div>

        <div className="flex items-center gap-5 mt-5">
          <LoadingButton
            disabled={testResults !== null}
            type="submit"
            size='medium'
            isLoading={isSubmitting}
            variant='success'
            label={testResults !== null ? 'Готово' : 'Отправить'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </LoadingButton>

          <BasicButton onClick={resetHandle} type="button" shape='rounded' size='medium' variant='ghost'>
            {testResults !== null ? 'Заново' : 'Сбросить выбранное'}
          </BasicButton>

        </div>
      </FormProvider>
    </Card>
  );
};

Quiz.propTypes = {
  /** React Prop Types */
  steps: PropTypes.array.isRequired,
  answers: PropTypes.object.isRequired,
};

export default Quiz;
