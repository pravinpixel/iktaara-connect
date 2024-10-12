/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { Box, Card } from "@mui/material";
import { Grid } from "@mui/material";
import CustomCard from "../CustomCard";
import ImageComponent from "../ImageComponent";
import { Stack } from "@mui/material";
import CustomImageButton from "../CustomImageButton";
import CustomButton from "../form-fields/CustomButton";
const EventContent = ({ buisnessListData }: any) => {
  return (
    <>
      <section className="mt-[15px] cursor-pointer">
        {buisnessListData.data.map((business: any) => (
          <Card className="w-full h-full bg-white mt-[15px]" key={business.id}>
            <Box sx={{ p: 2 }}>
              <Grid container>
                <>
                  {" "}
                  <Grid item md={2} xs={12}>
                    <Box>
                      <ImageComponent
                        src={business.image}
                        alt="Business Image"
                        width={134}
                        height={175}
                      />
                    </Box>
                  </Grid>
                  <Grid item md={10} xs={12}>
                    <Box sx={{ padding: { xs: "5px", md: 2 } }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
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
                              src="/images/static/pin.svg"
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
                              src="/images/static/clock_1.svg"
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
                            justifyContent: "flex-end",
                          }}
                        >
                          <Stack direction="column">
                            <Box mt={1}>
                              <CustomButton
                                label="Create Event"
                                className="w-[140px]"
                              />
                            </Box>
                            <Box mt={1}>
                              <CustomButton
                                label="More"
                                variant="primary-button"
                                className="w-[140px]"
                              />
                            </Box>
                          </Stack>
                        </Box>
                      </Box>

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
                              image="/images/static/image_7.png"
                              label="Enquiry"
                            ></CustomImageButton>
                          </Box>
                          <Box>
                            <Stack direction="row">
                              <ImageComponent
                                src="/images/static/image_10.png"
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
                    </Box>
                  </Grid>
                </>
              </Grid>
            </Box>
          </Card>
        ))}
      </section>
    </>
  );
};

export default EventContent;
