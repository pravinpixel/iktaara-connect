/* eslint-disable @typescript-eslint/no-explicit-any */

import { Container } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import ThisWeekData from "./ThisWeekData";

type Props = {
  musictechniciansection: any;
  className: string;
  title: string;
};
const EventsThisWeek = (props: Props) => {
  const { musictechniciansection, title, className } = props;

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    swipe: musictechniciansection?.length > 5 ? true : false,
    dots: musictechniciansection?.length > 5 ? true : false,
    infinite: musictechniciansection?.length > 5 ? true : false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: musictechniciansection?.length >= 5 ? 5 : 1,
    lazyLoad: "progressive",
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
          slidesToShow: 3,
          slidesToScroll: 3,
          swipe: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          swipe: true,
        },
      },
    ],
  };
  return (
    <section className={className}>
      <Container
        maxWidth={"lg"}
        sx={{ maxWidth: { xl: "89% !important", lg: "89%" } }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="text-f24 font-bold text-ik_bluegreydarken6 leading-9">
            <span>{title}</span>
          </div>
          <div>
            {/* <button>
              <span className=" text-f18 text-ik_pink font-normal">
                View All
              </span>
            </button> */}
          </div>
        </div>
        <div className="music-section-sec1">
          <Slider {...settings}>
            {musictechniciansection?.map((item: any) => (
              <ThisWeekData cartData={item} key={item?.id} />
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default EventsThisWeek;
