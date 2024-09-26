/* eslint-disable react/jsx-key */
import React from "react";

import { Box, Card, Grid, Stack, useTheme } from "@mui/material";
import dynamic from "next/dynamic";

const AddressSection = dynamic(() => import("./Address"));
const ImageComponent = dynamic(() => import("../ImageComponent"));

const BusinessSection = () => {
  const theme = useTheme();

  return (
    <section className="mt-[15px]">
      {" "}
      <Card className="w-full h-full bg-white">
        <Grid
          container
          sx={{ borderTop: `6px solid ${theme.palette.customColor.ik_pink}` }}
        >
          <Grid item xs={4.5}>
            <Box
              sx={{
                background: theme.palette.customColor.ik_pink,
                ml: 3,
                textAlign: "center",
                borderRadius: "0px 0px 9px 9px",
                padding: "5px",
                color: theme.palette.customColor.ik_white,
              }}
            >
              <Stack
                direction="row"
                alignItems={"center"}
                justifyContent={"center"}
                gap={"5px"}
              >
                <ImageComponent
                  src="/images/static/image_4.png"
                  alt="Business Image"
                  width={21}
                  height={10}
                  priority={true}
                  // style={{ width: "22px", height: "11px" }}s
                />
                <p className="text-f16 font-semibold leading-8">
                  {" "}
                  Top Businesses by Enquiries
                </p>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <AddressSection />
      </Card>
    </section>
  );
};

export default BusinessSection;
