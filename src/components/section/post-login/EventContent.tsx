/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
import { Box, Card, Stack } from "@mui/material";
import { Grid } from "@mui/material";
// import CustomCard from "../CustomCard";\
import { Popover } from "@mui/material";
import dynamic from "next/dynamic";

const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
const EventContentPopOver = dynamic(() => import("./EventContentPopOver"));
const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);
const CustomImageButton = dynamic(
  () => import("@/components/common/form-fields/CustomImageButton")
);

const EventContent = ({ buisnessListData }: any) => {
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
      <section className="mt-[19.15px] cursor-pointer last-of-type:mb-[64px]">
        {buisnessListData.data.map((business: any) => (
          <Card className="w-full h-full bg-white mt-[15px]" key={business.id}>
            <Box sx={{ py:"18.37px" ,px:"16px" }}>
              <Box className="flex flex-row" > 
                <Box>
                      <ImageComponent
                        src={business.image}
                        alt="Business Image"
                        width={134}
                        height={175}
                      />
                    </Box>  
                    {/* <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      > */}
                        <Box className="pl-[20px] w-[457px]">
                          <p className="font-semibold text-f22 leading-8 text-ik_bluegreydarken3">
                            {business.title}
                          </p>
                          <p className="font-normal text-f16 leading-[20px] text-ik_bluegreydarken1">
                            {" "}
                            {business.sub_title}
                          </p>
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems={"center"}
                          >
                            <ImageComponent
                              src="/assets/static/pin.svg"
                              alt="Business Image"
                              width={19}
                              height={20}
                            />
                            <p className="font-normal text-f16 leading-5 text-ik_bluegreydarken1">
                              {business.location}
                            </p>
                          </Stack>
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems={"center"}
                            mt={1}
                          >
                            <ImageComponent
                              src="/assets/static/clock_1.svg"
                              alt="Business Image"
                              width={23}
                              height={24}
                            />
                            <p className="font-normal text-f16 leading-5 text-ik_bluegreydarken2">
                              {business.experience} years in buisness,
                            </p>
                          </Stack>
                        </Box>

                        <Box
                          sx={{
                            display: { xs: "none", md: "flex" },
                            // justifyContent: "flex-end",
                          }}
                          className="pl-[110px]"
                        >
                          <Stack direction="column">
                            <Box mt={1}>
                              <CustomButton
                                label="Create Event"
                                 className="w-[200px] h-[54px]"
                              />
                            </Box>
                            <Box mt={1}>
                              <CustomButton
                                label="More"
                                variant="primary-button"
                                className="w-[200px] h-[54px]"
                                onClick={handleClick}
                              />
                            </Box>
                          </Stack>
                        </Box>
                      </Box>
                      {/* </Box> */}
                <>
                
                    {/* <Box sx={{ padding: { xs: "5px", md: 2 } }}> */}
                    

                      <Box
                        sx={{
                          display: { xs: "flex", md: "none" },
                          // justifyContent: "flex-end",
                          mt: 2,
                        }}
                      >
                        <Stack
                          direction="row"
                          spacing={"20px"}
                          alignItems={"center"}
                          justifyContent={"flex-end"}
                        >
                          <Box mt={1}>
                            <CustomImageButton
                              image="/assets/static/image_7.png"
                              label="Enquiry"
                            ></CustomImageButton>
                          </Box>
                          <Box>
                            <Stack direction="row">
                              <ImageComponent
                                src="/assets/static/image_10.png"
                                width={20}
                                height={16}
                                alt="static"
                              />
                              <p>
                                <span className="font-semibold text-f26 leading-8 text-ik_bluegreydarken3">
                                  {business.rating}
                                </span>
                                <span className="font-semibold text-f26 leading-8 text-ik_bluegreydarken3">
                                  /
                                </span>
                                <span className="font-normal text-f26 leading-8 text-ik_bluegreydarken3">
                                  5
                                </span>
                              </p>
                            </Stack>

                            <p
                              style={{ textAlign: "right" }}
                              className="font-normal text-f16 leading-5 text-ik_bluegreydarken1"
                            >
                              {business.reviews} Reviews
                            </p>
                          </Box>
                        </Stack>
                      </Box>
                    {/* </Box> */}
                
                </>
             
            </Box>
          </Card>
        ))}
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
            className: "rounded-lg shadow-md px-0 py-2",
          }}
        >
          <EventContentPopOver />
        </Popover>
      </section>
    </>
  );
};

export default EventContent;
