import React from "react";
import { Box, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import { Typography } from "@mui/material";

const ImageComponent = dynamic(() => import("../ImageComponent"));

export default function HostInfo() {
  return (
    <Box className="w-full border border-gray-300 rounded-md shadow-md  bg-white p-4">
      <Typography>Host Info</Typography>
      <Stack direction="row">
        <ImageComponent
          src="/images/static/image_27.png"
          alt="Business Image"
          width={23.4}
          height={24}
        />
        <Typography>Name</Typography>
      </Stack>
      <Typography>
        Calling all music lovers! Brace yourselves for the arrival of "Nee
        Singham Dhan", a captivating live concert experience featuring the
        phenomenal Sid Sriram!
      </Typography>
    </Box>
  );
}
