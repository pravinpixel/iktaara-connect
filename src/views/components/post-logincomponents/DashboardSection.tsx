/* eslint-disable @typescript-eslint/no-explicit-any */

import CustomButton from "@/views/components/form-fields/CustomButton";
import ImageComponent from "@/views/components/ImageComponent";
import CircularWithValueLabel from "@/views/components/post-logincomponents/ProgressLabel";
import { Stack } from "@mui/material";

import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";

const DashboardSection = () => {
  return (
    <>
      <Box className="bg-ik_white my-5 mx-2 rounded-[8px] p-3">
        <Stack direction="row" spacing={2}>
          <Box>
            <ImageComponent
              src="/images/static/image_59.png"
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
        <Grid container>
          <Grid item xs={4}>
            <Box className="bg-ik_white  mx-1 rounded-[8px] p-3">
              <Stack direction="row" spacing={2}>
                <Box>
                  {" "}
                  <ImageComponent
                    src="/images/static/image_61.png"
                    alt="Ramakrishna Paramahamsa"
                    width={28}
                    height={28}
                  />
                </Box>
                <Box>
                  <Typography>enquiries</Typography>
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
            <Box className="bg-ik_white mx-1  rounded-[8px] p-3">
              {" "}
              <Stack direction="row" spacing={2}>
                <Box>
                  {" "}
                  <ImageComponent
                    src="/images/static/image_60.png"
                    alt="Ramakrishna Paramahamsa"
                    width={28}
                    height={28}
                  />
                </Box>
                <Box>
                  <Typography>Profile Views</Typography>
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
            <Box className="bg-ik_white mx-1 rounded-[8px] p-3">
              {" "}
              <Stack direction="row" spacing={2}>
                <Box>
                  {" "}
                  <ImageComponent
                    src="/images/static/image_62.png"
                    alt="Ramakrishna Paramahamsa"
                    width={28}
                    height={28}
                  />
                </Box>
                <Box>
                  <Typography>Business</Typography>
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
      <Box className="mt-2">
        {" "}
        <Grid container>
          <Stack direction="row" spacing={1}>
            <Box>
              <Grid item xs={12}>
                <Box className="bg-ik_white  mx-1 rounded-[8px] p-3">
                  <Typography className="text-f18 font-semibold leading-[30px] text-ik_bluegreydarken3">
                    What’s Happening!
                  </Typography>
                  {/* <Stack direction={"row"} spacing={2}> */}
                  <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Grid item xs={2}>
                      <Box>
                        <ImageComponent
                          src="/images/static/image_36.png"
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
              </Grid>

              <Grid item xs={12} mt={1}>
                <Box className="bg-ik_white  mx-1 rounded-[8px] p-3">
                  <Box>
                    <Typography className="text-f18 font-semibold leading-[30px] text-ik_bluegreydarken3">
                      Profile Completion
                    </Typography>
                  </Box>
                  <Box>
                    <Stack direction={"row"} spacing={2}>
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
                          className={""}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            </Box>
            <Box>
              <ImageComponent
                src="/images/static/image_63.png"
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
            <Box className="bg-ik_white  mx-1 rounded-[8px] p-3">
              <Box>
                <Typography className="text-f18 font-semibold leading-[30px] text-ik_bluegreydarken3">
                  Tips for Business Leads
                </Typography>
              </Box>
              <Box className="mt-4">
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems={"center"}
                  justifyContent={"center"}
                  my={3}
                >
                  <Box>
                    <ImageComponent
                      src="/images/static/image_64.svg"
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
                  my={3}
                >
                  <Box>
                    <ImageComponent
                      src="/images/static/image_66.svg"
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
                  my={3}
                >
                  <Box>
                    <ImageComponent
                      src="/images/static/image_65.svg"
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
