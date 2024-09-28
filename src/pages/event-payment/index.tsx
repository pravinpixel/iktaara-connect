/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

import { Box, Grid, Stack } from "@mui/material";

import dynamic from "next/dynamic";

const CustomContainer = dynamic(() => import("@/views/components/Container"));
import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Button from "@mui/material/Button";
import ImageComponent from "@/views/components/ImageComponent";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
// const VenueSection = dynamic(
//   () => import("@/views/components/event-book/VenueSection")
// );
// const BookingTicket = dynamic(
//   () => import("@/views/components/event-book/BookTicket")
// );
const EventPayment = () => {
  return (
    <>
      {" "}
      <Box className="bg-ik_lightblue">
        <CustomContainer>
          <Grid container my={2} spacing={1}>
            <Grid item xs={8}>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Account
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Payment
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={4}>
              <Box className="bg-ik_white p-3 mt-1 rounded-2xl mb-3">
                <Typography>Ticket Summary</Typography>
                <Box className="border border-ik_pink">
                  <Typography>Need Singham Dhan by SID SRIRAM</Typography>
                  <Typography>5 Tickets</Typography>
                  <Divider />

                  <Typography>Date & Time</Typography>
                  <Typography>Saturday, 29 July 2024</Typography>
                  <Typography> 7:00 PM</Typography>
                </Box>
                <Box className="flex justify-between">
                  <Typography>Sub Total</Typography>
                  <Typography>50000</Typography>
                </Box>
                <Box className="flex justify-between">
                  <Typography>Booking Fee</Typography>
                  <Typography>50000</Typography>
                </Box>
                <Box className="flex justify-between">
                  <Typography>Convenience Fee</Typography>
                  <Typography>50000</Typography>
                </Box>
                <Box className="flex justify-between">
                  <Typography>Discount</Typography>
                  <Typography>50000</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CustomContainer>
      </Box>
    </>
  );
};
// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     // Data to return in the catch block
//     const fallbackData = {
//       error: 0,
//       status_code: 200,
//       message: "Data loaded successfully",
//       status: "success",
//       data: {
//         banners: [
//           {
//             id: 1,
//             event_name: "Title",
//             banner_image: "/assets/image/events-img.webp",
//           },
//           {
//             id: 2,
//             event_name: "Title",
//             banner_image: "/assets/image/events-img.webp",
//           },
//           {
//             id: 3,
//             event_name: "Title",
//             banner_image: "/assets/image/events-img.webp",
//           },
//           {
//             id: 4,
//             event_name: "Title",
//             banner_image: "/assets/image/events-img.webp",
//           },
//         ],
//         details: [
//           {
//             event_name: "Need Singham Dhan by SID SRIRAM",
//             event_type: "Performance",
//             event_hosting: "Priya Dhamodharan",
//             event_description:
//               "Calling all music lovers! Brace yourselves for the arrival of Nee Singham Dhan, a captivating live concert experience featuring the phenomenal Sid Sriram!",
//             reasons_to_attend: [
//               {
//                 reason:
//                   "Witness the maestro weave his soulful magic live, fusing Indian classical with contemporary Western influences",
//               },
//               {
//                 reason:
//                   "Sing along to all your favorites, from the chart-topping Adiye and Inkem Inkem Kavale to the internet sensation Srivalli.",
//               },
//               {
//                 reason:
//                   "Immerse yourself in a captivating performance by the reigning king of South Indian melodies, known for his ability to transcend genres and captivate audiences across generations",
//               },
//             ],
//             address_line1: "Medai - The Stage, Alwarpet, Chennai",
//             address_line2: "Medai - The Stage, Alwarpet, Chennai",
//             city: "varchar",
//             state: "varchar",
//             landmark: "varchar",
//             event_date: "varchar",
//             event_time: "Saturday, 29 July 2024 @ 7:00 PM",
//             terms_and_conditions: [
//               {
//                 condition: "condition 1",
//               },
//               {
//                 condition: "condition 2",
//               },
//               {
//                 condition: "condition 3",
//               },
//             ],
//             ticket_type: "varchar",
//           },
//         ],
//       },
//     };

//     const similarData = {
//       data: [
//         {
//           id: 1,
//           event_name: "varchar",
//           event_date: "date",
//           event_type: "varchar",
//           event_price: 10,
//           thumbnail_image: "/images/static/image_23.png",
//         },
//         {
//           id: 2,
//           event_name: "varchar",
//           event_date: "date",
//           event_type: "varchar",
//           event_price: 110,
//           thumbnail_image: "/images/static/image_23.png",
//         },
//         {
//           id: 3,
//           event_name: "varchar",
//           event_date: "date",
//           event_type: "varchar",
//           event_price: 10,
//           thumbnail_image: "/images/static/image_23.png",
//         },
//         {
//           id: 4,
//           event_name: "varchar",
//           event_date: "date",
//           event_type: "varchar",
//           event_price: 10,
//           thumbnail_image: "/images/static/image_23.png",
//         },
//         {
//           id: 5,
//           event_name: "varchar",
//           event_date: "date",
//           event_type: "varchar",
//           event_price: 10,
//           thumbnail_image: "/images/static/image_23.png",
//         },
//         {
//           id: 6,
//           event_name: "varchar",
//           event_date: "date",
//           event_type: "varchar",
//           event_price: 10,
//           thumbnail_image: "/images/static/image_23.png",
//         },
//       ],
//     };

//     const category = {
//       data: [
//         {
//           id: 1,
//           name: "varchar",
//           icon: "/images/static/image_24.png",
//         },
//         {
//           id: 2,
//           name: "Music Doctor",
//           icon: "/images/static/image_24.png",
//         },
//         {
//           id: 3,
//           name: "Music Doctor",
//           icon: "/images/static/image_24.png",
//         },
//         {
//           id: 4,
//           name: "Music Doctor",
//           icon: "/images/static/image_24.png",
//         },
//         {
//           id: 5,
//           name: "Music Doctor",
//           icon: "/images/static/image_24.png",
//         },
//         {
//           id: 6,
//           name: "Music Doctor",
//           icon: "/images/static/image_24.png",
//         },
//       ],
//     };
//     const [eventDetailData, similarEventsData, eventCategoryData] =
//       await Promise.all([
//         await store
//           .dispatch(eventDetails())
//           .unwrap()
//           .then((res) => res)
//           .catch(() => {
//             return fallbackData;
//           }),
//         await store
//           .dispatch(similarEventDetails())
//           .unwrap()
//           .then((res) => res)
//           .catch(() => {
//             return similarData;
//           }),
//         await store
//           .dispatch(eventCategory())
//           .unwrap()
//           .then((res) => res)
//           .catch(() => {
//             return category;
//           }),
//       ]);

//     return {
//       props: {
//         eventDetailData: eventDetailData,
//         similarEventsData: similarEventsData,
//         eventCategoryData: eventCategoryData,
//       },
//     };
//   }
// );

export default EventPayment;
