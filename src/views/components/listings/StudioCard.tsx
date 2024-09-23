/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";

import { Box, Card, Grid } from "@mui/material";
import CustomCard from "../CustomCard";
import { Stack } from "@mui/material";

import CustomImageButton from "../CustomImageButton";

const StudioCard = () => {
  const businesses = [
    {
      id: 1,
      name: "Schmitt Music Repair Services",
      location: "Nungambakkam",
      inquiries: 120,
      imgSrc: "images/static/image_5.png",
      icon: "Schmitt Music Icon",
    },
    {
      id: 2,
      name: "Muzik & Art",
      location: "Nungambakkam",
      inquiries: 115,
      imgSrc: "images/static/image_5.png",
      icon: "Music & Arts Icon",
    },
    {
      id: 3,
      name: "Music Doctor",
      location: "Nungambakkam",
      inquiries: 105,
      imgSrc: "images/static/image_5.png",
      icon: "Music Doctor Icon",
    },
  ];

  return (
    <section style={{ marginTop: "15px" }}>
      {businesses.map((business) => (
        <Card
          sx={{
            width: "100%",
            height: "100%",
            background: "white",
            marginTop: "15px",
          }}
        >
          <Box sx={{ px: 2, pt: 2, pb: 0 }}>
            <Grid container>
              <>
                {" "}
                <Grid item xs={4}>
                  <CustomCard
                    variant="bottom-right"
                    img="/images/static/image_13.png"
                    img1="/images/static/image_12.png"
                  />
                </Grid>
                <Grid item xs={8}>
                  <Box sx={{ padding: 2 }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box>
                        <p className="font-bold text-f24 leading-8 text-ik_bluegreydarken3">
                          {business.name}
                        </p>
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <img
                            src={business.imgSrc}
                            alt="Business Image"
                            style={{ width: "19px", height: "20px" }}
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
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <img
                            src="images/static/image_8.png"
                            alt="Business Image"
                            style={{ width: "25px", height: "25px" }}
                          />
                          <p className="font-normal text-f16 leading-5 text-ik_bluegreydarken2">
                            {business.inquiries} inquiries
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
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              src="images/static/image_6.png"
                              alt="Business Image"
                              style={{ width: "22px", height: "11px" }}
                            />
                            <p className="font-semibold text-f16 leading-5 text-ik_pink">
                              {business.inquiries} inquiries
                            </p>
                          </Stack>
                          <Stack
                            direction="row"
                            spacing={1}
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              src="images/static/image_9.png"
                              alt="Business Image"
                              style={{ width: "30px", height: "30px" }}
                            />
                            <p className="font-semibold text-f16 leading-5 text-ik_pink">
                              {business.inquiries} inquiries
                            </p>
                          </Stack>
                        </Stack>
                      </Box>

                      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Stack direction="column">
                          <Stack direction="row" spacing={"20px"}>
                            <img
                              src="/images/static/image_10.png"
                              width="20px"
                              height="16px"
                            />
                            <p style={{ textAlign: "right" }}>
                              <span className="font-semibold text-f26 leading-8 text-ik_bluegreydarken3">
                                4.5
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
                            100 Reviews
                          </p>
                          <CustomImageButton
                            image="images/static/image_7.png"
                            width="27.57"
                            height="27.57px"
                            label="Enquiry"
                          ></CustomImageButton>
                        </Stack>
                      </Box>
                    </Box>
                    <Box mt={4}>
                      <Stack direction="row" spacing={1}>
                        <img
                          src="/images/static/image_11.png"
                          width="37.82px"
                          height="36px"
                        ></img>
                        <p className="font-semibold text-f16 leading-8 text-ik_bluegreydarken3">
                          Specialist in string instrument repairs. Pickup & Drop
                          service available across Chennai.
                        </p>
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
  );
};

export default StudioCard;
