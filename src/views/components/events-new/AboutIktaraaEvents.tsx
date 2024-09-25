import React from "react";

import { Typography } from "@mui/material";
import dynamic from "next/dynamic";

const CustomContainer = dynamic(() => import("../Container"));

type EventsTitleProps = {
  label: string;
  title: string;
};
const AboutIktaraaEvents = (props: EventsTitleProps) => {
  const { label, title } = props;
  return (
    <CustomContainer>
      <Typography className="font-bold text-f24 text-ik_bluegreydarken6 leading-8 mt-[15px]">
        {title}{" "}
      </Typography>
      <Typography className="font-normal text-f18 text-ik_bluegreydarken6 leading-7 my-[15px]">
        {label}{" "}
      </Typography>
    </CustomContainer>
  );
};

export default AboutIktaraaEvents;
