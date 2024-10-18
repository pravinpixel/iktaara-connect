// import React from "react";

// import TabPanel from "@mui/lab/TabPanel";
// import { Box, Tab } from "@mui/material";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import dynamic from "next/dynamic";

// const ArtistAbout = dynamic(() => import("./ArtistAbout"));
// const ArtistRecognitions = dynamic(() => import("./ArtistRecognitions"));
// const ArtistContact = dynamic(() => import("./ArtistContact"));
// export default function ArtistEditTabs({ step = 0 }: { step: number }) {
//   // const { control } = useForm();
//   const [value, setValue] = React.useState("1");

//   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%", typography: "body1" }}>
//       <TabContext value={value}>
//         <TabList
//           onChange={handleChange}
//           aria-label="lab API tabs example"
//           className="w-full flex gap-4 "
//         >
//           <Tab
//             label="About"
//             value="1"
//             className="text-f16 font-normal h-auto min-h-[50px] w-auto max-[145px] px-7 "
//           />
//           <Tab
//             label="Recognitions"
//             value="2"
//             className="text-f16 font-normal h-auto min-h-[50px] w-auto max-[145px] px-7"
//           />
//           <Tab
//             label="Contact"
//             value="3"
//             className="text-f16 font-normal h-auto min-h-[50px] w-auto max-[145px] px-7 "
//           />
//         </TabList>
//         <TabPanel value="1" className="px-0">
//           <ArtistAbout />
//         </TabPanel>
//         <TabPanel value="2" className="px-0">
//           <ArtistRecognitions />
//         </TabPanel>
//         <TabPanel value="3" className="px-0">
//           <ArtistContact />
//         </TabPanel>
//       </TabContext>
//     </Box>
//   );
// }

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
  type: number;
  setStep: (name: string, value: number) => void;
  data:any
}

export default function ArtistEditTabs({ type, setStep,data }: ArtistEditTabsProps) {
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
          aria-label="Artist Edit Tabs"
          className="w-full flex gap-4"
        >
          <Tab
            label="About"
            value="0"
            className="text-f16 font-normal h-auto min-h-[50px] w-auto max-[145px] px-7"
          />
          <Tab
            label="Recognitions"
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
          <ArtistAbout essentialList={data}/>
        </TabPanel>
        <TabPanel value="1" className="px-0">
          <ArtistRecognitions />
        </TabPanel>
        <TabPanel value="2" className="px-0">
          <ArtistContact />
        </TabPanel>
        <TabPanel value="3" className="px-0">
          <ArtistMedia />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
