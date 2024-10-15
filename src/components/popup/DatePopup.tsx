import * as React from "react";

import { Slide } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";

import { TransitionProps } from "@mui/material/transitions";

import dynamic from "next/dynamic";
const DateEventPicker = dynamic(() => import("../DateEventPicker"));
const CustomButton = dynamic(() => import("../form-fields/CustomButton"));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialogTitle-root": {},
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
interface LocationDialogProps {
  handleClose: () => void;
  open?: boolean;
}

export default function DatePopup({ handleClose, open }: LocationDialogProps) {
  return (
    <>
      <BootstrapDialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open ?? false}
        TransitionComponent={Transition}
        onClose={handleClose}
        sx={{
          " & .MuiDialog-paper": {
            padding: "0px",
            width: "500px",
          },
        }}
      >
        {/* <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton> */}
        <DialogContent>
          {/* <ViewAllDialog /> */}
          <DateEventPicker />
        </DialogContent>
        <DialogActions>
          <CustomButton
            variant="primary-button"
            label="Cancel"
            onClick={handleClose}
          />
          <Button
            autoFocus
            onClick={handleClose}
            sx={{
              textTransform: "capitalize",
              width: "134px",
            }}
          >
            Done
          </Button>
        </DialogActions>
      </BootstrapDialog>
      {/* <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        sx={{
          " & .MuiDialog-paper": {
            padding: "32px",
          },
        }}
      ></Dialog> */}
    </>

    // </Box>
  );
}
