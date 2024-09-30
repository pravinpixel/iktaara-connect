/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, DialogTitle, IconButton, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
import { DialogContent } from '@mui/material';
import SelectField from '../form-fields/SelectField';
import { FormProvider, useForm } from 'react-hook-form';
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

    const onSubmit = (data: any) => {
      console.log(data);
    };
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
        <p>
          Your enquiry will be sent directly to business to contact immediately!
        </p>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className='pt-8'>
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
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
