import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import React, {useEffect, useMemo} from 'react';
import toast from "react-hot-toast";
import {FormProvider, RHFRadioGroupWithIcons, RHFTextField} from "../../../../components/hook-form";
import Typography from "../../../../components/Typography";
import {treeIcons} from "../../../../components/TreeView/workplacesTreeIcons";
import {makeArrayFromObj} from "../../../../utils/makeArrayFromObj";
import BasicButton from "../../../../components/BasicButton";
import LoadingButton from "../../../../components/LoadingButton";
import axios from "../../../../utils/axios";
import Toast, {toastStyles} from "../../../../components/Toast";
import {setSession} from "../../../../utils/jwt";


export default function NewNodeForm({isEdit, currentNode, getFunc, parentNode, IconValue}) {

    const NewNodeSchema = Yup.object().shape({
        name: Yup.string().required('Название обязательно для заполнения'),
        icon: Yup.string().required('Нужно выбрать значок'),
    });

    const defaultValues = useMemo(
        () => ({
            name: currentNode?.name ?? 'Узел',
            icon: currentNode?.icon ?? IconValue ?? 'na',
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
        formState: {isSubmitting},
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

    const onSubmit = async () => {
        const values = getValues();

        try {
            await axios.post(`/buildingstructure`, { ...values, affiliation: parentNode.id });
            /* Сохранение пользователя */
            reset();
            toast((t) => <Toast t={t} message={'Успешно добавлено!'}
                                type='success' />, { className: toastStyles });
        } catch (err) {
            const error = err.message && err.info ? `${err.message}: ${err.info}` : err.toString();
            if (err.code.toString() === '401') {
                setSession(null);
            }
            toast((t) => <Toast t={t} message={error} type='error' />, { className: toastStyles });
        }

        console.log({ ...values, affiliation: parentNode.id })
    };


    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-5 mt-5'>
                <RHFTextField name='name' placeholder='Название'
                              label={<Typography variant="label">Название</Typography>} direction='column'/>
                <RHFRadioGroupWithIcons name='icon'
                                        label={<Typography variant="label" classname='flex'>Значок</Typography>}
                                        defaultValue={IconValue} options={
                    makeArrayFromObj(treeIcons).map((item, key) => {
                        return {
                            id: key,
                            value: item.value,
                            label: item.label,
                            selectID: 'icon',
                            icon: item.icon
                        }
                    })
                }/>
                <div className='flex items-center justify-end gap-5 mt-5'>

                    <BasicButton size='medium' type='reset' variant='ghost' onClick={() => {reset()}}
                                 disabled={isSubmitting}>Отмена
                    </BasicButton>

                    <LoadingButton size='medium' type='submit' variant='primary'
                                   disabled={isSubmitting} loadingLabel='Сохранение ...' label='Сохранить' />

                </div>
            </div>
        </FormProvider>
    )

}