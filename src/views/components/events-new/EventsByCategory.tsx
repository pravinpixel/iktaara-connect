import React from "react";
import { Typography } from "@mui/material";
const CustomContainer = dynamic(() => import("../Container"));
import { Stack } from "@mui/material";
import dynamic from "next/dynamic";

type EventsTitleProps = {
  label: string;
};
const EventsByCategory = (props: EventsTitleProps) => {
  const { label } = props;
  return (
    <CustomContainer>
      <Stack direction="row" spacing={2} alignItems={"center"}>
        <Typography className="font-bold text-f24 text-ik_bluegreydarken6 leading-9">
          {label}{" "}
        </Typography>
      </Stack>
    </CustomContainer>
  );
};

export default EventsByCategory;
