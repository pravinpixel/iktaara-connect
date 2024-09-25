/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
const CustomContainer = dynamic(() => import("../Container"));
import { Stack } from "@mui/material";
const CustomCardEventsCategory = dynamic(
  () => import("../CustomCardsEventsCategory")
);

type EventsTitleProps = {
  label: string;
};

const businesses = [
  {
    id: 1,
    name: "Schmitt Music Repair Services",
    location: "Nungambakkam",
    inquiries: 120,
    imgSrc: "/images/static/image_24.png",
    icon: "Schmitt Music Icon",
  },
  {
    id: 2,
    name: "Muzik & Art",
    location: "Nungambakkam",
    inquiries: 115,
    imgSrc: "/images/static/image_24.png",
    icon: "Music & Arts Icon",
  },
  {
    id: 3,
    name: "Music Doctor",
    location: "Nungambakkam",
    inquiries: 105,
    imgSrc: "/images/static/image_24.png",
    icon: "Music Doctor Icon",
  },
  {
    id: 3,
    name: "Music Doctor",
    location: "Nungambakkam",
    inquiries: 105,
    imgSrc: "/images/static/image_24.png",
    icon: "Music Doctor Icon",
  },
  {
    id: 3,
    name: "Music Doctor",
    location: "Nungambakkam",
    inquiries: 105,
    imgSrc: "/images/static/image_24.png",
    icon: "Music Doctor Icon",
  },
  // {
  //   id: 3,
  //   name: "Music Doctor",
  //   location: "Nungambakkam",
  //   inquiries: 105,
  //   imgSrc: "/images/static/image_24.png",
  //   icon: "Music Doctor Icon",
  // },
  // {
  //   id: 3,
  //   name: "Music Doctor",
  //   location: "Nungambakkam",
  //   inquiries: 105,
  //   imgSrc: "/images/static/image_24.png",
  //   icon: "Music Doctor Icon",
  // },
];

const EventsByCategory = (props: EventsTitleProps) => {
  const { label } = props;
  return (
    <Box className="bg-ik_lightbluevariant ">
      <CustomContainer>
        <Stack
          direction="row"
          spacing={2}
          alignItems={"center"}
          className="my-3"
        >
          <Typography className="font-bold text-f24 text-ik_bluegreydarken6 leading-9">
            {label}{" "}
          </Typography>
        </Stack>

        <div className="flex flex-wrap gap-2 my-7">
          {" "}
          {businesses.map((business) => (
            <div className="" key={business.id}>
              {" "}
              <CustomCardEventsCategory
                img={business.imgSrc}
                text={business.name}
                reviews={""}
                typebottom={false}
              />
            </div>
          ))}
        </div>
      </CustomContainer>
    </Box>
  );
};

export default EventsByCategory;
