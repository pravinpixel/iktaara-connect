import React from "react";
import CustomCard from "../CustomCard";
import Slider from "react-slick";

const AritistVideoComponents = () => {
  const artists_data = [
    {
      id: 1,
      artists_image: "//assets/image/silder1.webp",
      artists_text: "Winning the Junior super singer award from Star Vijay TV",
    },
    {
      id: 2,
      artists_image: "//assets/image/silder2.webp",
      artists_text: "Stage performance at Singapore for 90’s Ilayaraja Hits",
    },
    {
      id: 3,
      artists_image: "//assets/image/silder3.webp",
      artists_text: "Singapore performance show organized by MK Events",
    },
  ];
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    swipe: artists_data?.length > 3 ? true : false,
    dots: artists_data?.length > 3 ? true : false,
    infinite: artists_data?.length > 3 ? true : false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: artists_data?.length >= 3 ? 3 : 1,
    lazyLoad: "ondemand" as "ondemand" | "progressive" | undefined,
    customPaging: () => <div className="reactslick-custom-dots " />,
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
    <section className="mb-7 pt-5">
      <div className="music-section-sec">
        <Slider className="" {...settings}>
          {artists_data?.map((row) => (
            <div key={row.id}>
              <CustomCard
                variant="bottom-left"
                img={row.artists_image}
                text={row?.artists_text}
                typebottomtop={true}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AritistVideoComponents;
