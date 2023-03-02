import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useMemo } from 'react';

export default function NewNodeForm({ isEdit, currentNode, getFunc, parentNode }) {

  const NewNodeSchema = Yup.object().shape({
    name: Yup.string().required('Название обязательно для заполнения'),
    icon: Yup.string().required('Нужно выбрать значок'),
    affiliation: Yup.number().required('Родительский узел обязателен для заполнения'),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentNode?.name ?? 'Узел',
      icon: currentNode?.icon ?? 'question',
      affiliation: currentNode?.affiliation ?? 0,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentNode],
  );

  const methods = useForm({
    resolver: yupResolver(NewNodeSchema),
    defaultValues,
  });

  const {
    reset,
    getValues,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = getValues();

  useEffect(() => {

    if (isEdit && currentNode) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentNode]);

}