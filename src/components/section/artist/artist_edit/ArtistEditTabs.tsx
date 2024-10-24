import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import dynamic from "next/dynamic";

const ArtistAbout = dynamic(() => import("./ArtistAbout"));
const ArtistRecognitions = dynamic(() => import("./ArtistRecognitions"));
const ArtistContact = dynamic(() => import("./ArtistContact"));
const ArtistMedia = dynamic(() => import("./ArtistMedia"));

interface ArtistEditTabsProps {
  type?: number;
  setStep?: (name: string, value: string) => void;
  data?: any;
  artistDetailView?: ArtistType;
}

export default function ArtistEditTabs({
  type,
  setStep,
  data,
  artistDetailView,
}: ArtistEditTabsProps) {
  const [value, setValue] = React.useState(type.toString());

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setStep("type", newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="Artist Edit Tabs"
          className="w-full flex gap-4"
        >
          <Tab
            label="About"
            value="about"
            className="text-f16 font-normal h-auto min-h-[50px] w-auto max-[145px] px-7"
          />
          <Tab
            label="Recognitions"
            value="recognition"
            className="text-f16 font-normal h-auto min-h-[50px] w-auto max-[145px] px-7"
          />
          <Tab
            label="Contact"
            value="contact"
            className="text-f16 font-normal h-auto min-h-[50px] w-auto max-[145px] px-7"
          />
          <Tab
            label="Media"
            value="media"
            className="text-f16 font-normal h-auto min-h-[50px] w-auto max-[145px] px-7"
          />
        </TabList>

        <TabPanel value="about" className="px-0">
          <ArtistAbout essentialList={data} />
        </TabPanel>
        <TabPanel value="recognition" className="px-0">
          <ArtistRecognitions />
        </TabPanel>
        <TabPanel value="contact" className="px-0">
          <ArtistContact />
        </TabPanel>
        <TabPanel value="media" className="px-0">
          <ArtistMedia />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
