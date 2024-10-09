import { DialogContent, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import { Dialog, DialogTitle, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import dynamic from "next/dynamic";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "../form-fields/CustomButton";
import ImageComponent from "../ImageComponent";

const DatePickerField = dynamic(() => import("../form-fields/DatePickerField"));
const SelectField = dynamic(() => import("../form-fields/SelectField"));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AritistEnquirePopupProps {
  handleClose: () => void;
  open?: boolean;
}
export default function AritistEnquirePopup({
  handleClose,
  open,
}: AritistEnquirePopupProps) {
  const methods = useForm({
    defaultValues: {
      studio: "",
    },
  });

  const onSubmit = () => { };
  return (
    <Dialog
      open={open ?? false}
      TransitionComponent={Transition}
      keepMounted
      fullWidth={true}
      maxWidth={"sm"}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    //   sx={{ backgroundColor: "rgba(13, 4, 145, 0.6)" }}
    >
      <DialogTitle className="flex justify-center pt-0">
        <ImageComponent
          src={"/assets/logo/logo.svg"}
          width={158}
          height={81}
          alt={"iktaraa"}
        />
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
      <DialogContent className="pt-8">
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            background:
              "linear-gradient(90deg, #FF5252 0%, #2E1E5A 10%, #10BAC5 35%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Let’s Enquire
        </Typography>
        <p className="text-f18 font-normal text-ik_bluegreydarken3">
          Your enquiry will be sent directly to business to contact immediately!
        </p>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="pt-4">
              <SelectField
                label={"Type of Occasion"}
                name={"occasion"}
                options={[
                  { id: 10, name: "Corporate Event" },
                  { id: 20, name: "Corporate" },
                  { id: 30, name: "Corporate Event" },
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
              />
            </div>
            <div className="pt-5">
              <SelectField
                label={"City"}
                name={"city"}
                options={[
                  { id: 10, name: "Chennai" },
                  { id: 20, name: "Bengaluru" },
                  { id: 30, name: "Pune" },
                  { id: 30, name: "Hyderabad" },
                ]}
              />
            </div>
            <div className="pt-5 flex gap-4">
              <div className="w-full">
                <SelectField
                  label={"Budget"}
                  name={"Budget"}
                  options={[
                    { id: 10, name: "10k-25k" },
                    { id: 20, name: "25k-50k" },
                    { id: 30, name: "50k-75k" },
                    { id: 40, name: "75k-100k" },
                  ]}
                />
              </div>
              <div className="w-full">
                <SelectField
                  label={"Guest Count"}
                  name={"guest"}
                  options={[
                    { id: 10, name: "0-25" },
                    { id: 20, name: "25-50" },
                    { id: 30, name: "50-75" },
                    { id: 40, name: "75-100" },
                    { id: 30, name: "100-500" },
                  ]}
                />
              </div>
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
