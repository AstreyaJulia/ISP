import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  FormProvider, RHFTextField
} from "../../components/hook-form";
import Typography from "../../components/Typography";
import BasicButton from "../../components/BasicButton";
import LoadingButton from "../../components/LoadingButton";
import axios from "../../utils/axios";
import RHFColorSelectRadioGroup from "../../components/hook-form/RHFColorSelectRadioGroup";
import apiErrorHelper from "../../utils/apiErrorHelper";


const NewCalendarLabelForm = ({ onCloseModal }) => {

  const NewLabelSchema = Yup.object().shape({
    title: Yup.string().required("Название обязательно для заполнения"),
    color: Yup.string().required('Нужно выбрать цвет метки')
  });

  const defaultValues = useMemo(
    () => ({
      title: "",
      color: ""
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const methods = useForm({
    resolver: yupResolver(NewLabelSchema),
    defaultValues
  });

  const {
    reset,
    getValues,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  const onSubmit = async () => {
    const values = getValues();

    await axios
      .post("/calendar/category", {color: values.color, title: values.title}).then((res)=> {
        reset();
        onCloseModal(res.data.data.id)
      })
      .catch((err) => apiErrorHelper(err));
  };

  const options = [
    { value: "indigo", label: "Indigo" },
    { value: "green", label: "Green" },
    { value: "cyan", label: "Cyan" },
    { value: "yellow", label: "Yellow" },
    { value: "red", label: "Red" },
    { value: "pink", label: "Pink" },
    { value: "blue", label: "Blue" },
    { value: "orange", label: "Orange" },
    { value: "teal", label: "Teal" }
  ];

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3 items-start pr-3">
          <RHFColorSelectRadioGroup name="color" label={<Typography variant="label">Цвет</Typography>} size="5"
                                    direction="column" options={options} />
          <RHFTextField name="title" placeholder="Метка" label={<Typography variant="label">Метка</Typography>}
                        direction="column" />
          <div className="flex items-center justify-end gap-5 w-full mt-5">
            <BasicButton size="medium" type="reset" variant="ghost" onClick={() => {
              reset();
              onCloseModal();
            }}
                         disabled={isSubmitting}>Отмена
            </BasicButton>

            <LoadingButton
              disabled={isSubmitting}
              size="medium" type="submit" variant="success"
              loadingLabel="Сохранение ..." label={"Создать"} />
          </div>
        </div>
      </FormProvider>
    </>
  );

};

export default NewCalendarLabelForm;

NewCalendarLabelForm.propTypes = {
  onCloseModal: PropTypes.func
};

NewCalendarLabelForm.defaultProps = {
  onCloseModal: () => null
};
