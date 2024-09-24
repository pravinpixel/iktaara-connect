import * as React from "react";

import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Grid, IconButton, Typography } from "@mui/material";
import ImageComponent from "../imageComponent";
import { Box } from "@mui/material";

import { FormProvider, useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import CustomButton from "../form-fields/CustomButton";
import InputField from "../form-fields/InputField";
import RegisterPopup from "./RegisterPopup";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
interface LoginDialogProps {
  handleClose: () => void;
  open?: boolean;
}
export default function LoginPopup({ handleClose, open }: LoginDialogProps) {
  const [openRegister, setOpenRegister] = React.useState(false);

  const handleClickOpen = () => {
    setOpenRegister(true);
    // handleClose();
  };

  const handleCloseRegister = () => {
    setOpenRegister(false);
  };
  const methods = useForm();
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
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
            <ImageComponent
              src="/images/static/image_19.png"
              alt="login"
              width={1078}
              height={1060}
            />
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
            <Box className="flex flex-col items-center justify-center h-full">
              <ImageComponent
                src={"assets/logo/logo.svg"}
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
                  onClick={handleClickOpen}
                >
                  Register Now
                </Typography>
              </FormProvider>
            </Box>
          </Grid>
        </Grid>
      </Dialog>
      {openRegister && (
        <RegisterPopup
          handleCloseRegister={handleCloseRegister}
          openRegister={openRegister}
        />
      )}
    </React.Fragment>
  );
}
