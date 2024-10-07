import React from 'react'
import { Slide } from '@mui/material';
import { Dialog } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import zustandStore from "@/utils/helpers/zustand";
import { IconButton } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import LoginComponent from '../LoginComponent';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AccountLoginPopup = () => {
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
        fullWidth={true}
        maxWidth={"sm"}
        open={popup === "login"}
        onClose={() => handleClose()}
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
        <LoginComponent handleRegsiterOpen={handleRegsiterOpen} />
      </Dialog>
    </React.Fragment>
  );
}

export default AccountLoginPopup