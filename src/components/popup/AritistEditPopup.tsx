import { DialogContent, IconButton } from "@mui/material";
import { Dialog, DialogTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import dynamic from "next/dynamic";
import { FormProvider, useForm } from "react-hook-form";
import SingleUpload from "../common/form-fields/SingleUpload";
import { essentialApi } from "@/redux/services/essentialService";
import { useDispatch } from "react-redux";

const ArtistEditTabs = dynamic(
  () => import("../section/artist/artist_edit/ArtistEditTabs")
);
// const ImageComponent = dynamic(
//   () => import("../common/form-fields/ImageComponent")
// );

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

export default function ArtistEditPopup({
  handleClose,
  open,
}: BusinessEditProps) {
  const dispatch = useDispatch();
  const methods = useForm({
    defaultValues: {
      type: 0,
      recognitions: [
        { name: "", description: "", date: "" }, // Initial recognition field
      ],
      videoUrls: [{ url: "" }],
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
      console.log(error, "error");
    }
  };

  useEffect(() => {
    essentialList(
      "country,state,city,artist_type,genere,languages,instrument_type,event_type"
    );
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
            {/* <ImageComponent
              src={"/assets/image/artist-logo.png"}
              width={160}
              height={160}
              alt={"music-logo"}
            /> */}
            <SingleUpload name="profile_pic" />
            <div className="pt-2">
              <h6 className="text-f24 font-semibold text-ik_bluegreydarken3">
                Ramakrishna Paramahamsa
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
          <ArtistEditTabs type={type} setStep={methods.setValue} data={data} />
        </DialogContent>
      </FormProvider>
    </Dialog>
  );
}
