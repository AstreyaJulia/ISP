import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useMemo } from 'react';
import { isDate, parseISO } from 'date-fns';
import PropTypes from "prop-types";
import { FormProvider, } from '../../components/hook-form';

const NewEditEventForm = ({ currentEvent, isEdit }) => {

  const NewEventSchema = Yup.object().shape({
    title: Yup.string().required('Название обязательно для заполнения'),
    calendar: Yup.string().required('Нужно выбрать календарь'),
    start: Yup.date()
      .transform(value => {
        if (value !== '' && !isDate(value)) {
          return parseISO(value);
        }
        if (value !== '' && isDate(value)) {
          return value;
        }
        return null;
      }).required('Дата начала события обязательна для заполнения'),
    end: Yup.date()
      .transform(value => {
        if (value !== '' && !isDate(value)) {
          return parseISO(value);
        }
        if (value !== '' && isDate(value)) {
          return value;
        }
        return null;
      }).required('Дата окончания события обязательна для заполнения'),
    allDay: Yup.boolean(),
    creator: Yup.number(),
    users: Yup.array().nullable(),
    description: Yup.string(),


  });

  const defaultValues = useMemo(
    () => ({
      title: currentEvent?.name ?? '',
      calendar: currentEvent?.calendar ?? '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentEvent],
  );

  const methods = useForm({
    resolver: yupResolver(NewEventSchema),
    defaultValues,
  });

  const {
    reset,
    getValues,
    handleSubmit
  } = methods;

  useEffect(() => {

    if (isEdit && currentEvent) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentEvent]);

  const onSubmit = async () => {
    const values = getValues();

    console.log(values);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-5 mt-5' />
    </FormProvider>
  );

};

export default NewEditEventForm;

NewEditEventForm.propTypes = {
  currentEvent: PropTypes.object,
  isEdit: PropTypes.bool
}