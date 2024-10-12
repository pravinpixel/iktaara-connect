/* eslint-disable @typescript-eslint/no-explicit-any */

import ImageComponent from "@/views/components/ImageComponent";

import { Stack } from "@mui/material";

import { Typography } from "@mui/material";

import { Box } from "@mui/material";
import React from "react";

import { FormProvider, useForm } from "react-hook-form";
import CustomButton from "../form-fields/CustomButton";
import { Grid } from "@mui/material";

const EventSection = () => {
  const methods = useForm();
  return (
    <>
      <FormProvider {...methods}>
        {" "}
        <Box className="bg-ik_white my-5 mx-2 rounded-[8px] p-3">
          <Grid container>
            <Grid item xs={8}>
              {" "}
              <Stack direction="row" alignItems={"center"} spacing={2}>
                <Box>
                  <ImageComponent
                    src="/images/static/image_69.png"
                    alt="Ramakrishna Paramahamsa"
                    width={67}
                    height={67}
                  />
                </Box>
                <Box>
                  <Typography className="text-f24 font-bold leading-[30px] text-ik_bluegreydarken3">
                    Events
                  </Typography>
                  <Typography className="text-f18 font-normal leading-[26px] text-ik_bluegreydarken1">
                    Showcase the world the skills you have...
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={4} className="flex justify-end items-center">
              {" "}
              <Box>
                <CustomButton label="Create Event" />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className="bg-ik_white my-5 mx-2 rounded-[8px] p-3">cc</Box>
      </FormProvider>
    </>
  );
};

export default EventSection;
