/* eslint-disable @typescript-eslint/no-explicit-any */

import CustomContainer from "@/views/components/Container";
import CustomButton from "@/views/components/form-fields/CustomButton";
import ImageComponent from "@/views/components/ImageComponent";

import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";

const PostLogin = () => {
  return (
    <>
      {" "}
      <Box className="bg-ik_lightblue">
        <CustomContainer>
          <Grid container>
            <Grid item xs={4}>
              <Box className="bg-ik_white my-5 mx-2 rounded-[8px] p-3">
                <Box className="flex items-center justify-center">
                  <ImageComponent
                    src="/images/static/image_57.png"
                    alt="Ramakrishna Paramahamsa"
                    width={166}
                    height={166}
                  />
                </Box>

                <Typography className="text-f24 font-bold leading-8 text-ik_bluegreydarken3">
                  Ramakrishna Paramahamsa
                </Typography>
                <Typography className="text-f14 font-normal leading-[20px] text-ik_bluegreydarken1 text-center">
                  Calling all music lovers! Brace yourselves for the arrival of
                  "Nee Singham Dhan"...
                </Typography>
                <Box className="flex items-center justify-center m-4">
                  <CustomButton
                    label="Preview Iktaraa Profile"
                    variant="primary-button"
                  />
                </Box>
                <Box className="py-4">
                  <Typography className="py-3">Dashboard</Typography>
                  <Typography className="py-3">Enquiries</Typography>
                  <Typography className="py-3">Events</Typography>
                  <Typography className="py-3">My Profile</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box className="bg-ik_white my-5 mx-2 rounded-[8px] p-3">
                <Typography>
                  Hi Ramakrishna Paramahamsa, Welcome to Iktaraa connect!
                </Typography>
                <Typography>
                  We’ve introduced a dashboard view to help you understand what
                  actions to take next to quickly grow and optimize your Page
                </Typography>
              </Box>
              <Box>
                {" "}
                <Grid container>
                  <Grid item xs={4}>
                    <Box className="bg-ik_white  mx-1 rounded-[8px] p-3">1</Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box className="bg-ik_white mx-1  rounded-[8px] p-3">2</Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box className="bg-ik_white mx-1 rounded-[8px] p-3">3</Box>
                  </Grid>
                </Grid>
              </Box>
              <Box className="mt-2">
                {" "}
                <Grid container>
                  <Grid item xs={8}>
                    <Box className="bg-ik_white  mx-1 rounded-[8px] p-3">1</Box>
                  </Grid>
                </Grid>
              </Box>
              <Box className="mt-2">
                {" "}
                <Grid container>
                  <Grid item xs={8}>
                    <Box className="bg-ik_white  mx-1 rounded-[8px] p-3">1</Box>
                  </Grid>
                </Grid>
              </Box>
              <Box className="mt-2">
                {" "}
                <Grid container>
                  <Grid item xs={8}>
                    <Box className="bg-ik_white  mx-1 rounded-[8px] p-3">1</Box>
                  </Grid>
                </Grid>
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

export default PostLogin;