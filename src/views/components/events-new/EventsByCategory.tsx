/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
const CustomContainer = dynamic(() => import("../Container"));
import { Stack } from "@mui/material";
const CustomCardEventsCategory = dynamic(
  () => import("../CustomCardsEventsCategory")
);

type EventsTitleProps = {
  label: string;
  eventByCate: any;
  className: string;
};

const EventsByCategory = (props: EventsTitleProps) => {
  const { label, eventByCate } = props;
  return (
    <Box className={className}>
      <CustomContainer>
        <Stack
          direction="row"
          spacing={2}
          alignItems={"center"}
          className="my-3"
        >
          <Typography className="font-bold text-f24 text-ik_bluegreydarken6 leading-9">
            {label}{" "}
          </Typography>
        </Stack>

        <div className="flex flex-wrap gap-2 my-7">
          {" "}
          {eventByCate?.map((business: any) => (
            <div className="" key={business.id}>
              {" "}
              <CustomCardEventsCategory
                img={business.icon}
                text={business.name}
                reviews={""}
                typebottom={false}
              />
            </div>
          ))}
        </div>
      </CustomContainer>
    </Box>
  );
};

export default EventsByCategory;
