/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
// import { Stack } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { Grid } from "@mui/material";

const CustomRadio = dynamic(
  () => import("@/components/common/form-fields/RadioButton")
);
// const ImageComponent = dynamic(() => import("../ImageComponent"));
// const CustomContainer = dynamic(() => import("../Container"));

type EventsTitleProps = {
  filterCate: any;
};
const PaidData = (props: EventsTitleProps) => {
  const { filterCate } = props;
  const methods = useForm();
  return (
    // <CustomContainer>

    <FormProvider {...methods}>
      <Box className="border border-gray-300 p-4 rounded-lg mb-[20px]">
        <Grid container>
          <Grid item xs={6} className="flex items-center justify-end">
            <Typography className="font-normal text-f18 text-ik_bluegreydarken6 leading-6 ">
              {filterCate.title}
            </Typography>
          </Grid>
          <Grid item xs={6} className="flex items-center justify-end">
            <CustomRadio name="" label="" value={""} />
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
    // </CustomContainer>
  );
};

export default PaidData;
