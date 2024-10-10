import { DialogContent, IconButton, Tab } from "@mui/material";
import { Dialog, DialogTitle } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import ImageComponent from "../ImageComponent";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import BusinessAbout from "../business-edit/BusinessAbout";
import BusinessServices from "../business-edit/BusinessServices";
import BusinessContact from "../business-edit/BusinessContact";
import BusinessMedia from "../business-edit/BusinessMedia";
// import ImageUpload from "../ImageUpload";
// import { useForm } from "react-hook-form";

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

export default function BusinessEditPopup({
  handleClose,
  open,
}: BusinessEditProps) {
  // const { control } = useForm();
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
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
      <DialogTitle>
        <div className="flex flex-col items-center justify-center h-full">
          {/* <ImageUpload control={control} /> */}
          <ImageComponent
            src={"/assets/image/music-logo.png"}
            width={160}
            height={160}
            alt={"music-logo"}
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
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              className="w-full flex gap-2"
              variant="flexContainer"
            >
              <Tab
                label="About"
                value="1"
                className="text-f16 font-normal h-auto min-h-[53px] w-auto max-[145px] px-7"
              />
              <Tab
                label="Services"
                value="2"
                className="text-f16 font-normal h-auto min-h-[53px] w-auto max-[145px] px-7 "
              />
              <Tab
                label="Contact"
                value="3"
                className="text-f16 font-normal h-auto min-h-[53px] w-auto max-[145px] px-7 "
              />
              <Tab
                label="Media"
                value="4"
                className="text-f16 font-normal h-auto min-h-[53px] w-auto max-[145px] px-7 "
              />
            </TabList>
            <TabPanel value="1" className="px-0">
              <BusinessAbout />
            </TabPanel>
            <TabPanel value="2" className="px-0">
              <BusinessServices />
            </TabPanel>
            <TabPanel value="3" className="px-0">
              <BusinessContact />
            </TabPanel>
            <TabPanel value="4" className="px-0">
              <BusinessMedia />
            </TabPanel>
          </TabContext>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
