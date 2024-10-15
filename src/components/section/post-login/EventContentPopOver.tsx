/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box, Typography, Stack } from "@mui/material";

import dynamic from "next/dynamic";

const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
import { useState } from "react";

const EventContentPopOver = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (item: string) => {
    setSelected(item);
  };
  return (
    <>
      <Box className="flex gap-[10px]">
        <Stack direction="column" spacing={1}>
          <Stack
            direction="row"
            alignItemss={"center"}
            spacing={2}
            onClick={() => handleClick("edit")}
            className={`cursor-pointer px-10 py-2 ${
              selected === "edit" ? "bg-ik_bluegreylighten5 " : "bg-transparent"
            }`}
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
          <Stack
            direction="row"
            alignItemss={"center"}
            spacing={2}
            className={`cursor-pointer px-10 py-2 ${
              selected === "edit" ? " " : "bg-transparent"
            }`}
          >
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
          <Stack
            direction="row"
            alignItemss={"center"}
            spacing={2}
            className={`cursor-pointer px-10 py-2 ${
              selected === "edit" ? " " : "bg-transparent"
            }`}
          >
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
          <Stack
            direction="row"
            alignItemss={"center"}
            spacing={2}
            className={`cursor-pointer px-10 py-2 ${
              selected === "edit" ? "" : "bg-transparent"
            }`}
          >
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
