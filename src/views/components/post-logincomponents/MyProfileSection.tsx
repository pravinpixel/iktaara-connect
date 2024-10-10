/* eslint-disable @typescript-eslint/no-explicit-any */

import { AutoCompleteSearch } from "@/components/common/AutoCompleteSearch";
import ImageComponent from "@/views/components/ImageComponent";

import { Stack, Tooltip } from "@mui/material";
import { Grid } from "@mui/material";

import { Typography } from "@mui/material";

import { Box } from "@mui/material";
import React from "react";
import SelectField from "../form-fields/SelectField";
import { FormProvider, useForm } from "react-hook-form";
import CustomButton from "../form-fields/CustomButton";
import { Button } from "@mui/material";

const MyProfileSection = () => {
  const methods = useForm();
  return (
    <>
      <FormProvider {...methods}>
        {" "}
        <Box className="bg-ik_white my-5 mx-2 rounded-[8px] p-3">
          <Stack direction="row" spacing={2}>
            <Box>
              <ImageComponent
                src="/images/static/image_57.png"
                alt="Ramakrishna Paramahamsa"
                width={67}
                height={67}
              />
            </Box>
            <Box>
              <Typography className="text-f24 font-bold leading-[30px] text-ik_bluegreydarken3">
                My Profile
              </Typography>
            </Box>
          </Stack>
        </Box>
      </FormProvider>
    </>
  );
};

export default MyProfileSection;
