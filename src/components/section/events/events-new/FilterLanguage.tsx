/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import dynamic from "next/dynamic";

import { FormProvider, useForm } from "react-hook-form";
import { Box } from "@mui/material";

const CustomCheckbox = dynamic(
  () => import("@/components/common/form-fields/CheckBox")
);

type EventsTitleProps = {
  filterLanguage: any;
};
const FilterLanguage = (props: EventsTitleProps) => {
  const { filterLanguage } = props;
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Box className="pb-[16px]">
 <CustomCheckbox label={filterLanguage.title} name={""} />
      </Box>
     
    </FormProvider>
  );
};

export default FilterLanguage;
