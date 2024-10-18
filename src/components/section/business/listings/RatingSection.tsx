/* eslint-disable react/jsx-key */
import React from "react";

import { FormProvider, useForm } from "react-hook-form";
import { Box, Stack } from "@mui/material";
import dynamic from "next/dynamic";
const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
const CustomCheckbox = dynamic(
  () => import("@/components/common/form-fields/CheckBox")
);

const RatingSection = () => {
  const methods = useForm();

  const image = [
    {
      id: 1,

      imgSrc: "/assets/static/image_15.png",
    },
    {
      id: 2,

      imgSrc: "/assets/static/image_16.png",
    },
    {
      id: 3,

      imgSrc: "/assets/static/image_17.png",
    },
  ];

  return (
    <FormProvider {...methods}>
      <Box mt={"22.22px"}>
        <>
          {" "}
          <p className="font-semibold text-f18 leading-6 text-ik_bluegreydarken3">
            Ratings
          </p>
          <Box mt={"12.5px"}>
            {" "}
            {image?.map((row) => (
              <Stack
                key={row.id}
                direction="row"
                alignItems={"center"}
                sx={{ height: "36px" }}
              >
                <CustomCheckbox name={`rating_${row.id}`} label="" />
                <Box>
                  <ImageComponent
                    src={row.imgSrc}
                    width={135}
                    height={135}
                    alt="filter"
                  />
                </Box>
              </Stack>
            ))}
          </Box>
        </>
      </Box>
    </FormProvider>
  );
};

export default RatingSection;
