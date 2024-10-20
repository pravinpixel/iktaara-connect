import React from "react";

import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { Stack } from "@mui/material";

const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
const CustomContainer = dynamic(
  () => import("@/components/common/form-fields/Container")
);

type EventsTitleProps = {
  label: string;
  subLabel: string;
  className:string;
};
const EventsTitle = (props: EventsTitleProps) => {
  const { label, subLabel,className} = props;
  return (
    <CustomContainer>
      <Stack direction="row" spacing={2} alignItems={"center"} pt={"22.7px"} className={className}>
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
