/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import dynamic from "next/dynamic";

import { FormProvider, useForm } from "react-hook-form";

const CustomCheckbox = dynamic(() => import("../form-fields/CheckBox"));

type EventsTitleProps = {
  filterLanguage: any;
};
const FilterLanguage = (props: EventsTitleProps) => {
  const { filterLanguage } = props;
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <CustomCheckbox label={filterLanguage.title} name={""} />
    </FormProvider>
  );
};

export default FilterLanguage;
