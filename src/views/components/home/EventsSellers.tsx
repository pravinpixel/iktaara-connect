/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment } from "react";
import bg from "../../../../public/assets/image/bg.svg";
import bg1 from "../../../../public/assets/image/bg1.png";
import Slider from "react-slick";
import CustomContainer from "@/views/components/Container";
import ImageComponent from "../ImageComponent";

type Props = {
  Eventssections: any;
  bgChange: any;
};

const EventsSellers = (props: Props) => {
  const { Eventssections, bgChange } = props;
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: Eventssections?.length > 1 ? true : false,
    infinite: Eventssections?.length > 1 ? true : false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "59px",
    className: "center",
    centerMode: true,
    dots: true,
    lazyLoad: "ondemand" as "ondemand" | "progressive" | undefined,
    customPaging: () => <div className="reactslick-custom-dots" />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: "10px",
          arrows: true,
        },
      },
    ],
  };

  return (
    <section
      className="best-sellers-section bg-cover bg-no-repeat pt-5 pb-14"
      style={{
        backgroundImage: `url(${bgChange ? bg1.src : bg.src})`,
      }}
    >
      <div>
        <CustomContainer>
          <div className="text-f28 font-semibold mb-3 text-ik_bluegreydarken4">
            <span>Popular Events in the City</span>
          </div>
        </CustomContainer>
        <Slider {...settings} className="slider-white-dots">
          {Eventssections?.map((item: any) => (
            <Fragment key={item?.id}>
              <div>
                <ImageComponent
                  src={item?.image}
                  width={1496}
                  height={451}
                  alt="slide-imag"
                  className="w-full h-auto rounded-[7px]"
                />
              </div>
            </Fragment>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default EventsSellers;
