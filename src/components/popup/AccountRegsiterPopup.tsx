import zustandStore from "@/utils/helpers/zustand";
import { Dialog, IconButton, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import RegsiterComponent from "../RegsiterComponent";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AccountRegsiterPopup = () => {
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
        fullWidth={true}
        maxWidth={"sm"}
        open={popup === "register"}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
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
        <RegsiterComponent handleLoginPopup={handleLoginPopup} ClassNames={"px-5"} />
      </Dialog>
    </React.Fragment>
  );
};

export default AccountRegsiterPopup;
