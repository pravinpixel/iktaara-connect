import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import dynamic from "next/dynamic";

const BusinessAbout = dynamic(() => import("./BusinessAbout"));
const BusinessServices = dynamic(() => import("./BusinessServices"));
const BusinessContact = dynamic(() => import("./BusinessContact"));
const BusinessMedia = dynamic(() => import("./BusinessMedia"));

interface ArtistEditTabsProps {
  type: number;
  setStep: (name: string, value: number) => void;
  data: any;
  listingsView: BusinessTypeForm;
}

export default function BusinessEditTabs({
  type,
  setStep,
  data,
  listingsView,
}: ArtistEditTabsProps) {
  const [value, setValue] = React.useState(type.toString());

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setStep("type", Number(newValue));
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="Business Edit Tabs"
          className="w-full flex gap-4"
        >
          <Tab
            label="About"
            value="0"
            className="text-f16 font-normal h-auto min-h-[50px] w-auto max-[145px] px-7"
          />
          <Tab
            label="Services"
            value="1"
            className="text-f16 font-normal h-auto min-h-[50px] w-auto max-[145px] px-7"
          />
          <Tab
            label="Contact"
            value="2"
            className="text-f16 font-normal h-auto min-h-[50px] w-auto max-[145px] px-7"
          />
          <Tab
            label="Media"
            value="3"
            className="text-f16 font-normal h-auto min-h-[50px] w-auto max-[145px] px-7"
          />
        </TabList>

        <TabPanel value="0" className="px-0">
          <BusinessAbout essentialList={data} listingsView={listingsView} />
        </TabPanel>
        <TabPanel value="1" className="px-0">
          <BusinessServices />
        </TabPanel>
        <TabPanel value="2" className="px-0">
          <BusinessContact essentialList={data} />
        </TabPanel>
        <TabPanel value="3" className="px-0">
          <BusinessMedia />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

