/* eslint-disable react/jsx-key */
import React from "react";
import { Stack } from "@mui/material";
import ImageComponent from "../imageComponent";
import LocationSection from "./LocationSection";
import InstrumentType from "./InstrumentTypes";
import RatingSection from "./RatingSection";

const FilterSection = () => {
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
