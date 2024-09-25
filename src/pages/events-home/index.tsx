import EventsBanners from "@/views/components/events-new/EventsBanner";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventsTitle from "@/views/components/events-new/EventsTitle";
import HostEventsBanner from "@/views/components/events-new/HoseEventsBanner";
import EventsThisWeek from "@/views/components/events-new/EventsThisWeek";

const EventsHome = () => {
  const Events = [
    {
      id: 1,
      banner_image: "/assets/image/events-img.webp",
      event_name: "New",
    },
    {
      id: 2,
      banner_image: "/assets/image/events-img.webp",
      event_name: "New",
    },
    {
      id: 3,
      banner_image: "/assets/image/events-img.webp",
      event_name: "New",
    },
  ];
  const musictechnician_data = [
    {
      id: 1,
      music_image: "/images/static/image_23.png",
      music_logo: "/assets/image/music-logo1.png",
      music_reviews: "4.5 (3 Reviews)",
      music_title: "MUSIC & ARTS",
      music_location: "Adyar",
      music_text: "Specialist in Piano, Violin",
    },
    //   {
    //     "id": 1,
    //     "event_name": "varchar",
    //     "event_date": "date",
    //     "event_type": "varchar",
    //     "event_price": int,
    //     "thumbnail_image": "path of the image"
    // },
    {
      id: 2,
      music_image: "/images/static/image_23.png",
      music_logo: "/assets/image/music-logo2.png",
      music_reviews: "4.5 (22 Reviews)",
      music_title: "MUSIC & ARTS",
      music_location: "Adyar",
      music_text: "Specialist in Piano, Violin",
    },
    {
      id: 3,
      music_image: "/images/static/image_23.png",
      music_logo: "/assets/image/music-logo3.png",
      music_reviews: "4.5 (22 Reviews)",
      music_title: "MUSIC & ARTS",
      music_location: "Adyar",
      music_text: "Specialist in Piano, Violin",
    },
    {
      id: 4,
      music_image: "/images/static/image_23.png",
      music_logo: "/assets/image/music-logo4.png",
      music_reviews: "4.5 (22 Reviews)",
      music_title: "MUSIC & ARTS",
      music_location: "Adyar",
      music_text: "Specialist in Piano, Violin",
    },
    {
      id: 5,
      music_image: "/images/static/image_23.png",
      music_logo: "/assets/image/music-logo1.png",
      music_reviews: "4.5 (22 Reviews)",
      music_title: "MUSIC & ARTS",
      music_location: "Adyar",
      music_text: "Specialist in Piano, Violin",
    },
  ];

  return (
    <>
      <EventsTitle label="Events" subLabel="in Chennai" />
      <EventsBanners Eventssections={Events} />
      <HostEventsBanner />
      <EventsThisWeek
        musictechniciansection={musictechnician_data}
        className={"flex pt-5 pb-5 bg-ik_white"}
        title={"This Week "}
      />
    </>
  );
};

export default EventsHome;
