import * as React from "react";

import { Slide } from "@mui/material";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { TransitionProps } from "@mui/material/transitions";

import { Divider } from "@mui/material";
const EventFilterData = dynamic(() => import("../events-new/EventFilterData"));

import dynamic from "next/dynamic";

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

export default function EventFilterPopup({
  handleClose,
  open,
}: LocationDialogProps) {
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
            width: "800px",
            maxWidth: "800px",
          },
        }}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          className="font-semibold text-f22 text-ik_bluegreydarken3 leading-7"
        >
          Filter By
        </DialogTitle>
        <Divider sx={{ padding: "0px" }} />
        <IconButton
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
        </IconButton>
        <DialogContent
          sx={{
            " &.MuiDialogContent-root": {
              paddingLeft: "0px!important",
              paddingTop: "0px!important",
              paddingBottom: "0px!important",
            },
          }}
        >
          <EventFilterData />
          {/* <DialogActions>
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
          </DialogActions> */}
        </DialogContent>
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
