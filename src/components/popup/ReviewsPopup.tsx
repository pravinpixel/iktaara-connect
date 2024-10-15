import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Rating,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import { FormProvider, useForm } from "react-hook-form";
import {
  SelectStarLargeIcon,
  SelectStarTypeLargeIcon,
} from "@/utils/theme/svg";

import dynamic from "next/dynamic";

const ReviewSuccessPopup = dynamic(() => import("./ReviewSuccessPopup"));
const ImageComponent = dynamic(
  () => import("../common/form-fields/ImageComponent")
);
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

interface ReviewsPopupProps {
  handleClose: () => void;
  open?: boolean;
}
export default function ReviewsPopup({ handleClose, open }: ReviewsPopupProps) {
  const [value, setValue] = React.useState<number | null>(0);
  const [opensuccess, setOpensuccess] = React.useState(false);

  const handleClickOpensuccess = () => {
    setOpensuccess(true);
  };

  const handleClosesuccess = () => {
    setOpensuccess(false);
  };
  const methods = useForm({
    defaultValues: {
      studio: "",
    },
  });

  const onSubmit = () => {};
  return (
    <>
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
              "linear-gradient(90deg, #FF5252 0%, #2E1E5A 50%, #10BAC5 85%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Tell us about your experience
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
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="flex items-center gap-5 w-100">
                <div className="h-[122px] w-[122px] flex items-center  ">
                  <ImageComponent
                    src={"/assets/image/artist-logo.png"}
                    width={132}
                    height={132}
                    alt={"music-logo"}
                    className={"rounded-full"}
                  />
                </div>
                <div className="">
                  <h6 className="text-f24 font-semibold text-ik_bluegreydarken3">
                    Ramakrishna Paramahamsa
                  </h6>
                  <div className="flex gap-3">
                    <div className="flex gap-2">
                      <ImageComponent
                        src={"/assets/icons/maps-location.svg"}
                        width={20}
                        height={20}
                        alt={"location"}
                      />
                      <span className="text-16 font-normal text-ik_bluegreydarken3">
                        Chennai
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <ImageComponent
                        src={"/assets/icons/work-icons.svg"}
                        width={20}
                        height={20}
                        alt={"location"}
                      />
                      <span className="text-16 font-normal text-ik_bluegreydarken3">
                        Singer (13 Years in Business)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center py-3">
                <Rating
                  name="hover-feedback"
                  className="flex gap-4"
                  value={value}
                  precision={1}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  icon={<SelectStarLargeIcon fontSize="large" />}
                  emptyIcon={<SelectStarTypeLargeIcon fontSize="large" />}
                />
              </div>
              <div>
                <InputField
                  name="description"
                  placeholder="Please share your experience"
                  type="text"
                  rows={6}
                  multiline={true}
                  InputProps={{ variant: "customtextarea" }}
                />
              </div>
              <div className="flex justify-end pt-10">
                <CustomButton
                  type="submit"
                  variant="contained"
                  label={"Submit"}
                  className="text-f18 font-semibold text-ik_pink-foreground px-[51px] py-3"
                  onClick={handleClickOpensuccess}
                />
              </div>
            </form>
          </FormProvider>
        </DialogContent>
      </Dialog>
      {opensuccess && (
        <ReviewSuccessPopup
          handleClose={handleClosesuccess}
          open={opensuccess}
        />
      )}
    </>
  );
}
