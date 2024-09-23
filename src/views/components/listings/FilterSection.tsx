/* eslint-disable react/jsx-key */
import React from "react";

import { Box, Card, Grid, Stack, useTheme } from "@mui/material";

import ImageComponent from "../imageComponent";

import CustomCheckbox from "../form-fields/CheckBox";
import { FormProvider, useForm } from "react-hook-form";
import LocationSection from "./LocationSection";
import InstrumentType from "./InstrumentTypes";
import RatingSection from "./RatingSection";

const FilterSection = () => {
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
    <section
      style={{
        marginTop: "15px",
        background: "white",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <ImageComponent
          src="/images/static/image_14.png"
          width={24}
          height={16}
          alt="filter"
        />
        <p className="font-semibold text-f22 leading-7 text-ik_bluegreydarken3">
          Filter By
        </p>
      </Stack>
      <RatingSection />
      <LocationSection />
      <InstrumentType />
    </section>
  );
};

export default FilterSection;
