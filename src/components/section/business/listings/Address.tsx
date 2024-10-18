/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";
import { Box, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import Slider from "react-slick";
import Link from "next/link";

const CustomCard = dynamic(
  () => import("@/components/common/form-fields/CustomCard")
);
const CustomSmallButton = dynamic(
  () => import("@/components/common/form-fields/CustomSmallButton")
);
const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);

const AddressSection = () => {
  const businesses = [
    {
      id: 1,
      name: "Schmitt Music Repair Services",
      location: "Nungambakkam",
      inquiries: 120,
      imgSrc: "/assets/static/image_5.png",
      icon: "Schmitt Music Icon",
      slug: "technicians",
      music_title: "Schmitt Music Repair Services",
    },
    {
      id: 2,
      name: "Muzik & Art",
      location: "Nungambakkam",
      inquiries: 115,
      imgSrc: "/assets/static/image_5.png",
      icon: "Music & Arts Icon",
      slug: "technicians",
      music_title: "Schmitt Music Repair Services",
    },
    {
      id: 3,
      name: "Music Doctor",
      location: "Nungambakkam",
      inquiries: 105,
      imgSrc: "/assets/static/image_5.png",
      icon: "Music Doctor Icon",
      slug: "technicians",
      music_title: "Schmitt Music Repair Services",
    },
    // {
    //   id: 4,
    //   name: "Music Doctor",
    //   location: "Nungambakkam",
    //   inquiries: 105,
    //   imgSrc: "/assets/static/image_5.png",
    //   icon: "Music Doctor Icon",
    // },
    // {
    //   id: 5,
    //   name: "Music Doctor",
    //   location: "Nungambakkam",
    //   inquiries: 105,
    //   imgSrc: "/assets/static/image_5.png",
    //   icon: "Music Doctor Icon",
    // },
    // {
    //   id: 6,
    //   name: "Music Doctor",
    //   location: "Nungambakkam",
    //   inquiries: 105,
    //   imgSrc: "/assets/static/image_5.png",
    //   icon: "Music Doctor Icon",
    // },
  ];
  const settings = {
    autoplay: true,

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
          slidesToShow: 2,
          slidesToScroll: 2,
          swipe: true,
        },
      },
    ],
  };
  return (
    <Box className="mt-[12px] ml-[19.18px] mb-[13.48px] mr-[19.18px]">
      {/* <Grid container> */}{" "}
      <Slider {...settings} className="business-slick">
        {businesses.map((business) => (
          // <Grid item xs={4} p={2}>
          <Link
            href={`/business/${business?.slug || ""}/${
              business?.music_title || ""
            }`}
          >
            <Box key={business.id} className="pr-[15.18px]  w-[348px]">
              <CustomCard
                variant="bottom-right"
                img="/assets/static/image_13.png"
                img1="/assets/static/image_2.png"
                type={true}
                text={""}
                reviews={""}
                typebottom={false}
              />
              <Box className="flex justify-between mt-[12px] ">
                <Box>
                  <p className="text-f22 leading-7 font-bold">
                    {business.name}
                  </p>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                  >
                    <ImageComponent
                      src={business.imgSrc}
                      alt="Business Image"
                      width={22}
                      height={22}
                    />
                    <p className="font-normal text-f16 leading-5 text-ik_bluegreydarken3 py-[6.41px] ">
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
          </Link>
          // </Grid>
        ))}
      </Slider>
      {/* </Grid> */}
    </Box>
  );
};

export default AddressSection;
