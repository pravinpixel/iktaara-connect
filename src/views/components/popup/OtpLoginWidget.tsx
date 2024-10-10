import * as React from "react";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Grid, IconButton } from "@mui/material";
import ImageComponent from "../ImageComponent";
import zustandStore from "@/utils/helpers/zustand";
import OtpLoginComponrnt from "../OtpLoginComponrnt";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OtpLoginWidget = () => {
    const { setPopup, popup } = zustandStore();

    const handleRegsiterOpen = () => {
      setPopup("register");
    };

    const handleClose = () => {
      setPopup(null);
    };
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={popup === "otp"}
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

            <OtpLoginComponrnt
              handleRegsiterOpen={handleRegsiterOpen}
            />
          </Grid>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
};

export default OtpLoginWidget;
