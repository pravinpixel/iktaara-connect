import { Box } from "@mui/material";
import React from "react";
import ImageComponent from "./ImageComponent";
import { FormProvider, useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { signIn, SignInOptions } from "next-auth/react";
import dynamic from "next/dynamic";
import { notify } from "@/utils/helpers/global-function";
import { useRouter } from "next/router";

const CustomButton = dynamic(() => import("./CustomButton"));
const InputField = dynamic(() => import("./InputField"));

interface LoginProps {
  handleRegsiterOpen: () => void;
  handleOtpOpen: () => void;
}

const LoginComponent = ({ handleRegsiterOpen, handleOtpOpen }: LoginProps) => {
  const methods = useForm<SignInOptions>({
    defaultValues: {
      redirect: false,
      email: "yemiri5909@craftapk.com",
      password: "yemiri5909@craftapk.com",
    },
  });
  const { handleSubmit } = methods;
  const { reload } = useRouter();

  const handleLogin = async (formValues?: SignInOptions) => {
    try {
      await signIn("sign-in", {
        redirect: false,
        ...formValues,
      }).then((res) => {
        if (res?.error) {
          throw new Error(res?.error as never);
        }
        reload();
      });
    } catch (error) {
      notify(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signIn("google", {
        redirect: false,
      }).then((res) => {
        if (res?.error) {
          throw new Error(res?.error as never);
        }
        reload();
      });
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
          onSubmit={handleSubmit(handleLogin)}
          spacing={2}
        >
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
                Account Login
              </Typography>
            </div>
          </div>
          <div className="flex justify-start w-full mt-0">
            <span className="text-f18 font-normal text-ik_bluegreydarken3">
              Signin with your account or create new account!
            </span>
          </div>
          <InputField
            name="email"
            label="Email ID / Phone number"
            placeholder="Email / Phone number"
            type="email"
            sx={{ width: "480px" }}
          />
          <InputField
            name="password"
            label="Password"
            placeholder="Enter Password"
            type="password"
            sx={{ width: "480px" }}
          />
          <Box className="flex justify-between items-center w-full">
            <div className="cursor-pointer">
              <span className="text-f16 font-normal text-ik_pink">
                Forgot Password?
              </span>
            </div>
            <CustomButton
              type="submit"
              className={"py-4 px-[69px] text-f18  font-semibold border-8"}
            >
              Login
            </CustomButton>
          </Box>
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
              onClick={() => handleOtpOpen()}
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

export default LoginComponent;
