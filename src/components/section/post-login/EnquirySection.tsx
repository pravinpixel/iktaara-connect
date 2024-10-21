/* eslint-disable @typescript-eslint/no-explicit-any */

import { AutoCompleteSearch } from "@/components/common/AutoCompleteSearch";

import { Stack } from "@mui/material";
import { Grid } from "@mui/material";

import { Typography } from "@mui/material";

import { FormProvider, useForm } from "react-hook-form";

import { Popover } from "@mui/material";
import EnquiryPopOver from "./EnquiruPopOver";
import { Box } from "@mui/material";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);

const SelectField = dynamic(
  () => import("@/components/common/form-fields/SelectField")
);
const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);

const EnquirySection = () => {
  const methods = useForm();
  const [selected, setSelected] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <FormProvider {...methods}>
        {" "}
        <Box className="bg-ik_white mt-4 rounded-[8px] py-[31.56px] px-[37.97px] ml-[16px]">
          <Stack direction="row" spacing={2}>
            <Box>
              <ImageComponent
                src="/assets/static/image_67.png"
                alt="Ramakrishna Paramahamsa"
                width={67}
                height={67}
              />
            </Box>
            <Box>
              <Typography className="text-f24 font-bold leading-[30px] text-ik_bluegreydarken3">
                Enquiries
              </Typography>
              <Typography className="text-f18 font-normal leading-[26px] text-ik_bluegreydarken1">
                Keep your customer engaged with instant replies.
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Grid container className="mx-auto">
            <Grid item md={4.5}>
              <Box className="bg-ik_white mt-[12px] ml-[16px]">
                <Box className="w-[100%] px-3 py-[16.6px]">
                  {" "}
                  <AutoCompleteSearch
                    sx={{
                      "& .MuiFormControl-root.MuiTextField-root": {
                        border: "1px solid var(--ik_bluegreylighten3)",
                      },
                    }}
                    placeholder="Search Enquiries"
                    typeheader={true}
                    typebanner={false}
                    className="w-[100%] bg-ik_white rounded-[6px] border border-ik_bluegreylighten3 text-ik_bluegreydarken1 text-f16 font-normal leading-[19.84px] h-[42px]"
                  />
                </Box>
                <Box>
                  <Box className="px-3 pb-[8px]">
                    {" "}
                    <SelectField
                      sx={{
                        border: "none!important",
                        margin: "0px!important",
                        "& .css-cckka6-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                          {
                            paddingLeft: "0px!important",
                          },
                      }}
                      label={""}
                      name={"Business"}
                      options={[
                        { id: 10, name: "All Enquiries" },
                        { id: 20, name: "Replied" },
                        { id: 30, name: "Spam" },
                        { id: 40, name: "Unread" },
                      ]}
                    />
                  </Box>

                  <Box
                    onClick={() => setSelected(true)}
                    className={
                      selected
                        ? "bg-ik_lightblue pl-[17px] pr-[15.12px] pt-3 pb-3"
                        : "pl-[17px] pr-[15.12px] pt-3 pb-3 "
                    }
                  >
                    <Stack direction={"row"} spacing={1}>
                      <Box>
                        <ImageComponent
                          src="/assets/static/image_68.png"
                          alt="Mahanadhi Shobana"
                          width={90}
                          height={90}
                        ></ImageComponent>
                      </Box>
                      <Box>
                        <Typography className="text-f18 font-semibold leading-[23px] text-ik_bluegreydarken3">
                          Mahanadhi Shobana
                        </Typography>
                        <Typography className="text-f14 font-normal leading-[18px] text-ik_bluegreydarken2">
                          Artist, Chennai
                        </Typography>
                      </Box>
                    </Stack>
                    <Box className="flex justify-end mt-[4.5px]">
                      <Typography className="text-f14 font-normal leading-[18px] text-ik_bluegreydarken1">
                        08:00
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="pl-[17px] pr-[15.12px] pt-3 pb-3 ">
                    <Stack direction={"row"} spacing={1}>
                      <Box>
                        <ImageComponent
                          src="/assets/static/image_68.png"
                          alt="Mahanadhi Shobana"
                          width={90}
                          height={90}
                        ></ImageComponent>
                      </Box>
                      <Box>
                        <Typography className="text-f18 font-semibold leading-[23px] text-ik_bluegreydarken3">
                          Mahanadhi Shobana
                        </Typography>
                        <Typography className="text-f14 font-normal leading-[18px] text-ik_bluegreydarken2">
                          Artist, Chennai
                        </Typography>
                      </Box>
                    </Stack>
                    <Box className="flex justify-end mt-[4.5px]">
                      <Typography className="text-f14 font-normal leading-[18px] text-ik_bluegreydarken1">
                        08:00
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={7.5}>
              <Box className="bg-ik_white mt-[12px] ml-[3px] px-[22.2px] py-[19.95px]">
                {" "}
                <Box>
                  <Stack direction={"row"} spacing={1}>
                    <Box>
                      <ImageComponent
                        src="/assets/static/image_68.png"
                        alt="Mahanadhi Shobana"
                        width={90}
                        height={90}
                      ></ImageComponent>
                    </Box>
                    <Box>
                      <Typography className="text-f18 font-semibold leading-[23px] text-ik_bluegreydarken3">
                        Mahanadhi Shobana
                      </Typography>
                      <Typography className="text-f14 font-normal leading-[18px] text-ik_bluegreydarken2">
                        Artist, Chennai
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
              <Box className="px-3 flex items-center justify-center">
                <Typography className="text-f14 font-normal leading-[18px] text-ik_bluegreydarken1 pt-[5px]">
                  Today, Aug 7, 2024
                </Typography>
              </Box>
              <Box className="bg-ik_white mt-[22.5px] ml-[3px] px-[20.5px] pt-[16.56px]">
                {" "}
                <Box className="bg-ik_lightblue rounded-none rounded-br-[32px] rounded-bl-[32px] px-[20px] py-[20px] w-[400px] rounded-tr-[32px]">
                  <Typography className="my-1 text-f18 font-semibold leading-[26px] text-ik_bluegreydarken3">
                    Instruments promotion enquiry
                  </Typography>
                  <Typography className="my-3 text-f18 font-normal leading-[26px] text-ik_bluegreydarken3">
                    We invite you to our musical store to view all the new
                    instruments. We’d be glad to provide exclusive discounts on
                    purchasing.
                  </Typography>
                  <Typography className="my-3 text-f18 font-normal leading-[26px] text-ik_bluegreydarken3">
                    Hi Ramakrishna
                  </Typography>
                  <Typography className="my-3 text-f18 font-normal leading-[26px] text-ik_bluegreydarken3">
                    Please visit our store at Anna Salai.
                  </Typography>
                  <Box>
                    {" "}
                    <Typography className=" text-f18 font-semibold leading-[26px] text-ik_bluegreydarken3">
                      Sachin Das{" "}
                    </Typography>
                    <Typography className="text-f18 font-normal leading-[26px] text-ik_bluegreydarken3">
                      {" "}
                      +91 98239 23989
                    </Typography>
                  </Box>
                  <Box className="flex justify-end">
                    <Typography className=" text-f14 font-normal leading-[20px] text-ik_bluegreydarken1">
                      08:00
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex justify-end">
                  {" "}
                  <Box className="bg-ik_lightblue rounded-none rounded-br-[32px] rounded-bl-[32px] p-3 w-[400px] rounded-tl-[32px] my-[17px] ">
                    <Typography className="text-f18 font-normal leading-[26px] text-ik_bluegreydarken3">
                      Responded customer by Email
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="bg-ik_white mt-[3px] ml-[3px]  mb-[67.85px] py-[30px] px-[24.09px] flex justify-end">
                {/* <Tooltip title="Add" arrow> */}
                <CustomButton
                  label="Update Status"
                  className={"h-[48px] w-[200px]"}
                  onClick={handleClick}
                />
                {/* </Tooltip> */}
                {/* <Tooltip title="Add" arrow>
                  <Button>Arrow</Button>
                </Tooltip> */}
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
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
                  {/* <Box className="flex gap-[10px]">
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
                  </Box> */}
                  <EnquiryPopOver />
                </Popover>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </FormProvider>
    </>
  );
};

export default EnquirySection;
