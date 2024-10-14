/* eslint-disable react/jsx-key */
import React from "react";
import { Stack } from "@mui/material";
import dynamic from "next/dynamic";

const ImageComponent = dynamic(() => import("../ImageComponent"));
const LocationSection = dynamic(() => import("./LocationSection"));
const InstrumentType = dynamic(() => import("./InstrumentTypes"));
const RatingSection = dynamic(() => import("./RatingSection"));
const FilterSection = () => {
  return (
    <section className="bg-ik_white rounded-xl p-[20px] mt-[15px]">
      <Stack direction="row" spacing={2} alignItems={"center"}>
        <ImageComponent
          src="/assets/static/image_14.png"
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
