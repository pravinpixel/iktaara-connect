import { DialogContent, IconButton } from "@mui/material";
import { Dialog, DialogTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import dynamic from "next/dynamic";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { essentialApi } from "@/redux/services/essentialService";

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
  listingsView: BusinessTypeForm;
}

export default function BusinessEditPopup({
  handleClose,
  open,
  listingsView,
}: BusinessEditProps) {
  console.log(listingsView, "listingsView");
  const dispatch = useDispatch<AppDispatch>();
  const methods = useForm({
    defaultValues: {
      type: "about",
      recognitions: [{ name: "", description: "", date: "" }],
      ...listingsView,
    },
    mode: "onSubmit",
  });

  const type = methods.watch("type");
  const [data, setData] = useState(null);

  const essentialList = async (essentialData: string) => {
    try {
      const res = await dispatch(essentialApi({ essentialData })).unwrap();
      setData(res);
    } catch (error) {
    }
  };

  useEffect(() => {
    essentialList("country,state,city,location,business_type,instrument_type,");
  }, []);

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
            <ImageUpload name={"logo"} listingsView={listingsView} />
            {listingsView?.business_name && (
              <div className="pt-2">
                <h6 className="text-f24 font-semibold text-ik_bluegreydarken3">
                  {listingsView?.business_name}
                </h6>
              </div>
            )}
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
          <BusinessEditTabs
            type={type}
            setStep={methods.setValue}
            data={data}
            listingsView={listingsView}
          />
        </DialogContent>
      </FormProvider>
    </Dialog>
  );
}
