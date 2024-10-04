import React from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";

import { Typography } from "@mui/material";
import PaidData from "./PaidData";

import { FormProvider, useForm } from "react-hook-form";
import InputField from "../form-fields/InputField";

export default function StepperContentTwo() {
  const methods = useForm();
  const location = [
    {
      id: 1,
      title: "Bank Transfer",
      image: "/images/static/image_26.png",
    },
    {
      id: 2,
      title: "UPI",
      image: "/images/static/image_26.png",
    },
  ];
  return (
    <>
      <FormProvider {...methods}>
        {" "}
        <Box className="p-6 ">
          <Typography className="text-f16 font-normal leading-5 text-ik_bluegreybluegrey pb-2">
            Setup how you’d like to receive payments
          </Typography>
          <Grid container spacing={2} className="max-w-[750px]">
            {" "}
            {location?.map((item) => (
              <Grid item xs={6} key={item.id}>
                <PaidData filterCate={item} />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={2} className="max-w-[750px]">
            {" "}
            <Grid item xs={6}>
              <InputField
                name="name"
                label="UPI ID (Payment to get transferred)"
                placeholder="name@okhcbank"
                type="text"
              />
            </Grid>
          </Grid>
        </Box>
      </FormProvider>
    </>
  );
}
