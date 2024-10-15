/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import dynamic from "next/dynamic";

// import { wrapper } from "@/redux/store";

import {
  eventCategory,
  eventDetails,
  similarEventDetails,
} from "@/redux/services/eventService";
import { wrapper } from "@/redux/store";

import { Box } from "@mui/material";

const EventDetailSection = dynamic(
  () =>
    import("@/components/section/events/events-detailnew/EventDetailSection")
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

const EventsThisWeek = dynamic(
  () => import("@/components/section/events/events-new/EventsThisWeek")
);
const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
// import { eventHome } from "@/redux/services/eventService";

const EventsDetails = ({
  eventDetailData,
  similarEventsData,
  eventCategoryData,
}: any) => {
  return (
    <>
      <EventsTitle label="Events" subLabel="in Chennai" />
      <EventsBanners
        Eventssections={eventDetailData?.data.banners}
        height={400}
      />
      <Box sx={{ marginTop: "-378px" }}>
        <ImageComponent
          src="/assets/static/image_30.png"
          alt="image"
          width={1920}
          height={691}
        />
      </Box>
      <EventDetailSection />
      <EventsThisWeek
        musictechniciansection={similarEventsData?.data}
        className={"flex pt-5 pb-5 bg-ik_lightblue"}
        title={"Similar Events"}
      />
      <EventsByCategory
        label="Events by Category"
        className="bg-ik_lightblue"
        eventByCate={eventCategoryData?.data}
      />
    </>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    // Data to return in the catch block
    const fallbackData = {
      error: 0,
      status_code: 200,
      message: "Data loaded successfully",
      status: "success",
      data: {
        banners: [
          {
            id: 1,
            event_name: "Title",
            banner_image: "/assets/image/events-img.webp",
          },
          {
            id: 2,
            event_name: "Title",
            banner_image: "/assets/image/events-img.webp",
          },
          {
            id: 3,
            event_name: "Title",
            banner_image: "/assets/image/events-img.webp",
          },
          {
            id: 4,
            event_name: "Title",
            banner_image: "/assets/image/events-img.webp",
          },
        ],
        details: [
          {
            event_name: "Need Singham Dhan by SID SRIRAM",
            event_type: "Performance",
            event_hosting: "Priya Dhamodharan",
            event_description:
              "Calling all music lovers! Brace yourselves for the arrival of Nee Singham Dhan, a captivating live concert experience featuring the phenomenal Sid Sriram!",
            reasons_to_attend: [
              {
                reason:
                  "Witness the maestro weave his soulful magic live, fusing Indian classical with contemporary Western influences",
              },
              {
                reason:
                  "Sing along to all your favorites, from the chart-topping Adiye and Inkem Inkem Kavale to the internet sensation Srivalli.",
              },
              {
                reason:
                  "Immerse yourself in a captivating performance by the reigning king of South Indian melodies, known for his ability to transcend genres and captivate audiences across generations",
              },
            ],
            address_line1: "Medai - The Stage, Alwarpet, Chennai",
            address_line2: "Medai - The Stage, Alwarpet, Chennai",
            city: "varchar",
            state: "varchar",
            landmark: "varchar",
            event_date: "varchar",
            event_time: "Saturday, 29 July 2024 @ 7:00 PM",
            terms_and_conditions: [
              {
                condition: "condition 1",
              },
              {
                condition: "condition 2",
              },
              {
                condition: "condition 3",
              },
            ],
            ticket_type: "varchar",
          },
        ],
      },
    };

    const similarData = {
      data: [
        {
          id: 1,
          event_name: "varchar",
          event_date: "date",
          event_type: "varchar",
          event_price: 10,
          thumbnail_image: "/assets/static/image_23.png",
        },
        {
          id: 2,
          event_name: "varchar",
          event_date: "date",
          event_type: "varchar",
          event_price: 110,
          thumbnail_image: "/assets/static/image_23.png",
        },
        {
          id: 3,
          event_name: "varchar",
          event_date: "date",
          event_type: "varchar",
          event_price: 10,
          thumbnail_image: "/assets/static/image_23.png",
        },
        {
          id: 4,
          event_name: "varchar",
          event_date: "date",
          event_type: "varchar",
          event_price: 10,
          thumbnail_image: "/assets/static/image_23.png",
        },
        {
          id: 5,
          event_name: "varchar",
          event_date: "date",
          event_type: "varchar",
          event_price: 10,
          thumbnail_image: "/assets/static/image_23.png",
        },
        {
          id: 6,
          event_name: "varchar",
          event_date: "date",
          event_type: "varchar",
          event_price: 10,
          thumbnail_image: "/assets/static/image_23.png",
        },
      ],
    };

    const category = {
      data: [
        {
          id: 1,
          name: "varchar",
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
    const [eventDetailData, similarEventsData, eventCategoryData] =
      await Promise.all([
        await store
          .dispatch(eventDetails())
          .unwrap()
          .then((res) => res)
          .catch(() => {
            return fallbackData;
          }),
        await store
          .dispatch(similarEventDetails())
          .unwrap()
          .then((res) => res)
          .catch(() => {
            return similarData;
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
        eventDetailData: eventDetailData,
        similarEventsData: similarEventsData,
        eventCategoryData: eventCategoryData,
      },
    };
  }
);

export default EventsDetails;