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
    <section>
      {businesses.map((business) => (
        <Card sx={{ width: "1118px", height: "247px", background: "white" }}>
          <Box sx={{ mt: 2 }}>
            <Grid container>
              <>
                {" "}
                <Grid item xs={4}>
                  <CustomCard
                    variant="bottom-right"
                    img="images/static/image_1.png"
                    img1="images/static/image_12.png"
                    height="226px"
                    width="312px"
                  />
                </Grid>
                <Grid item xs={8}>
                  <Box sx={{ padding: 2 }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box>
                        <p>{business.name}</p>
                        <Stack direction="row" spacing={1}>
                          <img
                            src={business.imgSrc}
                            alt="Business Image"
                            style={{ width: "19px", height: "20px" }}
                          />
                          <p>{business.location}</p>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                          <img
                            src="images/static/image_8.png"
                            alt="Business Image"
                            style={{ width: "25px", height: "25px" }}
                          />
                          <p>{business.inquiries} inquiries</p>
                          <Stack direction="row"></Stack>
                        </Stack>
                        <Stack direction="row">
                          {" "}
                          <Stack direction="row" spacing={1}>
                            <img
                              src="images/static/image_6.png"
                              alt="Business Image"
                              style={{ width: "22px", height: "11px" }}
                            />
                            <p>{business.inquiries} inquiries</p>
                          </Stack>
                          <Stack direction="row" spacing={1}>
                            <img
                              src="images/static/image_9.png"
                              alt="Business Image"
                              style={{ width: "30px", height: "30px" }}
                            />
                            <p>{business.inquiries} inquiries</p>
                          </Stack>
                        </Stack>
                      </Box>

                      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Stack direction="column" spacing={1}>
                          <Stack direction="row" spacing={"20px"}>
                            <img
                              src="/images/static/image_10.png"
                              width="20px"
                              height="16px"
                            />
                            <p style={{ textAlign: "right" }}>
                              {business.icon}
                            </p>
                          </Stack>

                          <p style={{ textAlign: "right" }}>{business.icon}</p>
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
                        <p className="">
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
