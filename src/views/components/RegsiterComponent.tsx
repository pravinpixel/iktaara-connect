import { Box, Typography } from "@mui/material";
import React from "react";
import ImageComponent from "./ImageComponent";
import { FormProvider, useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import dynamic from "next/dynamic";


const InputField = dynamic(() => import("./form-fields/InputField"));
const CustomButton = dynamic(() => import("./form-fields/CustomButton"));

interface RegsiterProps {
  handleLoginPopup: () => void;
  ClassNames: string;
}

const RegsiterComponent = ({ handleLoginPopup, ClassNames }: RegsiterProps) => {
  const methods = useForm();

  return (
    <Box className="flex flex-col items-center justify-center h-full">
      <ImageComponent
        src={"assets/logo/logo.svg"}
        width={158}
        height={60}
        alt={"iktaraa"}
      />
      <FormProvider {...methods}>
        <Stack
          direction={"column"}
          alignItems={"center"}
          component={"form"}
          spacing={2}
          className={ClassNames}
        >
          <div className="flex gap-2 justify-start items-center w-full pt-9 pl-4">
            <div className="cursor-pointer">
              <ImageComponent
                src={"/assets/icons/arrow_prev.svg"}
                width={8}
                height={16}
                alt={"arrow_prev"}
              />
            </div>
            <div>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                  textAlign: "start",
                  background:
                    "linear-gradient(90deg, #FF5252 10%, #2E1E5A 46%, #10BAC5 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Create Account
              </Typography>
            </div>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputField
                name="firstName"
                label="First Name"
                placeholder="Enter First Name"
                type="text"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                name="lastName"
                label="Last Name"
                placeholder="Enter Last Name"
                type="text"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                name="email"
                label="Email"
                placeholder="Enter Email ID"
                type="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                name="mobile"
                label="Mobile Number"
                placeholder="e.g.92239 23899"
                type="text"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                name="password"
                label="Password"
                placeholder="Enter Password"
                type="password"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                name="confirm_password"
                label="Confirm Password"
                placeholder="Enter Confirm Password"
                type="password"
                sx={{ width: "100%" }}
              />
            </Grid>
          </Grid>
          <Box className="flex justify-end items-center w-full pt-[28px]">
            <CustomButton
              type="submit"
              className={"py-4 px-[35px] text-f18  font-semibold border-8"}
              label="Create Account"
            >
              Create Account
            </CustomButton>
          </Box>
        </Stack>
        <Typography className="text-f16 font-normal text-ik_bluegreydarken1 pt-10">
          {`Already have account?`}
          <span
            className="text-ik_pink cursor-pointer"
            onClick={() => handleLoginPopup()}
          >
             Login
          </span>
        </Typography>
      </FormProvider>
    </Box>
  );
};

export default RegsiterComponent;
