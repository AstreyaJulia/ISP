import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useMemo, useState } from 'react';
import axios from '../../utils/axios';
import toast from 'react-hot-toast';
import Toast, { toastStyles } from '../../components/Toast';
import { setSession } from '../../utils/jwt';
import { FormProvider, RHFRadioGroupWithIcons, RHFTextField } from '../../components/hook-form';
import Typography from '../../components/Typography';
import BasicButton from '../../components/BasicButton';
import LoadingButton from '../../components/LoadingButton';
import { isDate, parseISO } from 'date-fns';

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
    setValue,
    handleSubmit,
    formState: { isSubmitting },
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
      <div className='flex flex-col gap-5 mt-5'>

      </div>
    </FormProvider>
  );

};

export default NewEditEventForm;