import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import dynamic from "next/dynamic";
const FilterCategoryData = dynamic(
  () => import("../events-new/FilterCategoryData")
);

export default function HostType() {
  const location = [
    {
      id: 1,
      title: "Workshops",
      image: "/images/static/image_26.png",
    },
    {
      id: 2,
      title: "Workshops",
      image: "/images/static/image_26.png",
    },
    {
      id: 3,
      title: "Workshops",
      image: "/images/static/image_26.png",
    },
    {
      id: 4,
      title: "Workshops",
      image: "/images/static/image_26.png",
    },
    {
      id: 5,
      title: "Workshops",
      image: "/images/static/image_26.png",
    },
    {
      id: 6,
      title: "Workshops",
      image: "/images/static/image_26.png",
    },
  ];
  return (
    <Box className="p-6">
      <Typography className="text-f22 font-semibold leading-7 text-ik_bluegreydarken3 pb-2">
        Event Type
      </Typography>
      <Grid container spacing={2}>
        {" "}
        {location?.map((item) => (
          <Grid item xs={6} key={item.id}>
            <FilterCategoryData filterCate={item} />
            {/* <FilterLanguage filterLanguage={item} /> */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
