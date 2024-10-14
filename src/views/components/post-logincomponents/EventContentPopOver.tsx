/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box, Typography, Stack } from "@mui/material";

import ImageComponent from "../ImageComponent";
import { useState } from "react";

const EventContentPopOver = () => {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(true);
  };
  return (
    <>
      <Box className="flex gap-[10px]">
        <Stack direction="column" spacing={2} p={2}>
          {" "}
          <Stack
            direction="row"
            alignItemss={"center"}
            spacing={2}
            onClick={handleClick}
            className={selected ? "text-red-500" : ""}
          >
            <Box>
              <ImageComponent
                src="/assets/static/image_73.svg"
                alt=""
                width={20}
                height={20}
              />
            </Box>
            <Typography>Edit</Typography>
          </Stack>
          <Stack direction="row" alignItemss={"center"} spacing={2}>
            <Box>
              <ImageComponent
                src="/assets/static/image_74.svg"
                alt=""
                width={20}
                height={20}
              />
            </Box>
            <Typography>Preview</Typography>
          </Stack>
          <Stack direction="row" alignItemss={"center"} spacing={2}>
            <Box>
              <ImageComponent
                src="/assets/static/image_71.svg"
                alt=""
                width={20}
                height={20}
              />
            </Box>
            <Typography>Analytics</Typography>
          </Stack>
          <Stack direction="row" alignItemss={"center"} spacing={2}>
            <Box>
              <ImageComponent
                src="/assets/static/image_72.svg"
                alt=""
                width={20}
                height={20}
              />
            </Box>
            <Typography>Share</Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default EventContentPopOver;
