import { Dialog, Typography } from "@mui/material";
import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import ImageComponent from "../ImageComponent";
import CustomButton from "../form-fields/CustomButton";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ReviewSuccessProps {
  handleClose: () => void;
  open?: boolean;
}

export default function ReviewSuccessPopup({
  handleClose,
  open,
}: ReviewSuccessProps) {
  return (
    <Dialog
      open={open ?? false}
      TransitionComponent={Transition}
      keepMounted
      fullWidth={true}
      maxWidth={"sm"}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div className="absolute top-0 left-0">
        <ImageComponent
          src={"//assets/image/success-img.webp"}
          width={680}
          height={261}
          alt={"location"}
        />
      </div>
      <div className="min-h-[540px] h-full flex flex-col justify-center items-center relative z-10">
        <Typography
          sx={{
            fontSize: "50px",
            fontWeight: 600,
            textAlign: "center",
            background:
              "linear-gradient(90deg, #FF5252 5%, #2E1E5A 46%, #10BAC5 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Your feedback matters a lot to the business!
        </Typography>
        <p className="text-f24 font-medium text-ik_bluegreydarken3">
          Thank you!
        </p>
        <div className="flex justify-center pt-10">
          <CustomButton
            variant="contained"
            label={"Done"}
            className="text-f18 font-semibold text-ik_pink-foreground px-[70px] py-3"
            onClick={handleClose}
          />
        </div>
      </div>
    </Dialog>
  );
}
