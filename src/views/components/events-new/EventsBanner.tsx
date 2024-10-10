/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment } from "react";
import Slider from "react-slick";
import ImageComponent from "../ImageComponent";

// type Props = {
//   Eventssections: any;
// };

type Props = {
  Eventssections: Array<{
    id: number;
    banner_image: string;
    event_name: string;
  }>;
  height: number;
};

const EventsBanners = (props: Props) => {
  const { Eventssections, height } = props;

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: Eventssections?.length > 1 ? true : false,
    infinite: Eventssections?.length > 1 ? true : false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "110px",
    className: "center",
    centerMode: true,
    dots: true,
    lazyLoad: "progressive" as const,
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
    <section className="best-sellers-section bg-cover bg-no-repeat pt-5 pb-6">
      <div>
        <Slider {...settings}>
          {Eventssections?.map((item: any) => (
            <Fragment key={item?.id}>
              <div>
                <ImageComponent
                  src={item?.banner_image}
                  width={1496}
                  height={height ? height : 491}
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

export default EventsBanners;
