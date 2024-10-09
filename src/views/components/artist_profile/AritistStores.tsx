import React from "react";
import Slider from "react-slick";
import ArtistComponent from "../cart-component/ArtistComponent";

const AritistStoresComponents = () => {
  const artists_data = [
    {
      id: 1,
      artists_image: "/assets/image/ramaniya.webp",
      artists_name: "Ramaniya",
      artists_title: "Hindustani",
      artists_reviews: "4.5 (22 Reviews)",
      artists_text: "Online",
    },
    {
      id: 2,
      artists_image: "/assets/image/kirankumar.webp",
      artists_name: "Kirankumar",
      artists_title: "Hindustani, Classical, Western",
      artists_reviews: "4.5 (22 Reviews)",
      artists_text: "Travels Anywhere, Online, Face 2 Face",
    },
    {
      id: 3,
      artists_image: "/assets/image/jones.webp",
      artists_name: "Chitra Jones",
      artists_title: "Classical, Western",
      artists_reviews: "4.5 (22 Reviews)",
      artists_text: "Classical, Western, Hindustani",
    },
    {
      id: 4,
      artists_image: "/assets/image/john.webp",
      artists_name: "Abraham John",
      artists_title: "Hindustani, Classical",
      artists_reviews: "4.5 (22 Reviews)",
      artists_text: "Classical, Western, Hindustani",
    },
    {
      id: 5,
      artists_image: "/assets/image/prakash.webp",
      artists_name: "Prakash Thirupuzhal",
      artists_title: "Hindustani, Classical",
      artists_reviews: "4.5 (22 Reviews)",
      artists_text: "Classical, Western, Hindustani",
    },

    {
      id: 6,
      artists_image: "/assets/image/prabhakar.webp",
      artists_name: "Ram Prabhakar",
      artists_title: "Hindustani, Classical",
      artists_reviews: "4.5 (22 Reviews)",
      artists_text: "Classical, Western, Hindustani",
    },
    {
      id: 7,
      artists_image: "/assets/image/madhavi.webp",
      artists_name: "Madhavi Nair",
      artists_title: "Hindustani, Classical, Western",
      artists_reviews: "4.5 (22 Reviews)",
      artists_text: "Classical, Western, Hindustani",
    },

    {
      id: 8,
      artists_image: "/assets/image/vamshika.webp",
      artists_name: "Vamshika",
      artists_title: "Hindustani, Classical, Western",
      artists_reviews: "4.5 (22 Reviews)",
      artists_text: "Classical, Western, Hindustani",
    },
  ];
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    swipe: artists_data?.length > 4 ? true : false,
    dots: artists_data?.length > 4 ? true : false,
    infinite: artists_data?.length > 4 ? true : false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: artists_data?.length >= 4 ? 4 : 1,
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
    <section className="mb-14 pt-5">
      <div className="text-f26 font-bold mb-5">
        <h6 className="text-ik_bluegreydarken3 ">
          Most Viewed <span className="text-ik_pink">Stores</span>
        </h6>
      </div>
      <div className="music-section-sec">
        <Slider {...settings}>
          {artists_data?.map((row) => (
            <ArtistComponent cartData={row} key={row?.id} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AritistStoresComponents;
