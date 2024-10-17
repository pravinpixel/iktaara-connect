import { DialogContent, IconButton } from "@mui/material";
import { Dialog, DialogTitle } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import dynamic from "next/dynamic";
import { FormProvider, useForm } from "react-hook-form";


const BusinessEditTabs = dynamic(
  () => import("../section/business/business-edit/BusinessEditTabs")
);
const ImageUpload = dynamic(() => import("../common/form-fields/ImageUpload"));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface BusinessEditProps {
  handleClose: () => void;
  open?: boolean;
}

export default function BusinessEditPopup({ handleClose, open }: BusinessEditProps) {
  const { control } = useForm();
  const methods = useForm({
    defaultValues: {
      type: 0,
    },
    mode: "onSubmit",
  });

  const type = methods.watch("type");
  console.log(type, "type");

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
      <FormProvider {...methods}>
        <DialogTitle>
          <div className="flex flex-col items-center justify-center h-full">
            <ImageUpload
              control={control}
              type={true}
              typeupload={false}
              multiple={false}
              name={"logo"}
            />
            <div className="pt-2">
              <h6 className="text-f24 font-semibold text-ik_bluegreydarken3">
                Oasis Recording Studio
              </h6>
            </div>
          </div>
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
          <BusinessEditTabs type={type} setStep={methods.setValue} />
        </DialogContent>
      </FormProvider>
    </Dialog>
  );
}
