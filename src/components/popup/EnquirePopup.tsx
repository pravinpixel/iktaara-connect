/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, DialogTitle, IconButton, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { DialogContent } from "@mui/material";

import { FormProvider, useForm } from "react-hook-form";
import dynamic from "next/dynamic";

const SelectField = dynamic(() => import("../common/form-fields/SelectField"));
const CustomButton = dynamic(
  () => import("../common/form-fields/CustomButton")
);
const DatePickerField = dynamic(
  () => import("../common/form-fields/DatePickerField")
);
const TimePickerField = dynamic(
  () => import("../common/form-fields/TimePickerField")
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface EnquirePopupProps {
  handleClose: () => void;
  open?: boolean;
}

export default function EnquirePopup({ handleClose, open }: EnquirePopupProps) {
  const methods = useForm({
    defaultValues: {
      studio: "",
    },
  });

  const onSubmit = () => {};
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
      <DialogTitle
        sx={{
          fontSize: "28px",
          fontWeight: 600,
          background:
            "linear-gradient(90deg, #FF5252 0%, #2E1E5A 25%, #10BAC5 40%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Let’s Enquire
      </DialogTitle>

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
      <DialogContent className="pt-0">
        <p className="text-f18 font-normal text-ik_bluegreydarken3">
          Your enquiry will be sent directly to business to contact immediately!
        </p>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="pt-8">
              <SelectField
                label={"Studio Purpose"}
                name={"studio"}
                options={[
                  { id: 10, name: "Ten" },
                  { id: 20, name: "Twenty" },
                  { id: 30, name: "Thirty" },
                ]}
              />
            </div>
            <div className="pt-5">
              <DatePickerField
                name="date"
                label="Date"
                fieldProps={{
                  placeholder: "Date",
                }}
                views={["year", "month"]}
              />
            </div>
            <div className="pt-5">
              <TimePickerField label={"Time"} name={"time"} />
            </div>
            <div className="pt-5">
              <SelectField
                label={"Expected People Count"}
                name={"studio"}
                options={[
                  { id: 10, name: "0-25" },
                  { id: 20, name: "25-50" },
                  { id: 30, name: "50-75" },
                  { id: 30, name: "75-100" },
                ]}
              />
            </div>
            <div className="flex justify-end pt-10">
              <CustomButton
                variant="contained"
                label={"Continue"}
                className="text-f18 font-semibold text-ik_pink-foreground px-[51px] py-4"
              />
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
