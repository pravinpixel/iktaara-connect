
// export default CenterMode


import React from "react";
import { Box, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import Slider from "react-slick";
import Link from "next/link";

const CustomCard = dynamic(() => import("@/components/common/form-fields/CustomCard"));
const CustomSmallButton = dynamic(() => import("@/components/common/form-fields/CustomSmallButton"));
const ImageComponent = dynamic(() => import("@/components/common/form-fields/ImageComponent"));

function AddressSection() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,  // Number of slides visible at once
    speed: 500,
    arrows: true,     // Enable navigation arrows if needed
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // For tablet screens
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // For mobile screens
          centerPadding: "20px",
        }
      }
    ]
  };

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
    {
      id: 4,
      name: "Music Doctor",
      location: "Nungambakkam",
      inquiries: 105,
      imgSrc: "/assets/static/image_5.png",
      icon: "Music Doctor Icon",
      slug: "technicians",
      music_title: "Schmitt Music Repair Services",
    },
    {
      id: 5,
      name: "Music Doctor",
      location: "Nungambakkam",
      inquiries: 105,
      imgSrc: "/assets/static/image_5.png",
      icon: "Music Doctor Icon",
      slug: "technicians",
      music_title: "Schmitt Music Repair Services",
    }
  ];

  return (
    <Box className="mt-[12px] ml-[19.18px] mb-[13.48px] mr-[19.18px]"><div className="slider-container">
      <Slider {...settings}>
        {businesses.map((business) => (
          <div className="slide-item" key={business.id}>
           <Link
            href={`/business/${business?.slug || ""}/${business?.music_title || ""}`}
            key={business.id}
          >
            <Box
              className="pr-[10.18px]"
              sx={{
                width: "348px", // Fixed card width for all screen sizes
              }}
            >
              <CustomCard
                variant="bottom-right"
                img="/assets/static/image_13.png"
                img1="/assets/static/image_2.png"
                type={true}
                text={""}
                reviews={""}
                typebottom={false}
              />
              <Box className="flex justify-between mt-[12px]">
                <Box >
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
                      width={22}
                      height={22}
                    />
                    <p className="font-normal text-f16 leading-5 text-ik_bluegreydarken3 py-[6.41px]">
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
                      {business.inquiries} people enquired
                    </p>
                  </Stack>
                </Box>

                <Box className="flex justify-end">
                  <CustomSmallButton
                    image="/assets/static/image_7.png"
                    width={27.57}
                    height={27.57}
                  />
                </Box>
              </Box>
            </Box>
          </Link>
          </div>
        ))}
      </Slider>
    </div></Box>
    
  );
}

export default AddressSection;
