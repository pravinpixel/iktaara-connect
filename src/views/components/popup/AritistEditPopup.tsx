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
import ArtistAbout from "../artist_edit/ArtistAbout";
import ArtistRecognitions from "../artist_edit/ArtistRecognitions";
import ArtistContact from "../artist_edit/ArtistContact";
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

export default function AritistEditPopup({ handleClose, open }: BusinessEditProps) {
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
            src={"/assets/image/artist-logo.png"}
            width={160}
            height={160}
            alt={"music-logo"}
          />
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
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              className="w-full flex gap-4 "
            >
              <Tab
                label="About"
                value="1"
                className="text-f16 font-normal h-auto min-h-[50px] w-auto max-[145px] px-7 "
              />
              <Tab
                label="Recognitions"
                value="2"
                className="text-f16 font-normal h-auto min-h-[50px] w-auto max-[145px] px-7"
              />
              <Tab
                label="Contact"
                value="3"
                className="text-f16 font-normal h-auto min-h-[50px] w-auto max-[145px] px-7 "
              />
            </TabList>
            <TabPanel value="1" className="px-0">
              <ArtistAbout />
            </TabPanel>
            <TabPanel value="2" className="px-0">
              <ArtistRecognitions />
            </TabPanel>
            <TabPanel value="3" className="px-0">
              <ArtistContact />
            </TabPanel>
          </TabContext>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
