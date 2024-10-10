/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

import dynamic from "next/dynamic";
import { Box, Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { AutoCompleteSearch } from "@/components/common/AutoCompleteSearch";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";

import { FormProvider, useForm } from "react-hook-form";
import DateSelectField from "../../form-fields/DateSelectField";
import CustomImageButton from "../../CustomImageButton";
import CustomButton from "../../form-fields/CustomButton";

const ImageComponent = dynamic(() => import("../../ImageComponent"));
const DatePopup = dynamic(() => import("../../popup/DatePopup"));

export default function VenueDrawer({ setClose, setValue }: any) {
  const [open, setOpen] = useState(false);

  const handleDate = () => {
    setOpen(true);
  };

  const handleClosePopup = () => {
    setOpen(false);
  };
  const handleNew = () => {
    setClose(true);
    setValue(false);
  };
  const methods = useForm();
  return (
    <>
      <FormProvider {...methods}>
        <Box className="p-6 ">
          <Box className="flex justify-between">
            {" "}
            <Typography className="text-f22 font-semibold leading-7 text-ik_bluegreydarken3 pb-2">
              Venue
            </Typography>
            <Box onClick={() => handleNew()} className="cursor-pointer">
              {" "}
              <ImageComponent
                src="/images/static/image_53.png"
                alt="bin"
                height={16}
                width={16}
              />
            </Box>
          </Box>

          <Box className="w-[100%] ">
            {" "}
            <AutoCompleteSearch
              placeholder="Find Address"
              typeheader={true}
              typebanner={false}
              className="w-[100%]"
            />
          </Box>
          <Box className="my-2">
            <Typography className="text-f18 font-semibold leading-6 text-ik_bluegreydarken3 ">
              Narada Gana Sabha in Alwarpet, Chennai
            </Typography>
            <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
              No 314, Ttk Road, 
            </Typography>
            <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
              Alwarpet, Chennai - 600018
            </Typography>
            <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
              Near Sankara Hall
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <Box>
                <ImageComponent
                  src="/images/static/image_52.png"
                  alt="bin"
                  height={20}
                  width={20}
                />
              </Box>
              <Typography className="text-f16 font-normal leading-6 text-ik_pink">
                Delete
              </Typography>
            </Stack>
          </Box>
          <Divider />
          <Box className="my-2">
            <Typography>Event Dates</Typography>
            <Box
              className="border border-ik_bluegreydarken3 flex justify-between rounded-[6px] p-3 cursor-pointer"
              onClick={() => handleDate()}
            >
              <Typography>Select</Typography>
              <Box>
                {" "}
                <ImageComponent
                  src="/images/static/image_54.png"
                  alt="bin"
                  height={16}
                  width={16}
                />
              </Box>
            </Box>
          </Box>
          <Box className="border border-ik_lightorange flex gap-[5px] rounded-[6px] p-3 mt-2 bg-ik_lightorange">
            <Box>
              {" "}
              <ImageComponent
                src="/images/static/image_55.png"
                alt="bin"
                height={25}
                width={25}
              />
            </Box>
            <Typography>You can select more than 1 date</Typography>
          </Box>
          <Box className="mt-2">
            <Stack direction="row">
              {" "}
              <Grid container spacing={1}>
                <Grid item xs={5}>
                  <Box
                    className="border border-ik_bluegreydarken3 flex justify-between rounded-[6px] p-3 cursor-pointer"
                    onClick={() => handleDate()}
                  >
                    <Typography>Select</Typography>
                    <Box>
                      {" "}
                      <ImageComponent
                        src="/images/static/image_54.png"
                        alt="bin"
                        height={16}
                        width={16}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <DateSelectField
                    label={""}
                    name={"Business"}
                    options={[
                      { id: 1, name: "1:00" },
                      { id: 2, name: "2:00" },
                      { id: 3, name: "3:00" },
                    ]}
                  />
                </Grid>
                <Grid item xs={3}>
                  <DateSelectField
                    label={""}
                    name={"Business"}
                    options={[
                      { id: 1, name: "1:00" },
                      { id: 2, name: "2:00" },
                      { id: 3, name: "3:00" },
                    ]}
                  />
                </Grid>
                {/* <Grid item xs={2} className="flex items-center justify-center">
                
              </Grid> */}
              </Grid>
              <Box className="flex items-center justify-center">
                <ImageComponent
                  src="/images/static/image_47.png"
                  alt="bin"
                  height={20}
                  width={20}
                />
              </Box>
            </Stack>
            <Box className="my-2">
              <CustomImageButton
                image="/images/static/image_48.png"
                label="Add "
                variant="event-button"
                width={16}
                height={16}
              ></CustomImageButton>
            </Box>
          </Box>
          <CustomButton label="Done" className={"w-[217px]"}></CustomButton>
        </Box>
      </FormProvider>
      {open && <DatePopup handleClose={handleClosePopup} open={open} />}
    </>
  );
}
