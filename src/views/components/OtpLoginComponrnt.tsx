/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import ImageComponent from "./ImageComponent";
import { FormProvider, useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { signIn } from "next-auth/react";
import { notify } from "@/utils/helpers/global-function";
// import CustomButton from "./form-fields/CustomButton";

const CustomButton = dynamic(() => import("./form-fields/CustomButton"));
const InputField = dynamic(() => import("./form-fields/InputField"));

interface OtpProps {
  handleRegsiterOpen: () => void;
}

const OtpLoginComponrnt = ({ handleRegsiterOpen }: OtpProps) => {
  const methods = useForm();
  const [mobile, setMobile] = useState<boolean>(false);
  const inputRefs: React.MutableRefObject<HTMLInputElement | null | any>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const handleInputBlur = (e: any, currentIdx: any) => {
    const nextIdx = currentIdx + 1;
    if (nextIdx <= inputRefs.length && inputRefs?.[currentIdx]?.current) {
      handleChange(e);
      if (inputRefs[currentIdx].current.value.length > 0) {
        inputRefs[nextIdx]?.current.focus();
      } else {
      }
    }
  };
  const numberToString = (number: any) => {
    const numberMap: any = {
      0: "one",
      1: "two",
      2: "three",
      3: "four",
      4: "five",
      5: "six",
    };

    return numberMap[number] as string;
  };

  const { handleSubmit } = methods;

  const handleOtpLogin = async () => {};

  const handleGoogleLogin = async () => {
    try {
      await signIn("google");
    } catch (error) {
      notify(error);
    }
  };

  return (
    <Box className="flex flex-col items-center justify-center h-full">
      <ImageComponent
        src={"/assets/logo/logo.svg"}
        width={158}
        height={60}
        alt={"iktaraa"}
      />
      <FormProvider {...methods}>
        <Stack
          direction={"column"}
          alignItems={"center"}
          component={"form"}
          onSubmit={handleSubmit(handleOtpLogin)}
          spacing={2}
        >
          {mobile == false ? (
            <>
              <div className="flex gap-2 justify-start items-center w-full pt-9">
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
                    OTP Login
                  </Typography>
                </div>
              </div>
              <InputField
                name="mobile"
                label="Mobile Number"
                placeholder="Enter Mobile Number"
                type="text"
                sx={{ width: "480px" }}
              />
              <Box className="flex justify-end items-center w-full">
                <CustomButton
                  type="submit"
                  label="Request OTP"
                  className={"py-4 px-[31px] text-f18  font-semibold border-8"}
                  onClick={() => {
                   setMobile(true);
                  }}
                >
                  Request OTP
                </CustomButton>
              </Box>
            </>
          ) : (
            <>
              <div className="flex gap-2 justify-start items-center w-full pt-9">
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
                      fontSize: "28px",
                      fontWeight: 600,
                      textAlign: "start",
                      background:
                        "linear-gradient(90deg, #FF5252 10%, #2E1E5A 46%, #10BAC5 90%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Verify Account
                  </Typography>
                </div>
              </div>
              <div className="flex justify-start w-full mt-0">
                <p className="text-f18 font-normal text-ik_bluegreydarken3">
                  Please enter the OTP sent to <span>{"92838 29380"}</span>.
                  <span role="button" className="text-ik_pink ml-2">
                    Edit
                  </span>
                </p>
              </div>
              <div
                id="otp"
                className="inputs flex flex-row justify-center mt-2 "
              >
                {inputRefs.map((ref, index) => {
                  //   const newValues: any = values;
                  return (
                    <input
                      key={index}
                      className="m-2 text-center font-normal text-f32 rounded-md border border-ik_bluegreydarken3 py-[17px] px-[16px] w-[66px] h-[74px]"
                      type="text"
                      max={1}
                      maxLength={1}
                      //   value={newValues[numberToString(index)]}
                      id={numberToString(index)}
                      name={numberToString(index)}
                      onChange={(e) => handleInputBlur(e, index)}
                      ref={ref}
                      // placeholder={newValues[numberToString(index)] ? "" : "x"}
                    />
                  );
                })}
              </div>
              <Box className="flex justify-between items-center w-full">
                <div className="cursor-pointer">
                  <span className="text-f16 font-normal text-ik_pink">
                    Resend OTP
                  </span>
                </div>
                <CustomButton
                  label="Verify & Login"
                  type="submit"
                  className={"py-4 px-[31px] text-f18 font-semibold border-8"}
                >
                  Verify & Login
                </CustomButton>
              </Box>
            </>
          )}
          <div className="text-center  w-full">
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
              <p className="mx-4 mb-0 text-center text-f16 font-normal text-ik_bluegreybluegrey">
                OR
              </p>
            </div>
          </div>
          <div className="w-full">
            <button
              className=" p-3 w-full border border-ik_bluegreylightens3 rounded-md mb-[20px]"
              onClick={handleGoogleLogin}
            >
              <div className="flex justify-center items-center gap-2">
                <ImageComponent
                  src={"/assets/icons/google-icons.svg"}
                  width={32}
                  height={32}
                  alt={"iktaraa"}
                />

                <span>Continue with Google</span>
              </div>
            </button>
            <button
              className=" p-3 w-full border border-ik_bluegreylightens3 rounded-md mb-[20px]"
              //   onClick={() => handleOtpOpen()}
            >
              <div className="flex justify-center items-center gap-2">
                <ImageComponent
                  src={"/assets/icons/iphone-icons.svg"}
                  width={32}
                  height={32}
                  alt={"iktaraa"}
                />

                <span>Continue with Phone</span>
              </div>
            </button>
          </div>
        </Stack>
        <Typography className="text-f16 font-normal text-ik_bluegreydarken1">
          {`Don't have an account?`}
          <span
            className="text-ik_pink cursor-pointer"
            onClick={() => handleRegsiterOpen()}
          >
            Register Now!
          </span>
        </Typography>
      </FormProvider>
    </Box>
  );
};

export default OtpLoginComponrnt;

