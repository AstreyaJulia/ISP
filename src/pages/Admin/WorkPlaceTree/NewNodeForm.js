import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { FormProvider, RHFRadioGroupWithIcons, RHFSelect, RHFTextField } from "../../../components/hook-form";
import Typography from "../../../components/Typography";
import { treeIcons } from "../../../components/TreeView/workplacesTreeIcons";
import { makeArrayFromObj } from "../../../utils/makeArrayFromObj";
import BasicButton from "../../../components/BasicButton";
import LoadingButton from "../../../components/LoadingButton";
import axios from "../../../utils/axios";
import Toast, { toastStyles } from "../../../components/Toast";
import { setSession } from "../../../utils/jwt";
import { classNames } from "../../../utils/classNames";


export default function NewNodeForm({ isEdit, currentNode, getFunc, parentNode, IconValue, onModalClose, affiliation }) {

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
      name: currentNode?.name ?? "",
      icon: currentNode?.icon ?? IconValue ?? "na",
      affiliation
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
    setValue,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  useEffect(() => {

    if (isEdit === 'true' && !["building", "buildingMedium", "buildingSmall", "subbuilding"].includes(IconValue)) getParentNodesSelect(currentNode?.affiliation);

    if (isEdit === 'true' && currentNode) {
      reset(defaultValues);
    }
    if (isEdit === 'false') {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentNode]);

  const onSubmit = async () => {
    const values = getValues();

    try {
      if (isEdit !== 'true') {

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
    } catch (err) {
      const error = err.message && err.info ? `${err.message}: ${err.info}` : err.toString();
      if (err.code.toString() === "401") {
        setSession(null);
      }
      toast((t) => <Toast t={t} message={error} type="error" />, { className: toastStyles });
    }
  };

  const getParentNodesSelect = async () => {
    if (isEdit === 'true' && ["building", "buildingMedium", "buildingSmall", "subbuilding"].some((icon) => IconValue !== icon)) {
      await axios
        .get(`http://dev/api/v1/buildingstructure/${currentNode?.affiliation}/affiliation`)
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
        .catch((err) => {
          const error = err.message && err.info ? `${err.message}: ${err.info}` : err.toString();
          if (err.code.toString() === "401") {
            setSession(null);
          }
          toast((t) => <Toast t={t} message={error} type="error" />, { className: toastStyles });
        });
    }
  };

  const onFocusParentNode = async () => {
    setLoadingParentNodes(true);
    await getParentNodesSelect(currentNode.affiliation).then(() => setLoadingParentNodes(false));
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5 mt-5">
        {isEdit === 'true' && !["building", "buildingMedium", "buildingSmall", "subbuilding"].includes(IconValue) ?
          <>
            <Typography variant="label" classname="mb-2">{parentNode?.name}</Typography>
            <div className={classNames(isEdit === 'true' ? "" : "hidden", "flex items-center gap-5 w-full")}>
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
          iconsSelectOptions(IconValue).map((item, key) => {
            return {
              id: key,
              value: item.value,
              label: item.label,
              selectID: "icon",
              icon: item.icon
            };
          })
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