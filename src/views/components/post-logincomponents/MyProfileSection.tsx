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
import InputField from "../form-fields/InputField";

const MyProfileSection = () => {
  const methods = useForm();
  return (
    <>
      <FormProvider {...methods}>
        {" "}
        <Box className="bg-ik_white my-5 mx-2 rounded-[8px] p-3">
          <Stack direction="row" spacing={2} alignItems={"center"}>
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
        <Box className="bg-ik_white my-5 mx-2 rounded-[8px] p-3">
          <Box className="my-1">
            <Typography className="my-2 text-f22 font-semibold leading-[28px] text-ik_bluegreydarken3">
              Account Information
            </Typography>
            <Box className="mb-3">
              <InputField
                name="name"
                label="Name"
                placeholder="Ramakrishnan Paramahamsa"
                type="text"
                sx={{ width: "480px" }}
              />
            </Box>
            <Box className="mb-3">
              <InputField
                name="email"
                label="Email"
                placeholder="ramakrishna@gmail.com"
                type="text"
                sx={{ width: "480px" }}
              />{" "}
            </Box>
            <Box className="mb-3">
              {" "}
              <InputField
                name="phone"
                label="Pnone Number"
                placeholder="+91 91289 12989"
                type="text"
                sx={{ width: "480px" }}
              />
            </Box>
          </Box>
          <Box className="my-1">
            <Typography className="my-2 text-f22 font-semibold leading-[28px] text-ik_bluegreydarken3">
              Change Password
            </Typography>
            <Box className="mb-3">
              {" "}
              <InputField
                name="password"
                label="Old Password"
                placeholder="Enter Password"
                type="password"
                sx={{ width: "480px" }}
              />
            </Box>
            <Box className="mb-2">
              {" "}
              <InputField
                name="password"
                label="New Password"
                placeholder="Enter Password"
                type="password"
                sx={{ width: "480px" }}
              />
            </Box>

            <Box className="mb-3">
              {" "}
              <InputField
                name="password"
                label="Retype New Password"
                placeholder="Enter Password"
                type="password"
                sx={{ width: "480px" }}
              />
            </Box>
          </Box>
        </Box>
      </FormProvider>
    </>
  );
};

export default MyProfileSection;
