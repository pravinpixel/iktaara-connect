/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";

import { Box, Card, Grid } from "@mui/material";
// import CustomCard from "../CustomCard";
import { Stack } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

const CustomCard = dynamic(
  () => import("@/components/common/form-fields/CustomCard")
);
const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
const CustomImageButton = dynamic(
  () => import("@/components/common/form-fields/CustomImageButton")
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StudioCard = ({ buisnessListData }: any) => {
  return (
    <section className="mt-[12.68px]">
      {buisnessListData.data.map((business: any) => (
        <Card className="w-full h-full bg-white mt-[16px] " key={business.id}>
          <Box className="pt-[10px] pl-[10px]  pr-[19.18px] pb-[10.6px] ">
             <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
              }}
            >
              {/* First Item - Flex with fixed width */}
              <Box
                sx={{
                  flexBasis: "312px",
                  flexShrink: 0,
                  width: { xs: "100%", md: "312px" }, // Full width on small screens, fixed on larger
                  marginBottom: { xs: "16px", md: 0 },
                }}
              >
                  <Link
                    href={`/business/${business?.slug || ""}/${
                      business?.music_title || ""
                    }`}
                  >
                    
                    <CustomCard
                      variant="bottom-right"
                      img={business.image}
                      img1={business.logo_image}
                      type={true}
                      text=""
                      reviews={""}
                      typebottom={false}
                      width={"312px"}
                      height={"226px"}
                    />
                  </Link>
                </Box>
               <Box sx={{ flexGrow: 1, pl: { md: "20px" } }}>
                  <Box >
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
                          <p className="font-bold text-f24 leading-8 text-ik_bluegreydarken3 pt-[6px]">
                            {business.title}
                          </p>
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems={"center"}
                            className="pt-[12px]"
                          >
                            <ImageComponent
                              src="/assets/static/image_5.png"
                              alt="Business Image"
                              width={19}
                              height={20}
                            />
                            <p className="font-normal text-f16 leading-5 text-ik_bluegreydarken2 ">
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
                            className="pt-[6px]"
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
                              spacing={"10px"}
                              alignItems={"center"}
                              className="pt-[8px]"
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
                              className="pt-[8px]"
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
                          paddingTop: "6px",
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
                             
                              <span className="font-normal text-f26 leading-8 text-ik_bluegreydarken3">
                                /5
                              </span>
                            </p>
                          </Stack>

                          <p
                            style={{ textAlign: "right" }}
                            className="font-noraml text-f16 leading-5 text-ik_bluegreydarken1 pt-[2px]"
                          >
                            {business.reviews}&nbsp;Reviews
                          </p>
                          <Box mt={"15.1px"}>
                            <CustomImageButton
                              image="/assets/static/image_7.png"
                              label="Enquiry"
                              newclass="w-[200px] h-[60px]"
                            ></CustomImageButton>
                          </Box>
                        </Stack>
                      </Box>
                    </Box>
                    <Box mt={"50px"}>
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

                          {/* <p
                            style={{ textAlign: "right" }}
                            className="font-normal text-f16 leading-5 text-ik_bluegreydarken1"
                          >
                            {business.reviews} Reviews
                          </p> */}
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
           
            </Box>
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


