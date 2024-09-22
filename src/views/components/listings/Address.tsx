/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";
import { Box, Card, Grid, Stack, useTheme } from "@mui/material";
import CustomCard from "../CustomCard";
import CustomButton from "../form-fields/CustomButton";
import CustomSmallButton from "../form-fields/CustomSmallButton";

const AddressSection = () => {
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
    <Box sx={{ mt: 2 }}>
      <Grid container>
        {" "}
        {businesses.map((business) => (
          <Grid item xs={4}>
            <>
              {" "}
              <CustomCard
                variant="bottom-right"
                img="images/static/image_1.png"
                img1="images/static/image_12.png"
              />
              <Box sx={{ padding: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
                        src="images/static/image_6.png"
                        alt="Business Image"
                        style={{ width: "22px", height: "11px" }}
                      />
                      <p>{business.inquiries} inquiries</p>
                    </Stack>
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <CustomSmallButton
                      image="images/static/image_7.png"
                      width="27.57"
                      height="27.57px"
                    ></CustomSmallButton>
                    {/* <p style={{ textAlign: "right" }}>{business.icon}</p> */}
                  </Box>
                </Box>
              </Box>
            </>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AddressSection;
