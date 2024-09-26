/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import dynamic from "next/dynamic";

import { wrapper } from "@/redux/store";
const EventsBanners = dynamic(
  () => import("@/views/components/events-new/EventsBanner")
);
const EventsTitle = dynamic(
  () => import("@/views/components/events-new/EventsTitle")
);

const EventsThisWeek = dynamic(
  () => import("@/views/components/events-new/EventsThisWeek")
);
import { eventHome } from "@/redux/services/eventService";

const EventDetailSection = dynamic(
  () => import("@/views/components/events-detailnew/EventDetailSection")
);
const EventsByCategory = dynamic(
  () => import("@/views/components/events-new/EventsByCategory")
);
// import { eventHome } from "@/redux/services/eventService";

const EventsDetails = ({ eventData }: any) => {
  console.log(eventData, "dddd");
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
      <EventDetailSection />
      <EventsThisWeek
        musictechniciansection={musictechnician_data}
        className={"flex pt-5 pb-5 bg-ik_white"}
        title={"Similar Events"}
      />
      <EventsByCategory label="Events by Category" />
    </>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    // Data to return in the catch block
    const fallbackData = {
      // error: 0,
      // status_code: 200,
      // message: "Data loaded successfully",
      // status: "success",
      data: {
        banners: [
          {
            id: 1,
            event_name: "varchar",
            banner_image: "path of the image",
          },
        ],
        events: [
          {
            id: 1,
            event_name: "varchar",
            event_date: "date",
            event_type: "varchar",
            event_price: 0,
            thumbnail_image: "path of image",
          },
        ],
        week_events: [
          {
            id: 1,
            event_name: "varchar",
            event_date: "date",
            event_type: "varchar",
            event_price: 0,
            thumbnail_image: "path of the image",
          },
        ],
        faq: [
          {
            question: "question1?",
            answer: "answer1",
          },
          {
            question: "question2?",
            answer: "answer2",
          },
        ],
        "static-data": [
          {
            title: "About Iktaraa events",
            description: "events data",
          },
        ],
      },
      total_count: 100,
      from: 1,
      to: 24,
    };

    const [eventData] = await Promise.all([
      await store
        .dispatch(eventHome())
        .unwrap()
        .then((res) => res)
        .catch(() => {
          return fallbackData;
        }),
    ]);
    console.log(eventData, "event");
    return {
      props: {
        eventData: eventData,
      },
    };
  }
);

export default EventsDetails;
