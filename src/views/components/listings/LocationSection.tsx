/* eslint-disable react/jsx-key */
import React from "react";

import { Box, Card, Grid, Stack, useTheme } from "@mui/material";

import ImageComponent from "../imageComponent";

import CustomCheckbox from "../form-fields/CheckBox";
import { FormProvider, useForm } from "react-hook-form";

const LocationSection = () => {
  const theme = useTheme();
  const methods = useForm();

  const image = [
    {
      id: 1,

      imgSrc: "/images/static/image_15.png",
    },
    {
      id: 2,

      imgSrc: "/images/static/image_16.png",
    },
    {
      id: 3,

      imgSrc: "/images/static/image_17.png",
    },
  ];
  const location = [
    {
      id: 1,

      name: "Adayar",
    },
    {
      id: 2,

      name: "Nungampakkam",
    },
    {
      id: 3,

      name: "Velachery",
    },
  ];
  return (
    <FormProvider {...methods}>
      <Box mt={1}>
        <>
          {" "}
          <p className="font-semibold text-f18 leading-6 text-ik_bluegreydarken3">
            Location
          </p>
          <Box mt={1}>
            {" "}
            {location?.map((row, i) => (
              <Stack
                key={i}
                direction="row"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <CustomCheckbox name={`rating_${row.id}`} label="" />
                <Box sx={{ paddingTop: "5px" }}>
                  <p className="font-normal text-f18 leading-9 text-ik_bluegreydarken1">
                    {row.name}
                  </p>
                </Box>
              </Stack>
            ))}
            <p className="font-normal text-f18 leading-9 text-ik_pink ">
              View All
            </p>
          </Box>
        </>
      </Box>
    </FormProvider>
  );
};

export default LocationSection;
