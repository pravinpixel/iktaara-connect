/* eslint-disable react/jsx-key */
import React from "react";

import { Box, Card, Grid, Stack, useTheme } from "@mui/material";
import dynamic from "next/dynamic";

const AddressSection = dynamic(() => import("./Address"));
const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);

const BusinessSection = () => {
  const theme = useTheme();

  return (
    <section className="mt-[16.2px]">
      {" "}
      <Card className="w-full h-full bg-white">
        <Box
          sx={{ borderTop: `6px solid ${theme.palette.customColor.ik_pink}` }}
        >
          <Box>
            <Box
              sx={{
                background: theme.palette.customColor.ik_pink,
                ml: "20.93px",
                textAlign: "center",
                borderRadius: "0px 0px 9px 9px",
                padding: "6px 16px 6px 16px",
                color: theme.palette.customColor.ik_white,
                width: "fit-content",
              }}
            >
              <Stack className="flex-row items-center gap-1 ">
                <ImageComponent
                  src="/assets/static/image_4.png"
                  alt="Business Image"
                  width={21}
                  height={10}
                  priority={true}
                  // style={{ width: "22px", height: "11px" }}s
                />
                <p className="text-f16 font-semibold leading-8 ">
                  {" "}
                  Top Businesses by Enquiries
                </p>
              </Stack>
            </Box>
          </Box>
        </Box>
        <AddressSection />
      </Card>
    </section>
  );
};

export default BusinessSection;
