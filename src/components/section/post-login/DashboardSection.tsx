/* eslint-disable @typescript-eslint/no-explicit-any */

// import CustomButton from "@/views/components/form-fields/CustomButton";
// import ImageComponent from "@/views/components/ImageComponent";
import CircularWithValueLabel from "@/components/section/post-login/ProgressLabel";
import { Stack } from "@mui/material";

import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
// import PostUpdatePapup from "../../../views/components/popup/PostUpdatePapup";
import dynamic from "next/dynamic";

const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
const PostUpdatePapup = dynamic(
  () => import("@/components/popup/PostUpdatePapup")
);
const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);
const DashboardSection = () => {
  const [openUpdate, setOpenUpdate] = React.useState(false);

  const handleClickUpdate = () => {
    setOpenUpdate(true);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };
  return (
    <>
      <Box className="bg-ik_white mt-[16px] mb-[12px] rounded-[8px] px-[38.49px] py-[22.87px] ml-[16px]">
        <Stack direction="row" spacing={2} alignItems="center">
          <Box>
            <ImageComponent
              src="/assets/static/image_59.png"
              alt="Ramakrishna Paramahamsa"
              width={73}
              height={107}
            />
          </Box>
          <Box>
            <Typography className="text-f24 font-bold leading-[30px] text-ik_bluegreydarken3">
              Hi{" "}
              <span className="text-f24 font-bold leading-[30px] text-ik_pink">
                Ramakrishna Paramahamsa
              </span>
              , Welcome to Iktaraa connect!
            </Typography>
            <Typography className="text-f18 font-normal leading-[26px] text-ik_bluegreydarken1">
              We’ve introduced a dashboard view to help you understand what
              actions to take next to quickly grow and optimize your Page
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box>
        {" "}
        <Grid container className="mx-auto">
          <Grid item xs={4}>
            <Box className="bg-ik_white ml-[16px] rounded-[8px] px-[15.6px] py-[11.94px]">
              <Stack direction="row" spacing={2}>
                <Box>
                  {" "}
                  <ImageComponent
                    src="/assets/static/image_61.png"
                    alt="Ramakrishna Paramahamsa"
                    width={28}
                    height={28}
                  />
                </Box>
                <Box>
                  <Typography className="text-f16 font-semibold leading-[30px] ik_bluegreydarken3">
                    Enquiries
                  </Typography>
                </Box>
              </Stack>
              <Box className="flex items-center justify-center p-3">
                <span className="text-f56 font-semibold leading-[70px] ik_bluegreydarken3">
                  100
                </span>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="bg-ik_white  rounded-[8px] px-[15.6px] py-[11.94px] ml-[13.06px]">
              {" "}
              <Stack direction="row" spacing={2}>
                <Box>
                  {" "}
                  <ImageComponent
                    src="/assets/static/image_60.png"
                    alt="Ramakrishna Paramahamsa"
                    width={28}
                    height={28}
                  />
                </Box>
                <Box>
                  <Typography className="text-f16 font-semibold leading-[30px] ik_bluegreydarken3">
                    Profile Views
                  </Typography>
                </Box>
              </Stack>
              <Box className="flex items-center justify-center p-3">
                <span className="text-f56 font-semibold leading-[70px] ik_bluegreydarken3">
                  100
                </span>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="bg-ik_white rounded-[8px] px-[15.6px] py-[11.94px] ml-[13.06px]">
              {" "}
              <Stack direction="row" spacing={2}>
                <Box>
                  {" "}
                  <ImageComponent
                    src="/assets/static/image_62.png"
                    alt="Ramakrishna Paramahamsa"
                    width={28}
                    height={28}
                  />
                </Box>
                <Box>
                  <Typography className="text-f16 font-semibold leading-[30px] ik_bluegreydarken3">
                    Business
                  </Typography>
                </Box>
              </Stack>
              <Box className="flex items-center justify-center p-3">
                <span className="text-f56 font-semibold leading-[70px] ik_bluegreydarken3">
                  100
                </span>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="mt-[12px]">
        {" "}
        <Grid container>
          <Stack direction="row">
            <Box>
              {/* <Grid item xs={11.7}> */}
              <Box className="bg-ik_white  ml-[16px] rounded-[8px] p-3 w-[552px] 2xl:w-[665px]">
                <Typography className="text-f18 font-semibold leading-[30px] text-ik_bluegreydarken3">
                  What’s Happening!
                </Typography>
                {/* <Stack direction={"row"} spacing={2}> */}
                <Grid container alignItems={"center"} justifyContent={"center"}>
                  <Grid item xs={2}>
                    <Box>
                      <ImageComponent
                        src="/assets/static/image_36.png"
                        alt=""
                        width={73}
                        height={73}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={10}>
                    {" "}
                    <Box className="border border-ik_bluegreydarken1 p-3 rounded-[30px]">
                      <Typography>Share an update...</Typography>
                    </Box>
                  </Grid>
                </Grid>

                {/* </Stack> */}
              </Box>
              {/* </Grid> */}

              {/* <Grid item xs={11.7} mt={1}> */}
              <Box className="bg-ik_white  rounded-[8px] px-[16.54px]  py-[10.57px] mt-2 w-[552px] 2xl:w-[665px]  ml-[16px]">
                <Box>
                  <Typography className="text-f18 font-semibold leading-[30px] text-ik_bluegreydarken3">
                    Profile Completion
                  </Typography>
                </Box>
                <Box className="mt-[23.9px]">
                  <Stack direction={"row"} spacing="29.59px">
                    <Box>
                      <CircularWithValueLabel />
                    </Box>
                    <Box>
                      <Typography className="text-f24 font-bold leading-[30px] text-ik_bluegreydarken3">
                        Your profile 50% Complete
                      </Typography>
                      <Typography className="text-f18 font-normal leading-[30px] text-ik_bluegreydarken1">
                        Great work! Keep your profile uptodate to get business
                        enquiries
                      </Typography>
                      <CustomButton
                        variant="primary-button"
                        label="Update Profile"
                        className={"mt-[12.78px ] mb-[31.92px]"}
                        onClick={handleClickUpdate}
                      />
                      {openUpdate && (
                        <PostUpdatePapup
                          handleClose={handleCloseUpdate}
                          open={openUpdate}
                        />
                      )}
                    </Box>
                  </Stack>
                </Box>
              </Box>
              {/* </Grid> */}
            </Box>
            <Box className="ml-[12px]">
              <ImageComponent
                src="/assets/static/image_63.png"
                alt=""
                width={330}
                height={316}
              />
            </Box>
          </Stack>
        </Grid>
      </Box>

      <Box className="mt-2 mb-8">
        {" "}
        <Grid container>
          <Grid item xs={8}>
            <Box className="bg-ik_white ml-[16px] rounded-[8px] px-[16.59px] pt-[12.51px]">
              <Box>
                <Typography className="text-f18 font-semibold leading-[30px] text-ik_bluegreydarken3">
                  Tips for Business Leads
                </Typography>
              </Box>
              <Box className="mt-[29.7px]">
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems={"center"}
                  justifyContent={"center"}
                  mt={"24.7px"}
                >
                  <Box>
                    <ImageComponent
                      src="/assets/static/image_64.svg"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </Box>
                  <Box>
                    <Typography className="text-f20 font-semibold leading-[30px] ik_bluegreydarken3">
                      Build your profile
                    </Typography>
                    <Typography className="text-f16 font-normal leading-[26px] ik_bluegreydarken1">
                      Create you online profile and showcase to potential
                      customers looking for similar services to grow.
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems={"center"}
                  justifyContent={"center"}
                  mt={"24.7px"}
                >
                  <Box>
                    <ImageComponent
                      src="/assets/static/image_66.svg"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </Box>
                  <Box>
                    <Typography className="text-f20 font-semibold leading-[30px] ik_bluegreydarken3">
                      Build your profile
                    </Typography>
                    <Typography className="text-f16 font-normal leading-[26px] ik_bluegreydarken1">
                      Create you online profile and showcase to potential
                      customers looking for similar services to grow.
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems={"center"}
                  justifyContent={"center"}
                  mt={"24.7px"}
                  pb="35.34px"
                  mb="77.67px"
                >
                  <Box>
                    <ImageComponent
                      src="/assets/static/image_65.svg"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </Box>
                  <Box>
                    <Typography className="text-f20 font-semibold leading-[30px] ik_bluegreydarken3">
                      Build your profile
                    </Typography>
                    <Typography className="text-f16 font-normal leading-[26px] ik_bluegreydarken1">
                      Create you online profile and showcase to potential
                      customers looking for similar services to grow.
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DashboardSection;
