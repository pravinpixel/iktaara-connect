/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import dynamic from "next/dynamic";

// import { wrapper } from "@/redux/store";

import { eventCategory, eventHome } from "@/redux/services/eventService";
import { wrapper } from "@/redux/store";
import { Divider } from "@mui/material";

const FilterSectionEvents = dynamic(
  () => import("@/components/section/events/events-new/FilterSection")
);
const AboutIktaraaEvents = dynamic(
  () => import("@/components/section/events/events-new/AboutIktaraaEvents")
);
const FrequentlyAskedSection = dynamic(
  () => import("@/components/section/home/FrequentlyAsked")
);
const EventsByCategory = dynamic(
  () => import("@/components/section/events/events-new/EventsByCategory")
);
const EventsBanners = dynamic(
  () => import("@/components/section/events/events-new/EventsBanner")
);
const EventsTitle = dynamic(
  () => import("@/components/section/events/events-new/EventsTitle")
);
const HostEventsBanner = dynamic(
  () => import("@/components/section/events/events-new/HoseEventsBanner")
);
const EventsThisWeek = dynamic(
  () => import("@/components/section/events/events-new/EventsThisWeek")
);
// import { eventHome } from "@/redux/services/eventService";

const EventsHome = ({ eventData, eventCategoryData }: any) => {
  return (
    <>
      <EventsTitle label="Events" subLabel="in Chennai" />
      <EventsBanners Eventssections={eventData?.data?.banners} height={0} />
      <HostEventsBanner />
      <EventsThisWeek
        musictechniciansection={eventData?.data?.week_events}
        className={"flex pt-5 mb-[60px] bg-ik_white "}
        title={"This Week "}
      />
      <EventsByCategory
        label="Events by Category"
        eventByCate={eventCategoryData?.data}
        className="bg-ik_lightbluevariant shadow-custom-hsla "
      />
      <Divider />
      <FilterSectionEvents categoryData={eventData?.data?.week_events} />
      <AboutIktaraaEvents aboutData={eventData?.data?.static_data} />
      <HostEventsBanner />
      <FrequentlyAskedSection
        faqsection={eventData?.data?.faq}
        className={"flex pt-3 pb-5 "}
      />
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
            event_name: "SID SRIRAM",
            banner_image: "/assets/image/events-img.webp",
          },
          {
            id: 2,
            event_name: "SID SRIRAM",
            banner_image: "/assets/image/events-img.webp",
          },
          {
            id: 3,
            event_name: "SID SRIRAM",
            banner_image: "/assets/image/events-img.webp",
          },
          {
            id: 4,
            event_name: "SID SRIRAM",
            banner_image: "/assets/image/events-img.webp",
          },
        ],
        events: [
          {
            id: 1,
            event_name: "SID SRIRAM",
            event_date: "date",
            event_type: "SID SRIRAM",
            event_price: 0,
            thumbnail_image: "/assets/static/image_23.png",
          },
        ],
        week_events: [
          {
            id: 1,
            event_name: "SID SRIRAM",
            event_date: "date",
            event_type: "SID SRIRAM",
            event_price: 10,
            thumbnail_image: "/assets/static/image_23.png",
          },
          {
            id: 2,
            event_name: "SID SRIRAM",
            event_date: "date",
            event_type: "SID SRIRAM",
            event_price: 110,
            thumbnail_image: "/assets/static/image_23.png",
          },
          {
            id: 3,
            event_name: "SID SRIRAM",
            event_date: "date",
            event_type: "SID SRIRAM",
            event_price: 10,
            thumbnail_image: "/assets/static/image_23.png",
          },
          {
            id: 4,
            event_name: "SID SRIRAM",
            event_date: "date",
            event_type: "SID SRIRAM",
            event_price: 10,
            thumbnail_image: "/assets/static/image_23.png",
          },
          {
            id: 5,
            event_name: "SID SRIRAM",
            event_date: "date",
            event_type: "SID SRIRAM",
            event_price: 10,
            thumbnail_image: "/assets/static/image_23.png",
          },
          {
            id: 6,
            event_name: "SID SRIRAM",
            event_date: "date",
            event_type: "SID SRIRAM",
            event_price: 10,
            thumbnail_image: "/assets/static/image_23.png",
          },
        ],
        faq: [
          {
            id: 1,
            question: "How do I choose the right pianica online?",
            answer:
              "To select the perfect pianica online, consider your skill level, budget, and desired features. Look for reputable brands, read customer reviews, and choose a model that aligns with your musical preferences.",
          },
          {
            id: 2,
            question:
              'What are the advantages of shopping for a "Pianica Online"?',
            answer:
              "To select the perfect pianica online, consider your skill level, budget, and desired features. Look for reputable brands, read customer reviews, and choose a model that aligns with your musical preferences.",
          },
          {
            id: 3,
            question: "What is the typical price of a Pianica in India?",
            answer:
              "To select the perfect pianica online, consider your skill level, budget, and desired features. Look for reputable brands, read customer reviews, and choose a model that aligns with your musical preferences.",
          },
        ],
        static_data: [
          {
            id: 1,
            title: "About Iktaraa events",
            description:
              "At Iktaraa Events, we believe that organizing and hosting online events should be accessible to everyone, which is why we offer a platform for ticketing your events completely free of charge. Whether you're planning a virtual concert, a webinar, a workshop, or a community meetup, our platform empowers you to manage your event with ease and reach your audience effectively.",
          },
        ],
      },
      total_count: 100,
      from: 1,
      to: 24,
    };

    const category = {
      data: [
        {
          id: 1,
          name: "SID SRIRAM",
          icon: "/assets/static/image_24.png",
        },
        {
          id: 2,
          name: "Music Doctor",
          icon: "/assets/static/image_24.png",
        },
        {
          id: 3,
          name: "Music Doctor",
          icon: "/assets/static/image_24.png",
        },
        {
          id: 4,
          name: "Music Doctor",
          icon: "/assets/static/image_24.png",
        },
        {
          id: 5,
          name: "Music Doctor",
          icon: "/assets/static/image_24.png",
        },
        {
          id: 6,
          name: "Music Doctor",
          icon: "/assets/static/image_24.png",
        },
      ],
    };

    const [eventData, eventCategoryData] = await Promise.all([
      await store
        .dispatch(eventHome())
        .unwrap()
        .then((res) => res)
        .catch(() => {
          return fallbackData;
        }),
      await store
        .dispatch(eventCategory())
        .unwrap()
        .then((res) => res)
        .catch(() => {
          return category;
        }),
    ]);

    return {
      props: {
        eventData: eventData,
        eventCategoryData: eventCategoryData,
      },
    };
  }
);

export default EventsHome;