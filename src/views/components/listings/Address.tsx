/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";
import { Box, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import Slider from "react-slick";
const CustomCard = dynamic(() => import("../CustomCard"));
const CustomSmallButton = dynamic(
  () => import("../form-fields/CustomSmallButton")
);
const ImageComponent = dynamic(() => import("../ImageComponent"));

const AddressSection = () => {
  const businesses = [
    {
      id: 1,
      name: "Schmitt Music Repair Services",
      location: "Nungambakkam",
      inquiries: 120,
      imgSrc: "/assets/static/image_5.png",
      icon: "Schmitt Music Icon",
    },
    {
      id: 2,
      name: "Muzik & Art",
      location: "Nungambakkam",
      inquiries: 115,
      imgSrc: "/assets/static/image_5.png",
      icon: "Music & Arts Icon",
    },
    {
      id: 3,
      name: "Music Doctor",
      location: "Nungambakkam",
      inquiries: 105,
      imgSrc: "/assets/static/image_5.png",
      icon: "Music Doctor Icon",
    },
    // {
    //   id: 4,
    //   name: "Music Doctor",
    //   location: "Nungambakkam",
    //   inquiries: 105,
    //   imgSrc: "/images/static/image_5.png",
    //   icon: "Music Doctor Icon",
    // },
    // {
    //   id: 5,
    //   name: "Music Doctor",
    //   location: "Nungambakkam",
    //   inquiries: 105,
    //   imgSrc: "/images/static/image_5.png",
    //   icon: "Music Doctor Icon",
    // },
    // {
    //   id: 6,
    //   name: "Music Doctor",
    //   location: "Nungambakkam",
    //   inquiries: 105,
    //   imgSrc: "/images/static/image_5.png",
    //   icon: "Music Doctor Icon",
    // },
  ];
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    swipe: businesses?.length > 5 ? true : false,
    dots: businesses?.length > 5 ? true : false,
    infinite: businesses?.length > 5 ? true : false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: businesses?.length >= 5 ? 5 : 1,
    lazyLoad: "progressive" as const,
    customPaging: () => <div className="reactslick-custom-dots" />,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          swipe: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          swipe: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          swipe: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          swipe: true,
        },
      },
    ],
  };
  return (
    <Box className="mt-[16px]s cursor-pointer">
      {/* <Grid container> */}{" "}
      <Slider {...settings}>
        {businesses.map((business) => (
          // <Grid item xs={4} p={2}>
          <Box key={business.id} px={1} py={1} style={{ margin: "0 10px" }}>
            {" "}
            <CustomCard
              variant="bottom-right"
              img="/assets/static/image_13.png"
              img1="/assets/static/image_12.png"
              type={true}
              text={""}
              reviews={""}
              typebottom={false}
            />
            <Box className="flex justify-between mt-2">
              <Box>
                <p className="text-f22 leading-7 font-bold">{business.name}</p>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems={"center"}
                  justifyContent={"flex-start"}
                >
                  <ImageComponent
                    src={business.imgSrc}
                    alt="Business Image"
                    width={19}
                    height={20}
                  />
                  <p className="font-normal text-f16 leading-5 text-ik_bluegreydarken3">
                    {business.location}
                  </p>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems={"center"}
                  justifyContent={"flex-start"}
                >
                  <ImageComponent
                    src="/assets/static/image_6.png"
                    alt="Business Image"
                    width={22}
                    height={11}
                  />
                  <p className="font-semibold text-f16 leading-5 text-ik_pink">
                    {business.inquiries} inquiries
                  </p>
                </Stack>
              </Box>

              <Box className="flex justify-end">
                <CustomSmallButton
                  image="/assets/static/image_7.png"
                  width={27.57}
                  height={27.57}
                ></CustomSmallButton>
                {/* <p style={{ textAlign: "right" }}>{business.icon}</p> */}
              </Box>
            </Box>
          </Box>
          // </Grid>
        ))}
      </Slider>
      {/* </Grid> */}
    </Box>
  );
};

export default AddressSection;
