import * as React from "react";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Grid, IconButton } from "@mui/material";
import ImageComponent from "../ImageComponent";
import zustandStore from "@/utils/helpers/zustand";
import LoginComponent from "../LoginComponent";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LoginPopup() {
  const { setPopup, popup } = zustandStore();

  const handleRegsiterOpen = () => {
    setPopup("register");
  };

  const handleClose = () => {
    setPopup(null);
  };


  // const methods = useForm();


  // const { handleSubmit } = methods;

  // const handleLogin = async (formValues?: SignInOptions) => {
  //     try {
  //         await signIn("sign-in", {
  //             redirect: false,
  //             ...formValues,
  //         }).then((res) => {
  //             if (res?.ok) {
  //                 return res;
  //             }
  //             throw new Error(res?.error as never);
  //         });
  //     } catch (error) {
  //         // console.log(error, "error");
  //     }
  // };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={popup === "login"}
        onClose={() => handleClose()}
        TransitionComponent={Transition}
        sx={{
          "& .MuiPaper-root": {
            padding: "0px",
          },
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <div className="w-full h-full">
              <ImageComponent
                src="/images/static/image_19.png"
                className="h-full"
                type={2}
              />
            </div>
          </Grid>
          <Grid item xs={6} sx={{ position: "relative", padding: "20px" }}>
            <IconButton
              onClick={() => handleClose()}
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "inherit",
              }}
            >
              <CloseIcon />
            </IconButton>
            {/* <Box className="flex flex-col items-center justify-center h-full">
                            <ImageComponent
                                src={"/assets/logo/logo.svg"}
                                width={158}
                                height={60}
                                alt={"iktaraa"}
                                priority={true}
                                sx={{ marginTop: "20px" }}
                            />
                            <FormProvider {...methods}>
                                <Stack
                                    direction={"column"}
                                    alignItems={"center"}
                                    component={"form"}
                                    onSubmit={handleSubmit(handleLogin)}
                                    spacing={2}
                                >
                                    <InputField
                                        name="email"
                                        label="Email"
                                        placeholder="Email"
                                        type="email"
                                        sx={{ width: "480px" }}
                                    />
                                    <InputField
                                        name="password"
                                        label="Password"
                                        placeholder="Password"
                                        type="password"
                                        sx={{ width: "480px" }}
                                    />
                                    <Box className="flex justify-end w-full">
                                        <CustomButton type="submit">Login</CustomButton>
                                    </Box>
                                </Stack>
                                <Typography
                                    className="text-ik_pink cursor-pointer"
                                    onClick={()=>handleRegsiterOpen()}
                                >
                                    Register Now
                                </Typography>
                            </FormProvider>
                        </Box>  */}
            <LoginComponent handleRegsiterOpen={handleRegsiterOpen} />
          </Grid>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
}
