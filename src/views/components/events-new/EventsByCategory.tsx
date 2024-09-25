import React from "react";
import ImageComponent from "../ImageComponent";
import { Typography } from "@mui/material";
import CustomContainer from "../Container";
import { Stack } from "@mui/material";

type EventsTitleProps = {
  label: string;
  subLabel: string;
};
const EventsByCategory = (props: EventsTitleProps) => {
  const { label, subLabel } = props;
  return (
    <CustomContainer>
      <Stack direction="row" spacing={2} alignItems={"center"}>
        <ImageComponent
          alt="calender"
          src="/images/static/image_21.png"
          width={40}
          height={40}
        />
        <Typography className="font-bold text-f24 text-ik_pink leading-9">
          {label}{" "}
          <span className="font-normal text-f24 text-ik_pink leading-9">
            {subLabel}
          </span>
        </Typography>
      </Stack>
    </CustomContainer>
  );
};

export default EventsByCategory;
