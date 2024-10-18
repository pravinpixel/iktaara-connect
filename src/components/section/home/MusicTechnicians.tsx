/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import Slider from "react-slick";

import dynamic from "next/dynamic";
const CartComponent = dynamic(
  () => import("@/components/section/cart-component")
);
const ViewAllComponent = dynamic(
  () => import("@/components/common/ViewAllComponent")
);
const CustomContainer = dynamic(
  () => import("@/components/common/form-fields/Container")
);
type Props = {
  musictechniciansection: any;
  className: string;
  title: string;
};
const MusicTechnicians = (props: Props) => {
  const { musictechniciansection, title, className } = props;

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    swipe: musictechniciansection?.length > 4 ? true : false,
    dots: musictechniciansection?.length > 4 ? true : false,
    infinite: musictechniciansection?.length > 4 ? true : false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: musictechniciansection?.length >= 4 ? 4 : 1,
    // lazyLoad: "progressive",
    lazyLoad: "ondemand" as "ondemand" | "progressive" | undefined,
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
          slidesToShow: 3,
          slidesToScroll: 3,
          swipe: true,
        },
      },
    ],
  };

  const slug = musictechniciansection?.[0]?.slug || "";
  return (
    <section className={className}>
      <CustomContainer>
        <div className="flex items-center gap-3 mb-[29px]">
          <div className="text-f28 font-semibold text-ik_bluegreydarken4">
            <span>{title}</span>
          </div>
          <ViewAllComponent slug={slug} />
        </div>
        <div className="music-section-sec">
          <Slider {...settings}>
            {musictechniciansection?.map((item: any) => (
              <CartComponent cartData={item} key={item?.id} />
            ))}
          </Slider>
        </div>
      </CustomContainer>
    </section>
  );
};

export default MusicTechnicians;
