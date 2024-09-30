/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";

const CustomContainer = dynamic(() => import("../Container"));

type EventsTitleProps = {
  aboutData: any;
};
const AboutIktaraaEvents = (props: EventsTitleProps) => {
  const { aboutData } = props;

  return (
    <CustomContainer>
      {aboutData?.map((item: any) => (
        <Box key={item.id}>
          <Typography className="font-bold text-f24 text-ik_bluegreydarken6 leading-8 mt-[30px]">
            {item?.title}
          </Typography>
          <Typography className="font-normal text-f18 text-ik_bluegreydarken6 leading-7 mt-[30px] mb-[40px]">
            {item?.description}
          </Typography>
        </Box>
      ))}
    </CustomContainer>
  );
};

export default AboutIktaraaEvents;
