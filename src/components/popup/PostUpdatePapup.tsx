import {
  Box,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
} from "@mui/material";
import { Dialog } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import { FormProvider, useForm } from "react-hook-form";
// import InputField from "../form-fields/InputField";
// import CustomButton from "../form-fields/CustomButton";
// import ImageUpload from "../ImageUpload";

import dynamic from "next/dynamic";
import UploadDocumentField from "../common/form-fields/upload/MultiFileUpload";
import { artistShareUpdateApi } from "@/redux/services/artistService";
import { useDispatch } from "react-redux";
import { notify } from "@/utils/helpers/global-function";

const UploadFile = dynamic(() => import("../common/form-fields/UploadFile"));
const InputField = dynamic(() => import("../common/form-fields/InputField"));
const CustomButton = dynamic(
  () => import("../common/form-fields/CustomButton")
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface UpdateProps {
  handleClose: () => void;
  open?: boolean;
}

export default function PostUpdatePapup({ handleClose, open }: UpdateProps) {
  const methods = useForm();

  const { handleSubmit, control } = methods;
  const dispatch = useDispatch();
  const handleShareUpdate = async (values : any) => {
    console.log(values, "values");
        try {
      const res = await dispatch(artistShareUpdateApi(values)).unwrap();
      console.log(res, "tttt");
      notify(res);
      
    } catch (error) {
      console.log(error, "error");
    }
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
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        <h6 className="text-f24 font-semibold text-ik_bluegreydarken3">
          Post Update
        </h6>
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
        <section>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(handleShareUpdate)}>
              <div className="mb-3">
                <UploadDocumentField
                  control={control}
                  multiple={true}
                  name={"documents"}
                />
              </div>
              <div className="mb-3">
                <InputField
                  name="title"
                  label="Post Title"
                  placeholder="Enter Post Title"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <InputField
                  name="description"
                  label="Post Description"
                  placeholder="Enter Post Description"
                  type="text"
                  rows={5}
                  multiline={true}
                  InputProps={{ variant: "customtextarea" }}
                />
              </div>
              <Box className="flex justify-start w-full mt-6">
                <CustomButton
                  type="submit"
                  className="px-16 py-3.5"
                  label="Share"
                >
                  Share
                </CustomButton>
              </Box>
            </form>
          </FormProvider>
        </section>
      </DialogContent>
    </Dialog>
  );
}
