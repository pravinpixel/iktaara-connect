import React from 'react'
import Slider from 'react-slick';
import CaetComponent from '../cart-component';

const ListingStoresComponents = () => {

     const musictechnician_data = [
       {
         id: 1,
         music_image: "/assets/image/music-arts.webp",
         music_logo: "/assets/image/music-logo1.png",
         music_reviews: "4.5 (22 Reviews)",
         music_title: "MUSIC & ARTS",
         music_location: "Adyar",
         music_text: "Specialist in Piano, Violin",
       },
       {
         id: 2,
         music_image: "/assets/image/schmitt.webp",
         music_logo: "/assets/image/music-logo2.png",
         music_reviews: "4.5 (22 Reviews)",
         music_title: "MUSIC & ARTS",
         music_location: "Adyar",
         music_text: "Specialist in Piano, Violin",
       },
       {
         id: 3,
         music_image: "/assets/image/kzone.webp",
         music_logo: "/assets/image/music-logo3.png",
         music_reviews: "4.5 (22 Reviews)",
         music_title: "MUSIC & ARTS",
         music_location: "Adyar",
         music_text: "Specialist in Piano, Violin",
       },
       {
         id: 4,
         music_image: "/assets/image/music-doctor.webp",
         music_logo: "/assets/image/music-logo4.png",
         music_reviews: "4.5 (22 Reviews)",
         music_title: "MUSIC & ARTS",
         music_location: "Adyar",
         music_text: "Specialist in Piano, Violin",
       },
       {
         id: 5,
         music_image: "/assets/image/music-arts.webp",
         music_logo: "/assets/image/music-logo1.png",
         music_reviews: "4.5 (22 Reviews)",
         music_title: "MUSIC & ARTS",
         music_location: "Adyar",
         music_text: "Specialist in Piano, Violin",
       },
     ];
    
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    swipe: musictechnician_data?.length > 4 ? true : false,
    dots: musictechnician_data?.length > 4 ? true : false,
    infinite: musictechnician_data?.length > 4 ? true : false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: musictechnician_data?.length >= 4 ? 4 : 1,
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
          {musictechnician_data?.map((row) => (
            <CaetComponent cartData={row} key={row?.id} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ListingStoresComponents