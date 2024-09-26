import React from "react";

import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { Stack } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

const CustomRadio = dynamic(() => import("../form-fields/RadioButton"));
const ImageComponent = dynamic(() => import("../ImageComponent"));
// const CustomContainer = dynamic(() => import("../Container"));

type EventsTitleProps = {
  filterCate: any;
};
const FilterCategoryData = (props: EventsTitleProps) => {
  const { filterCate } = props;
  const methods = useForm();
  return (
    // <CustomContainer>

    <FormProvider {...methods}>
      <Box className="border border-gray-300 p-4 rounded-lg mb-[20px]">
        <Stack direction="row" spacing={2} alignItems={"center"}>
          {" "}
          <ImageComponent
            alt="calender"
            src={filterCate?.image}
            width={40}
            height={40}
          />
          <Typography className="font-normal text-f18 text-ik_bluegreydarken6 leading-6">
            {filterCate.title}
          </Typography>
          <CustomRadio name="" label="" value={""} />
        </Stack>
      </Box>
    </FormProvider>
    // </CustomContainer>
  );
};

export default FilterCategoryData;
