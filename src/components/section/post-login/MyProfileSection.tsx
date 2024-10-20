/* eslint-disable @typescript-eslint/no-explicit-any */

import { Stack } from "@mui/material";

import { Typography } from "@mui/material";

import { Box } from "@mui/material";
import React from "react";

import { FormProvider, useForm } from "react-hook-form";
import dynamic from "next/dynamic";

const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
const InputField = dynamic(
  () => import("@/components/common/form-fields/InputField")
);
// import InputField from "../form-fields/InputField";

const MyProfileSection = () => {
  const methods = useForm();
  return (
    <>
      <FormProvider {...methods}>
        {" "}
        <Box className="bg-ik_white mt-4 ml-[16px]  rounded-[8px] px-[28.88px] pt-[26.51px] pb-[41.51px] ">
          <Stack direction="row" spacing={2} alignItems={"center"}>
            <Box>
              <ImageComponent
                src="/assets/static/image_57.png"
                alt="Ramakrishna Paramahamsa"
                width={67}
                height={67}
              />
            </Box>
            <Box>
              <Typography className="text-f24 font-bold leading-[30px] text-ik_bluegreydarken3">
                My Profile
              </Typography>
              <Typography className="text-f18 font-normal leading-[26px] text-ik_bluegreydarken1">
               Space to keep your login information uptodate.
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box className="bg-ik_white mt-[16px] ml-[16px] rounded-[8px] py-[24.76px] px-[28.87px] mb-[60px]">
          <Box className="my-1">
            <Typography className="mb-[14.2px] text-f22 font-semibold leading-[28px] text-ik_bluegreydarken3">
              Account Information
            </Typography>
            <Box className="mb-[19px]">
              <InputField
                name="name"
                label="Name"
                placeholder="Ramakrishnan Paramahamsa"
                type="text"
                sx={{ width: "480px" }}
              />
            </Box>
            <Box className="mb-[19px]">
              <InputField
                name="email"
                label="Email"
                placeholder="ramakrishna@gmail.com"
                type="text"
                sx={{ width: "480px" }}
              />{" "}
            </Box>
            <Box className="mb-[8px]">
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
          <Box className="mt-[30px]">
            <Typography className="mt-2 mb-[16px] text-f22 font-semibold leading-[28px] text-ik_bluegreydarken3">
              Change Password
            </Typography>
            <Box className="mb-[19px]">
              {" "}
              <InputField
                name="password"
                label="Old Password"
                placeholder="Enter Password"
                type="password"
                sx={{ width: "480px" }}
              />
            </Box>
            <Box className="mb-[19px]">
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
