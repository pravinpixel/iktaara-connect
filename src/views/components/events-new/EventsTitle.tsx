import React from "react";

import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { Stack } from "@mui/material";

const ImageComponent = dynamic(() => import("../ImageComponent"));
const CustomContainer = dynamic(() => import("../Container"));

type EventsTitleProps = {
  label: string;
  subLabel: string;
};
const EventsTitle = (props: EventsTitleProps) => {
  const { label, subLabel } = props;
  return (
    <CustomContainer>
      <Stack direction="row" spacing={2} alignItems={"center"} pt={2} pb={2}>
        <ImageComponent
          alt="calender"
          src="/assets/static/image_21.png"
          width={40}
          height={40}
        />
        <Typography className="font-bold text-f24 text-ik_pink leading-9 ">
          {label}{" "}
          <span className="font-normal text-f24 text-ik_pink leading-9">
            {subLabel}
          </span>
        </Typography>
      </Stack>
    </CustomContainer>
  );
};

export default EventsTitle;
