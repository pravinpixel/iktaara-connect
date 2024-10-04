import React from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";

import { Typography } from "@mui/material";
import PaidData from "./PaidData";
import CustomImageButton from "../CustomImageButton";

export default function StepperContentOne() {
  const location = [
    {
      id: 1,
      title: "Free Entry",
      image: "/images/static/image_26.png",
    },
    {
      id: 2,
      title: "Paid Entry",
      image: "/images/static/image_26.png",
    },
  ];
  return (
    <Box className="p-6 ">
      <Typography className="text-f16 font-normal leading-5 text-ik_bluegreybluegrey pb-2">
        Event Type
      </Typography>
      <Grid container spacing={2} className="max-w-[750px]">
        {" "}
        {location?.map((item) => (
          <Grid item xs={6} key={item.id}>
            <PaidData filterCate={item} />
            {/* <FilterLanguage filterLanguage={item} /> */}
          </Grid>
        ))}
      </Grid>
      <CustomImageButton
        image="/images/static/image_48.png"
        label="Add Ticket"
        variant="event-button"
        width={16}
        height={16}
      ></CustomImageButton>
    </Box>
  );
}
