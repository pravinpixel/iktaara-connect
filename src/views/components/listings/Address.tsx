/* eslint-disable react/jsx-key */
import React from "react";
import { Box, Card, Grid, useTheme } from "@mui/material";
import CustomCard from "../CustomCard";

const AddressSection = () => {
  const businesses = [
    {
      id: 1,
      name: "Schmitt Music Repair Services",
      location: "Nungambakkam",
      inquiries: 120,
      imgSrc: "/path-to-image-1.jpg", // Replace with your image path
      icon: "Schmitt Music Icon",
    },
    {
      id: 2,
      name: "Muzik & Art",
      location: "Nungambakkam",
      inquiries: 115,
      imgSrc: "/path-to-image-2.jpg",
      icon: "Music & Arts Icon",
    },
    {
      id: 3,
      name: "Music Doctor",
      location: "Nungambakkam",
      inquiries: 105,
      imgSrc: "/path-to-image-3.jpg",
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
                img1="images/static/image_2.png"
              />
              <Box sx={{ padding: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box>
                    <p>{business.name}</p>
                    <p>{business.location}</p>
                    <p>{business.inquiries} inquiries</p>
                  </Box>

                  <Box>
                    <p style={{ textAlign: "right" }}>{business.icon}</p>
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
