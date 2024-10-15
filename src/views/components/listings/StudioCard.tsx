/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";

import { Box, Card, Grid } from "@mui/material";
import CustomCard from "../CustomCard";
import { Stack } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
const CustomImageButton = dynamic(() => import("../CustomImageButton"));
const ImageComponent = dynamic(() => import("../ImageComponent"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StudioCard = ({ buisnessListData }: any) => {
  return (
    <section className="mt-[15px] ">
      {buisnessListData.data.map((business: any) => (
        <Card className="w-full h-full bg-white mt-[15px]" key={business.id}>
          <Box sx={{ p: 2 }}>
            <Grid container>
              <>
                {" "}
                <Grid item md={4} xs={12}>
                  <Link
                    href={`/business/${business?.slug || ""}/${
                      business?.music_title || ""
                    }`}
                  >
                    {" "}
                    <CustomCard
                      variant="bottom-right"
                      img={business.image}
                      img1={business.logo_image}
                      type={true}
                      text=""
                      reviews={""}
                      typebottom={false}
                    />
                  </Link>
                </Grid>
                <Grid item md={8} xs={12}>
                  <Box sx={{ padding: { xs: "5px", md: 2 } }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Link
                        href={`/business/${business?.slug || ""}/${
                          business?.music_title || ""
                        }`}
                      >
                        {" "}
                        <Box>
                          <p className="font-bold text-f24 leading-8 text-ik_bluegreydarken3">
                            {business.title}
                          </p>
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems={"center"}
                          >
                            <ImageComponent
                              src="/assets/static/image_5.png"
                              alt="Business Image"
                              width={19}
                              height={20}
                            />
                            <p className="font-normal text-f16 leading-5 text-ik_bluegreydarken2">
                              {business.location}
                            </p>
                            <p className="font-normal text-f16 leading-5 text-ik_pink">
                              View on Map
                            </p>
                          </Stack>
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems={"center"}
                          >
                            <ImageComponent
                              src="/assets/static/image_8.png"
                              alt="Business Image"
                              width={25}
                              height={25}
                            />
                            <p className="font-normal text-f16 leading-5 text-ik_bluegreydarken2">
                              {business.experience} years in buisness,
                            </p>
                            <p className="font-bold text-f16 leading-5 text-ik_bluegreydarken2">
                              Since 1924
                            </p>
                          </Stack>
                          <Stack direction="row" spacing={1}>
                            {" "}
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems={"center"}
                            >
                              <ImageComponent
                                src="/assets/static/image_6.png"
                                alt="Business Image"
                                width={22}
                                height={11}
                              />
                              <p className="font-semibold text-f16 leading-5 text-ik_pink">
                                {business.inquiries} inquiries
                              </p>
                            </Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems={"center"}
                            >
                              <ImageComponent
                                src="/assets/static/image_9.png"
                                alt="Business Image"
                                width={30}
                                height={30}
                              />
                              <p className="font-semibold text-f16 leading-5 text-ik_pink">
                                {business.inquiries} inquiries
                              </p>
                            </Stack>
                          </Stack>
                        </Box>
                      </Link>

                      <Box
                        sx={{
                          display: { xs: "none", md: "flex" },
                          justifyContent: "flex-end",
                        }}
                      >
                        <Stack direction="column">
                          <Stack
                            direction="row"
                            spacing={"20px"}
                            alignItems={"center"}
                            justifyContent={"flex-end"}
                          >
                            <ImageComponent
                              src="/assets/static/image_10.png"
                              width={20}
                              height={16}
                              alt="static"
                            />
                            <p style={{ textAlign: "right" }}>
                              <span className="font-semibold text-f26 leading-8 text-ik_bluegreydarken3">
                                {business.rating}
                              </span>
                              /
                              <span className="font-normal text-f26 leading-8 text-ik_bluegreydarken3">
                                5
                              </span>
                            </p>
                          </Stack>

                          <p
                            style={{ textAlign: "right" }}
                            className="font-noraml text-f16 leading-5 text-ik_bluegreydarken1"
                          >
                            {business.reviews}Reviews
                          </p>
                          <Box mt={1}>
                            <CustomImageButton
                              image="/assets/static/image_7.png"
                              label="Enquiry"
                            ></CustomImageButton>
                          </Box>
                        </Stack>
                      </Box>
                    </Box>
                    <Box mt={4}>
                      <Stack direction="row" spacing={1}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <ImageComponent
                            src="/assets/static/image_11.png"
                            width={37.82}
                            height={36}
                            alt="static"
                          />
                        </Box>

                        <p className="font-semibold text-f16 leading-1 text-ik_bluegreydarken3">
                          Specialist in string instrument repairs. Pickup & Drop
                          service available across Chennai.
                        </p>
                      </Stack>
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
                  </Box>
                </Grid>
              </>
            </Grid>
          </Box>
        </Card>
      ))}
      <Box mt={2}>
        <ImageComponent
          src="/assets/static/image_18.png"
          width={1118}
          height={250}
        />
      </Box>
    </section>
  );
};

export default StudioCard;
