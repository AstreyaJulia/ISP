import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { FormProvider, RHFRadioGroupWithIcons, RHFSelect, RHFTextField } from "../../../components/hook-form";
import Typography from "../../../components/Typography";
import { treeIcons } from "../../../components/TreeView/workplacesTreeIcons";
import { makeArrayFromObj } from "../../../utils/makeArrayFromObj";
import BasicButton from "../../../components/BasicButton";
import LoadingButton from "../../../components/LoadingButton";
import axios from "../../../utils/axios";
import Toast, { toastStyles } from "../../../components/Toast";
import { classNames } from "../../../utils/classNames";
import apiErrorHelper from "../../../utils/apiErrorHelper";


export default function NewNodeForm({ isEdit, currentNode, getFunc, parentNode, IconValue, onModalClose }) {

  const [loadingParentNodes, setLoadingParentNodes] = useState(false);
  const [parentNodesOptions, setParentNodesOptions] = useState([]);

  const iconsSelectOptions = (icon) => {
    if (["building", "buildingMedium", "buildingSmall", "subbuilding"].includes(icon)) {
      return makeArrayFromObj(treeIcons).slice(1, 5);
    } if (["floor", "stairs"].includes(icon)) {
      return makeArrayFromObj(treeIcons).slice(5, 7);
    } if (["door", "hammer", "balance"].includes(icon)) {
      return makeArrayFromObj(treeIcons).slice(7, 10);
    } if (["desktop"].includes(icon)) {
      return makeArrayFromObj(treeIcons).slice(11, 12);
    }
      return makeArrayFromObj(treeIcons)
  };

  const NewNodeSchema = Yup.object().shape({
    name: Yup.string().required("Название обязательно для заполнения"),
    icon: Yup.string().required("Нужно выбрать значок"),
    affiliation: Yup.string()
  });

  const defaultValues = useMemo(
    () => ({
      name: isEdit ? currentNode?.name : "",
      icon: isEdit ? currentNode?.icon : IconValue,
      // eslint-disable-next-line
      affiliation: isEdit ? parentNode?.id : !isEdit ? currentNode?.id : ''
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentNode]
  );

  const methods = useForm({
    resolver: yupResolver(NewNodeSchema),
    defaultValues
  });

  const {
    reset,
    getValues,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  useEffect(() => {

    if (isEdit && !["building", "buildingMedium", "buildingSmall", "subbuilding"].includes(IconValue) && parentNode) getParentNodesSelect(currentNode?.affiliation);

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
      if (!isEdit) {
        await axios.post(`/buildingstructure`, values);
      } else {
        console.log(values)
        await axios.patch(`/buildingstructure`, { ...values, id: currentNode.id });
      }

      /* Сохранение пользователя */
      reset();
      onModalClose();
      getFunc();
      toast((t) => <Toast t={t} message={"Успешно добавлено!"}
                          type="success" />, { className: toastStyles });
    } catch (err) {apiErrorHelper(err)}
  };

  const getParentNodesSelect = async () => {
    if (isEdit && ["building", "buildingMedium", "buildingSmall", "subbuilding"].some((icon) => IconValue !== icon)) {
      await axios
        .get(`/buildingstructure/${currentNode?.affiliation}/affiliation`)
        .then((res) => {
          const parentNodesList = res.data.data;
          const parentNodesOptions = parentNodesList.map((item) => ({
            "id": item.id,
            "value": item.id,
            "label": item.name,
            "selectID": "affiliation"
          }));
          /* Получаем список род. узлов, очищаем, обрабатываем и пишем в стейт */
          setParentNodesOptions([]);
          setParentNodesOptions(parentNodesOptions);
        })
        .catch((err) => apiErrorHelper(err));
    }
  };

  const onFocusParentNode = async () => {
    setLoadingParentNodes(true);
    if (parentNode) await getParentNodesSelect(parentNode?.id).then(() => setLoadingParentNodes(false));
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5 mt-5">
        <Typography variant="label" classname="mb-2">{!isEdit && `В узел ${currentNode?.name}`}</Typography>
        {isEdit && !["building", "buildingMedium", "buildingSmall", "subbuilding"].includes(IconValue) ?
          <>

            <div className={classNames(isEdit ? "" : "hidden", "flex items-center gap-5 w-full")}>
              <RHFSelect name="affiliation"
                         onChange={() => null}
                         onFocus={() => onFocusParentNode()}
                         noOptionsMessage={loadingParentNodes ? "Загрузка..." : "Результатов не найдено"}
                         placeholder="Выберите узел"
                         options={parentNodesOptions}
              />
            </div>
          </>
          : null}
        <RHFTextField name="name" placeholder="Название"
                      label={<Typography variant="label">Название</Typography>} direction="column" />
        <RHFRadioGroupWithIcons name="icon"
                                label={<Typography variant="label" classname="flex">Значок</Typography>}
                                defaultValue={IconValue} options={
          iconsSelectOptions(IconValue).map((item, key) => ({
              id: key,
              value: item.value,
              label: item.label,
              selectID: "icon",
              icon: item.icon
            }))
        } />
        <div className="flex items-center justify-end gap-5 mt-5">

          <BasicButton size="medium" type="reset" variant="ghost" onClick={() => {
            reset();
            onModalClose();
          }}
                       disabled={isSubmitting}>Отмена
          </BasicButton>

          <LoadingButton size="medium" type="submit" variant="primary"
                         disabled={isSubmitting} loadingLabel="Сохранение ..." label="Сохранить" />

        </div>
      </div>
    </FormProvider>
  );

}

NewNodeForm.propTypes = {
  isEdit: PropTypes.bool,
  currentNode: PropTypes.object,
  getFunc: PropTypes.func,
  parentNode: PropTypes.object,
  IconValue: PropTypes.string,
  onModalClose: PropTypes.func
}