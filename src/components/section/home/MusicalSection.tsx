/* eslint-disable @typescript-eslint/no-explicit-any */

import dynamic from "next/dynamic";
const Musicscomponent = dynamic(
  () => import("@/components/section/cart-component/MusicsComponent")
);
const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
const CustomContainer = dynamic(
  () => import("@/components/common/form-fields/Container")
);
// import CustomContainer from "@/views/components/Container";
// import ImageComponent from "@/views/components/ImageComponent";
import React from "react";
import Slider from "react-slick";

type Props = {
  musicsection: any;
};
const MusicalSection = (props: Props) => {
  const { musicsection } = props;

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: musicsection?.length > 4 ? true : false,
    dots: musicsection?.length > 4 ? true : false,
    infinite: musicsection?.length > 4 ? true : false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: musicsection?.length >= 4 ? 4 : 1,
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
  return (
    <section className="pt-[40px] pb-[29.57px] relative">
      <CustomContainer>
        <div className="absolute top-16 z-[-1] left-0  2xl:left-1">
          <ImageComponent
            src={"/assets/image/star1.webp"}
            width={90}
            height={90}
            alt={"arrowdown"}
            priority={true}
          />
        </div>
        <div className="text-f28 font-semibold mb-[26.91px] text-ik_bluegreydarken4 leading-[35.28px]">
          <span>Destination for everyone with musical interest</span>
        </div>
        <div className="music-select">
          <Slider {...settings}>
            {musicsection?.map((item: any) => (
              <Musicscomponent musicsection={item} key={item?.id} />
            ))}
          </Slider>
        </div>
        <div className="absolute bottom-5  z-[-1] right-2  2xl:right-1">
          <ImageComponent
            src={"/assets/image/star2.webp"}
            width={90}
            height={90}
            alt={"arrowdown"}
            priority={true}
          />
        </div>
      </CustomContainer>
    </section>
  );
};

export default MusicalSection;
