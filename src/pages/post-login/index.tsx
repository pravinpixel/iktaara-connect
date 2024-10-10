/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import MyProfileSection from "@/views/components/post-logincomponents/MyProfileSection";
const CustomContainer = dynamic(() => import("@/views/components/Container"));
const CustomButton = dynamic(
  () => import("@/views/components/form-fields/CustomButton")
);
const EnquirySection = dynamic(
  () => import("@/views/components/post-logincomponents/EnquirySection")
);
const DashboardSection = dynamic(
  () => import("@/views/components/post-logincomponents/DashboardSection")
);
const ImageComponent = dynamic(
  () => import("@/views/components/ImageComponent")
);

const PostLogin = () => {
  const [firstSection, setFirstSection] = useState("dashboard");

  const handleFirstSection = (type: string) => {
    switch (type) {
      case "one":
        setFirstSection("dashboard");
        break;
      case "two":
        setFirstSection("enquiries");
        break;
      case "three":
        setFirstSection("events");
        break;
      case "four":
        setFirstSection("myProfile");
        break;
      default:
        setFirstSection(null);
    }
  };
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
                    className={""}
                  />
                </Box>
                <Box className="py-4">
                  <Typography
                    className="py-3 cursor-pointer"
                    onClick={() => handleFirstSection("one")}
                  >
                    Dashboard
                  </Typography>
                  <Typography
                    className="py-3 cursor-pointer"
                    onClick={() => handleFirstSection("two")}
                  >
                    Enquiries
                  </Typography>
                  <Typography
                    className="py-3 cursor-pointer"
                    onClick={() => handleFirstSection("three")}
                  >
                    Events
                  </Typography>
                  <Typography
                    className="py-3 cursor-pointer"
                    onClick={() => handleFirstSection("four")}
                  >
                    My Profile
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8}>
              {firstSection === "dashboard" && <DashboardSection />}
              {firstSection === "enquiries" && <EnquirySection />}
              {firstSection === "myProfile" && <MyProfileSection />}
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
