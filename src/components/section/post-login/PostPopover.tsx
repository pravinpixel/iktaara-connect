import React from "react";
import { Popover, Box, Stack, Typography } from "@mui/material";
import ImageComponent from "../ImageComponent";

interface PopoverProps {
  id: string;
  open: boolean;
  anchorEl: null | HTMLElement;
  onClose: () => void;
}

const PostPopOver: React.FC<PopoverProps> = ({
  id,
  open,
  anchorEl,
  onClose,
}) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      PaperProps={{
        className: "rounded-lg shadow-md",
      }}
    >
      <Box className="flex gap-[10px]">
        <Stack
          direction="row"
          alignItemss={"center"}
          className="border p-2 rounded-[8px] border-ik_bluegreylighten3"
          spacing={2}
        >
          <Box>
            <ImageComponent
              src="/assets/static/phone.svg"
              alt=""
              width={20}
              height={20}
            />
          </Box>
          <Typography>Phone</Typography>
        </Stack>
        <Stack
          direction="row"
          alignItemss={"center"}
          className="border p-2 rounded-[8px] border-ik_bluegreylighten3"
          spacing={2}
        >
          <Box>
            <ImageComponent
              src="/assets/static/email.svg"
              alt=""
              width={20}
              height={20}
            />
          </Box>
          <Typography>Email</Typography>
        </Stack>
      </Box>
    </Popover>
  );
};

export default PostPopOver;
