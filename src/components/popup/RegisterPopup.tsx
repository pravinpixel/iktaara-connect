import * as React from "react";

import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Grid, IconButton } from "@mui/material";
// import ImageComponent from "../ImageComponent";
import zustandStore from "@/utils/helpers/zustand";
import ImageComponent from "../common/form-fields/ImageComponent";
import RegsiterComponent from "../common/form-fields/RegsiterComponent";
// import RegsiterComponent from "../RegsiterComponent";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RegisterPopup() {
  const { popup, setPopup } = zustandStore();

  const handleClose = () => {
    setPopup(null);
  };

  const handleLoginPopup = () => {
    setPopup("login");
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={popup === "register"}
        onClose={handleClose}
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
                src="/assets/static/image_19.png"
                className="h-full"
                type={2}
              />
            </div>
          </Grid>
          <Grid item xs={6} sx={{ position: "relative", padding: "20px" }}>
            <IconButton
              onClick={handleClose}
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
                                    spacing={2}
                                >
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <InputField
                                                name="firstName"
                                                label="First Name"
                                                placeholder="First Name"
                                                type="text"
                                                sx={{ width: "100%" }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <InputField
                                                name="lastName"
                                                label="Last Name"
                                                placeholder="Last Name"
                                                type="text"
                                                sx={{ width: "100%" }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <InputField
                                                name="email"
                                                label="Email"
                                                placeholder="Email"
                                                type="email"
                                                sx={{ width: "100%" }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <InputField
                                                name="mobile"
                                                label="Mobile Number"
                                                placeholder="Mobile Number"
                                                type="text"
                                                sx={{ width: "100%" }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <InputField
                                                name="password"
                                                label="Password"
                                                placeholder="Password"
                                                type="password"
                                                sx={{ width: "100%" }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <InputField
                                                name="confirm_password"
                                                label="Confirm Password"
                                                placeholder="Confirm Password"
                                                type="password"
                                                sx={{ width: "100%" }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Box className="flex justify-end w-full ">
                                        <CustomButton type="submit" label="Register"></CustomButton>
                                    </Box>
                                </Stack>
                                <Typography
                                    className="text-ik_pink underline"
                                    onClick={() => handleLoginPopup()}
                                >
                                    Login Now
                                </Typography>
                            </FormProvider>
                        </Box> */}
            <RegsiterComponent
              handleLoginPopup={handleLoginPopup}
              ClassNames="px-[100px]"
            />
          </Grid>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
}
