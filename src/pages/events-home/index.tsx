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
const HostEventsBanner = dynamic(
  () => import("@/views/components/events-new/HoseEventsBanner")
);
const EventsThisWeek = dynamic(
  () => import("@/views/components/events-new/EventsThisWeek")
);
import { eventHome } from "@/redux/services/eventService";

const FilterSectionEvents = dynamic(
  () => import("@/views/components/events-new/FilterSection")
);
const AboutIktaraaEvents = dynamic(
  () => import("@/views/components/events-new/AboutIktaraaEvents")
);
const FrequentlyAskedSection = dynamic(
  () => import("@/views/components/home/frequentlyAsked")
);
const EventsByCategory = dynamic(
  () => import("@/views/components/events-new/EventsByCategory")
);
// import { eventHome } from "@/redux/services/eventService";

const EventsHome = ({ eventData }: any) => {
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

  const Category = {
    pianist: [
      {
        id: 1,
        category_image: "/images/static/image_23.png",
        category_name: "Ramaniya",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 2,
        category_image: "/images/static/image_25.png",
        category_name: "Kirankumar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 3,
        category_image: "/images/static/image_23.png",
        category_name: "Chitra Jones",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 4,
        category_image: "/images/static/image_25.png",
        category_name: "Abraham John",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 5,
        category_image: "/images/static/image_23.png",
        category_name: "Prakash Thirupuzhal",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 6,
        category_image: "/images/static/image_25.png",
        category_name: "Ram Prabhakar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 7,
        category_image: "/images/static/image_23.png",
        category_name: "Madhavi Nair",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 8,
        category_image: "/images/static/image_23.png",
        category_name: "Vamshika",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 9,
        category_image: "/images/static/image_23.png",
        category_name: "Madhavi Nair",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 10,
        category_image: "/images/static/image_23.png",
        category_name: "Vamshika",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
    ],
    dancer: [
      {
        id: 1,
        category_image: "/images/static/image_25.png",
        category_name: "Abraham John",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 2,
        category_image: "/images/static/image_23.png",
        category_name: "Prakash Thirupuzhal",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 3,
        category_image: "/images/static/image_25.png",
        category_name: "Ramaniya",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 4,
        category_image: "/images/static/image_23.png",
        category_name: "Kirankumar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 5,
        category_image: "/images/static/image_25.png",
        category_name: "Madhavi Nair",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 6,
        category_image: "/images/static/image_23.png",
        category_name: "Vamshika",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 7,
        category_image: "/images/static/image_25.png",
        category_name: "Ram Prabhakar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 8,
        category_image: "/images/static/image_23.png",
        category_name: "Madhavi Nair",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
    ],
    sound_engineer: [
      {
        id: 1,
        category_image: "/images/static/image_25.png",
        category_name: "Ramaniya",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 2,
        category_image: "/images/static/image_23.png",
        category_name: "Kirankumar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 3,
        category_image: "/images/static/image_25.png",
        category_name: "Chitra Jones",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 4,
        category_image: "/images/static/image_23.png",
        category_name: "Abraham John",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 5,
        category_image: "/images/static/image_25.png",
        category_name: "Prakash Thirupuzhal",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 6,
        category_image: "/images/static/image_23.png",
        category_name: "Ram Prabhakar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
    ],
    theatre_artists: [
      {
        id: 1,
        category_image: "/images/static/image_25.png",
        category_name: "Abraham John",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 2,
        category_image: "/images/static/image_23.png",
        category_name: "Prakash Thirupuzhal",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 3,
        category_image: "/images/static/image_25.png",
        category_name: "Ramaniya",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 4,
        category_image: "/images/static/image_23.png",
        category_name: "Kirankumar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 5,
        category_image: "/images/static/image_25.png",
        category_name: "Madhavi Nair",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 6,
        category_image: "/images/static/image_23.png",
        category_name: "Vamshika",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 7,
        category_image: "/images/static/image_25.png",
        category_name: "Ram Prabhakar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 8,
        category_image: "/images/static/image_23.png",
        category_name: "Madhavi Nair",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
    ],
    party_dJ: [
      {
        id: 1,
        category_image: "/images/static/image_23.png",
        category_name: "Ramaniya",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 2,
        category_image: "/images/static/image_25.png",
        category_name: "Kirankumar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 3,
        category_image: "/images/static/image_23.png",
        category_name: "Chitra Jones",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 4,
        category_image: "/images/static/image_25.png",
        category_name: "Abraham John",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 5,
        category_image: "/images/static/image_23.png",
        category_name: "Prakash Thirupuzhal",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 6,
        category_image: "/images/static/image_25.png",
        category_name: "Ram Prabhakar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 7,
        category_image: "/images/static/image_23.png",
        category_name: "Madhavi Nair",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 8,
        category_image: "/images/static/image_25.png",
        category_name: "Vamshika",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 9,
        category_image: "/images/static/image_23.png",
        category_name: "Madhavi Nair",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 10,
        category_image: "/images/static/image_25.png",
        category_name: "Vamshika",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
    ],
    standup_comedian: [
      {
        id: 1,
        category_image: "/images/static/image_23.png",
        category_name: "Ramaniya",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 2,
        category_image: "/images/static/image_25.png",
        category_name: "Kirankumar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 3,
        category_image: "/images/static/image_23.png",
        category_name: "Chitra Jones",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 4,
        category_image: "/images/static/image_25.png",
        category_name: "Abraham John",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 5,
        category_image: "/images/static/image_23.png",
        category_name: "Prakash Thirupuzhal",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 6,
        category_image: "/images/static/image_25.png",
        category_name: "Ram Prabhakar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
    ],
  };

  const faq = [
    {
      id: 1,
      title: "How do I choose the right pianica online?",
      sub: "To select the perfect pianica online, consider your skill level, budget, and desired features. Look for reputable brands, read customer reviews, and choose a model that aligns with your musical preferences.",
    },
    {
      id: 2,
      title: 'What are the advantages of shopping for a "Pianica Online"?',
      sub: "To select the perfect pianica online, consider your skill level, budget, and desired features. Look for reputable brands, read customer reviews, and choose a model that aligns with your musical preferences.",
    },
    {
      id: 3,
      title: "What is the typical price of a Pianica in India?",
      sub: "To select the perfect pianica online, consider your skill level, budget, and desired features. Look for reputable brands, read customer reviews, and choose a model that aligns with your musical preferences.",
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
      <EventsByCategory label="Events by Category" />
      <FilterSectionEvents categoryData={Category} />
      <AboutIktaraaEvents
        label="At Iktaraa Events, we believe that organizing and hosting online events should be accessible to everyone, which is why we offer a platform for ticketing your events completely free of charge. Whether you're planning a virtual concert, a webinar, a workshop, or a community meetup, our platform empowers you to manage your event with ease and reach your audience effectively."
        title="About Iktaraa Events"
      />
      <HostEventsBanner />
      <FrequentlyAskedSection
        faqsection={faq}
        className={"flex pt-5 pb-5 bg-ik_redvariant1"}
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

export default EventsHome;
