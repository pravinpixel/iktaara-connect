// /* eslint-disable @typescript-eslint/no-explicit-any */

// import React from "react";

// import { Box, Grid } from "@mui/material";

// import dynamic from "next/dynamic";

// const CustomContainer = dynamic(() => import("@/views/components/Container"));
// import Accordion from "@mui/material/Accordion";
// // import AccordionActions from "@mui/material/AccordionActions";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// // import Button from "@mui/material/Button";

// import { Typography } from "@mui/material";
// import { Divider } from "@mui/material";
// import InputField from "@/views/components/form-fields/InputField";
// import CustomButton from "@/views/components/form-fields/CustomButton";
// import { FormProvider, useForm } from "react-hook-form";
// import ImageComponent from "@/views/components/ImageComponent";
// import CustomSmallButton from "@/views/components/form-fields/CustomSmallButton";
// import CustomRadio from "@/views/components/form-fields/RadioButton";
// // const VenueSection = dynamic(
// //   () => import("@/views/components/event-book/VenueSection")
// // );
// // const BookingTicket = dynamic(
// //   () => import("@/views/components/event-book/BookTicket")
// // );
// const EventPayment = () => {
//   const methods = useForm();
//   return (
//     <>
//       <FormProvider {...methods}>
//         <Box className="bg-ik_lightblue">
//           <CustomContainer>
//             <Grid container my={2} spacing={1}>
//               <Grid item xs={8}>
//                 <Accordion defaultExpanded>
//                   <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel1-content"
//                     id="panel1-header"
//                   >
//                     <Box className="flex gap-2 items-center">
//                       <CustomSmallButton
//                         image="/assets/static/image_38.png"
//                         width={27.57}
//                         height={27.57}
//                       ></CustomSmallButton>
//                       <Typography className="font-semibold text-f24 leading-6 text-ik_bluegreydarken6">
//                         Account
//                       </Typography>
//                       {/* <Typography className="font-semibold text-f24 leading-6 text-ik_bluegreydarken6">
//                         <span className="font-normal text-f24 leading-6 text-ik_bluegreydarken6">
//                           Hi
//                         </span>{" "}
//                         RamaKrishnan
//                       </Typography> */}
//                     </Box>
//                   </AccordionSummary>
//                   <AccordionDetails>
//                     <Typography className="font-normal text-f18 leading-5 text-ik_lightgrey mt-2">
//                       To book a ticket your need to login or create account.
//                     </Typography>
//                     <Typography className="font-normal text-f18 leading-5 text-ik_bluegreydarken6 mt-2 ">
//                       Login Or{" "}
//                       <span className="font-normal text-f18 leading-5 text-ik_darkblue mt-2">
//                         Create a New Account
//                       </span>
//                       <Box className="my-2">
//                         <InputField sx={{ width: "50%", mt: 2 }} />
//                         <InputField sx={{ width: "50%", mt: 2 }} />
//                         <Box className="mt-2 flex gap-3">
//                           {" "}
//                           <CustomButton label="Verify with OTP" />
//                           <CustomButton
//                             label="Login with Password"
//                             variant="payment-button"
//                           />
//                         </Box>
//                       </Box>
//                     </Typography>
//                   </AccordionDetails>
//                 </Accordion>
//                 <Accordion>
//                   <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel2-content"
//                     id="panel2-header"
//                   >
//                     <Box className="flex gap-2 items-center">
//                       <CustomSmallButton
//                         image="/assets/static/image_39.png"
//                         width={27.57}
//                         height={27.57}
//                       ></CustomSmallButton>
//                       <Typography className="font-semibold text-f24 leading-6 text-ik_bluegreydarken6">
//                         Payment
//                       </Typography>
//                     </Box>
//                   </AccordionSummary>
//                   <AccordionDetails>
//                     <Typography className="font-normal text-f18 leading-5 text-ik_lightgrey mt-2">
//                       Choose how do you want to make the payment
//                     </Typography>
//                     <Box className="border border-a mt-2 rounded-xl">
//                       <CustomRadio
//                         name=""
//                         label="Razorpay Secure (UPI, Cards, Wallet, Netbanking)"
//                         value={""}
//                       />
//                     </Box>
//                     <Box className="mt-4">
//                       <CustomButton label="Payment" />
//                     </Box>
//                   </AccordionDetails>
//                 </Accordion>
//               </Grid>
//               <Grid item xs={4}>
//                 <Box className="bg-ik_white p-3 mt-1 rounded-2xl mb-3">
//                   <Typography className="font-normal text-f16 leading-4 text-ik_lightgrey mt-2">
//                     Ticket Summary
//                   </Typography>
//                   <Box className="border border-ik_bordervariant2 rounded-xl p-3 mt-2">
//                     <Typography className="font-semibold text-f18 leading-6 text-ik_bluegreydarken6 mt-2">
//                       Need Singham Dhan by SID SRIRAM
//                     </Typography>
//                     <Typography className="font-normal text-f18 leading-4 text-ik_lightgrey mt-2">
//                       5 Tickets
//                     </Typography>
//                     <Divider className="my-2" />
//                     <Typography className="font-semibold text-f18 leading-5 text-ik_bluegreydarken6 mt-2">
//                       Venue
//                     </Typography>
//                     <Typography className="font-normal text-f16 leading-5 text-ik_bluegreydarken6 mt-2">
//                       Medai - The Stage, Alwarpet, Chennai
//                     </Typography>
//                     <Typography className="font-semibold text-f18 leading-5 text-ik_bluegreydarken6 mt-2">
//                       Date & Time
//                     </Typography>
//                     <Typography className="font-normal text-f16 leading-5 text-ik_bluegreydarken6 mt-2">
//                       Saturday, 29 July 2024
//                     </Typography>
//                     <Typography className="font-normal text-f16 leading-5 text-ik_bluegreydarken6 mt-2">
//                       {" "}
//                       7:00 PM
//                     </Typography>
//                   </Box>
//                   <Box className="flex justify-between my-3">
//                     <Typography className="font-normal text-f18 leading-5 text-ik_bluegreydarken6 ">
//                       Sub Total
//                     </Typography>
//                     <Typography className="font-normal text-f20 leading-5 text-ik_bluegreydarken6 ">
//                       ₹ 50000
//                     </Typography>
//                   </Box>
//                   <Box className="flex justify-between my-2">
//                     <Typography className="font-normal text-f18 leading-5 text-ik_bluegreydarken6 ">
//                       Booking Fee
//                     </Typography>
//                     <Typography className="font-normal text-f20 leading-5 text-ik_bluegreydarken6 ">
//                       ₹ 50000
//                     </Typography>
//                   </Box>
//                   <Box className="bg-ik_bluegreylighten5 rounded-xl p-3">
//                     <Box className="flex justify-between my-2">
//                       <Typography className="font-normal text-f16 leading-4 text-ik_bluegreydarken6 ">
//                         Base Fee
//                       </Typography>
//                       <Typography className="font-normal text-f16 leading-4 text-ik_bluegreydarken6 ">
//                         ₹ 50000
//                       </Typography>
//                     </Box>
//                     <Box className="flex justify-between my-2">
//                       <Typography className="font-normal text-f16 leading-4 text-ik_bluegreydarken6 ">
//                         GST
//                       </Typography>
//                       <Typography className="font-normal text-f16 leading-4 text-ik_bluegreydarken6 ">
//                         ₹ 50000
//                       </Typography>
//                     </Box>
//                   </Box>

//                   <Box className="flex justify-between my-2">
//                     <Typography className="font-normal text-f18 leading-5 text-ik_bluegreydarken6 ">
//                       Convenience Fee
//                     </Typography>
//                     <Typography className="font-normal text-f20 leading-5 text-ik_bluegreydarken6 ">
//                       ₹ 50000
//                     </Typography>
//                   </Box>
//                   <Box className="flex justify-between">
//                     <Typography>Discount</Typography>
//                     <Typography>₹ 50000</Typography>
//                   </Box>
//                   <Box className="flex justify-between">
//                     <InputField />
//                     <CustomButton label="Apply" />
//                   </Box>
//                   <Box className="inline-flex my-3 gap-1 bg-ik_whitevariant p-2 rounded-lg">
//                     <ImageComponent
//                       src="/assets/static/image_37.png"
//                       alt="percentage"
//                       width={18}
//                       height={12}
//                     />
//                     <Typography>FIRST BOOK</Typography>
//                   </Box>
//                   <Divider className="my-2"></Divider>
//                   <Box className="flex justify-between my-2">
//                     <Typography className="font-normal text-f22 leading-6 text-ik_bluegreydarken6 ">
//                       Amount To Pay
//                     </Typography>
//                     <Typography className="font-bolds text-f28 leading-7 text-ik_bluegreydarken6 ">
//                       ₹ 50000
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Grid>
//             </Grid>
//           </CustomContainer>
//         </Box>
//       </FormProvider>
//     </>
//   );
// };
// // export const getServerSideProps = wrapper.getServerSideProps(
// //   (store) => async () => {
// //     // Data to return in the catch block
// //     const fallbackData = {
// //       error: 0,
// //       status_code: 200,
// //       message: "Data loaded successfully",
// //       status: "success",
// //       data: {
// //         banners: [
// //           {
// //             id: 1,
// //             event_name: "Title",
// //             banner_image: "/assets/image/events-img.webp",
// //           },
// //           {
// //             id: 2,
// //             event_name: "Title",
// //             banner_image: "/assets/image/events-img.webp",
// //           },
// //           {
// //             id: 3,
// //             event_name: "Title",
// //             banner_image: "/assets/image/events-img.webp",
// //           },
// //           {
// //             id: 4,
// //             event_name: "Title",
// //             banner_image: "/assets/image/events-img.webp",
// //           },
// //         ],
// //         details: [
// //           {
// //             event_name: "Need Singham Dhan by SID SRIRAM",
// //             event_type: "Performance",
// //             event_hosting: "Priya Dhamodharan",
// //             event_description:
// //               "Calling all music lovers! Brace yourselves for the arrival of Nee Singham Dhan, a captivating live concert experience featuring the phenomenal Sid Sriram!",
// //             reasons_to_attend: [
// //               {
// //                 reason:
// //                   "Witness the maestro weave his soulful magic live, fusing Indian classical with contemporary Western influences",
// //               },
// //               {
// //                 reason:
// //                   "Sing along to all your favorites, from the chart-topping Adiye and Inkem Inkem Kavale to the internet sensation Srivalli.",
// //               },
// //               {
// //                 reason:
// //                   "Immerse yourself in a captivating performance by the reigning king of South Indian melodies, known for his ability to transcend genres and captivate audiences across generations",
// //               },
// //             ],
// //             address_line1: "Medai - The Stage, Alwarpet, Chennai",
// //             address_line2: "Medai - The Stage, Alwarpet, Chennai",
// //             city: "varchar",
// //             state: "varchar",
// //             landmark: "varchar",
// //             event_date: "varchar",
// //             event_time: "Saturday, 29 July 2024 @ 7:00 PM",
// //             terms_and_conditions: [
// //               {
// //                 condition: "condition 1",
// //               },
// //               {
// //                 condition: "condition 2",
// //               },
// //               {
// //                 condition: "condition 3",
// //               },
// //             ],
// //             ticket_type: "varchar",
// //           },
// //         ],
// //       },
// //     };

// //     const similarData = {
// //       data: [
// //         {
// //           id: 1,
// //           event_name: "varchar",
// //           event_date: "date",
// //           event_type: "varchar",
// //           event_price: 10,
// //           thumbnail_image: "/assets/static/image_23.png",
// //         },
// //         {
// //           id: 2,
// //           event_name: "varchar",
// //           event_date: "date",
// //           event_type: "varchar",
// //           event_price: 110,
// //           thumbnail_image: "/assets/static/image_23.png",
// //         },
// //         {
// //           id: 3,
// //           event_name: "varchar",
// //           event_date: "date",
// //           event_type: "varchar",
// //           event_price: 10,
// //           thumbnail_image: "/assets/static/image_23.png",
// //         },
// //         {
// //           id: 4,
// //           event_name: "varchar",
// //           event_date: "date",
// //           event_type: "varchar",
// //           event_price: 10,
// //           thumbnail_image: "/assets/static/image_23.png",
// //         },
// //         {
// //           id: 5,
// //           event_name: "varchar",
// //           event_date: "date",
// //           event_type: "varchar",
// //           event_price: 10,
// //           thumbnail_image: "/assets/static/image_23.png",
// //         },
// //         {
// //           id: 6,
// //           event_name: "varchar",
// //           event_date: "date",
// //           event_type: "varchar",
// //           event_price: 10,
// //           thumbnail_image: "/assets/static/image_23.png",
// //         },
// //       ],
// //     };

// //     const category = {
// //       data: [
// //         {
// //           id: 1,
// //           name: "varchar",
// //           icon: "/assets/static/image_24.png",
// //         },
// //         {
// //           id: 2,
// //           name: "Music Doctor",
// //           icon: "/assets/static/image_24.png",
// //         },
// //         {
// //           id: 3,
// //           name: "Music Doctor",
// //           icon: "/assets/static/image_24.png",
// //         },
// //         {
// //           id: 4,
// //           name: "Music Doctor",
// //           icon: "/assets/static/image_24.png",
// //         },
// //         {
// //           id: 5,
// //           name: "Music Doctor",
// //           icon: "/assets/static/image_24.png",
// //         },
// //         {
// //           id: 6,
// //           name: "Music Doctor",
// //           icon: "/assets/static/image_24.png",
// //         },
// //       ],
// //     };
// //     const [eventDetailData, similarEventsData, eventCategoryData] =
// //       await Promise.all([
// //         await store
// //           .dispatch(eventDetails())
// //           .unwrap()
// //           .then((res) => res)
// //           .catch(() => {
// //             return fallbackData;
// //           }),
// //         await store
// //           .dispatch(similarEventDetails())
// //           .unwrap()
// //           .then((res) => res)
// //           .catch(() => {
// //             return similarData;
// //           }),
// //         await store
// //           .dispatch(eventCategory())
// //           .unwrap()
// //           .then((res) => res)
// //           .catch(() => {
// //             return category;
// //           }),
// //       ]);

// //     return {
// //       props: {
// //         eventDetailData: eventDetailData,
// //         similarEventsData: similarEventsData,
// //         eventCategoryData: eventCategoryData,
// //       },
// //     };
// //   }
// // );

// export default EventPayment;

import React from "react";
import { Box, Grid, Typography, Divider, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import { FormProvider, useForm } from "react-hook-form";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const CustomContainer = dynamic(() => import("@/views/components/Container"));
const InputField = dynamic(
  () => import("@/views/components/form-fields/InputField")
);
const CustomButton = dynamic(
  () => import("@/views/components/form-fields/CustomButton")
);
const CustomSmallButton = dynamic(
  () => import("@/views/components/form-fields/CustomSmallButton")
);
const CustomRadio = dynamic(
  () => import("@/views/components/form-fields/RadioButton")
);
const ImageComponent = dynamic(
  () => import("@/views/components/ImageComponent")
);

const EventPayment = () => {
  const methods = useForm();

  const handleSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <FormProvider {...methods}>
      <Box className="bg-ik_lightblue">
        <CustomContainer>
          <Grid container my={2} spacing={1} onSubmit={handleSubmit}>
            <Grid item xs={8}>
              {/* Account Accordion */}
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Box className="flex gap-2 items-center">
                    <CustomSmallButton
                      image="/assets/static/image_38.png"
                      width={27.57}
                      height={27.57}
                    />
                    <Typography className="font-semibold text-f24 leading-6 text-ik_bluegreydarken6">
                      Account
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="font-normal text-f18 leading-5 text-ik_lightgrey mt-2">
                    To book a ticket, you need to log in or create an account.
                  </Typography>
                  <Box className="my-2">
                    <InputField sx={{ width: "50%", mt: 2 }} />
                    <InputField sx={{ width: "50%", mt: 2 }} />
                    <Box className="mt-2 flex gap-3">
                      <CustomButton label="Verify with OTP" className={""} />
                      <CustomButton
                        label="Login with Password"
                        variant="payment-button"
                      />
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>

              {/* Payment Accordion */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Box className="flex gap-2 items-center">
                    <CustomSmallButton
                      image="/assets/static/image_39.png"
                      width={27.57}
                      height={27.57}
                    />
                    <Typography className="font-semibold text-f24 leading-6 text-ik_bluegreydarken6">
                      Payment
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="font-normal text-f18 leading-5 text-ik_lightgrey mt-2">
                    Choose how you want to make the payment.
                  </Typography>
                  <Box className="border border-a mt-2 rounded-xl flex justify-between items-center px-2">
                    <CustomRadio
                      name="paymentMethod"
                      label="Razorpay Secure (UPI, Cards, Wallet, Netbanking)"
                      value="razorpay"
                    />
                    <Stack direction="row" spacing={1}>
                      <ImageComponent
                        src="/assets/static/image_40.png"
                        alt="image"
                        width={40}
                        height={26}
                      />
                      <ImageComponent
                        src="/assets/static/image_41.png"
                        alt="image"
                        width={40}
                        height={26}
                      />
                    </Stack>
                  </Box>
                  <Box className="mt-4">
                    <CustomButton label="Payment" className={""} />
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Grid>

            {/* Ticket Summary */}
            <Grid item xs={4}>
              <Box className="bg-ik_white p-3 mt-1 rounded-2xl mb-3">
                <Typography className="font-normal text-f16 leading-4 text-ik_lightgrey mt-2">
                  Ticket Summary
                </Typography>
                <Box className="border border-ik_bordervariant2 rounded-xl p-3 mt-2">
                  <Typography className="font-semibold text-f18 leading-6 text-ik_bluegreydarken6 mt-2">
                    Need Singham Dhan by SID SRIRAM
                  </Typography>
                  <Typography className="font-normal text-f18 leading-4 text-ik_lightgrey mt-2">
                    5 Tickets
                  </Typography>
                  <Divider className="my-2" />
                  <Typography className="font-semibold text-f18 leading-5 text-ik_bluegreydarken6 mt-2">
                    Venue
                  </Typography>
                  <Typography className="font-normal text-f16 leading-5 text-ik_bluegreydarken6 mt-2">
                    Medai - The Stage, Alwarpet, Chennai
                  </Typography>
                  <Typography className="font-semibold text-f18 leading-5 text-ik_bluegreydarken6 mt-2">
                    Date & Time
                  </Typography>
                  <Typography className="font-normal text-f16 leading-5 text-ik_bluegreydarken6 mt-2">
                    Saturday, 29 July 2024
                  </Typography>
                  <Typography className="font-normal text-f16 leading-5 text-ik_bluegreydarken6 mt-2">
                    7:00 PM
                  </Typography>
                </Box>

                {/* Pricing Details */}
                <PricingSummary />
              </Box>
            </Grid>
          </Grid>
        </CustomContainer>
      </Box>
    </FormProvider>
  );
};

const PricingSummary = () => {
  return (
    <>
      <Box className="flex justify-between my-3">
        <Typography className="font-normal text-f18 leading-5 text-ik_bluegreydarken6 ">
          Sub Total
        </Typography>
        <Typography className="font-normal text-f20 leading-5 text-ik_bluegreydarken6 ">
          ₹ 50000
        </Typography>
      </Box>
      <Accordion
        sx={{
          boxShadow: "none",
          p: 0,
          "& .MuiButtonBase-root.MuiAccordionSummary-root": {
            p: 0,
          },
        }}
      >
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          <ExpandMoreIcon />
          <Stack direction="row" alignItems="center" spacing={19}>
            <Typography className="font-normal text-f18 leading-5 text-ik_bluegreydarken6 ">
              Booking Fee
            </Typography>
            <Typography className="font-normal text-f20 leading-5 text-ik_bluegreydarken6 ">
              ₹ 50000
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          {" "}
          <Box className="bg-ik_bluegreylighten5 rounded-xl p-3">
            <Box className="flex justify-between my-2">
              <Typography className="font-normal text-f16 leading-4 text-ik_bluegreydarken6 ">
                Base Fee
              </Typography>
              <Typography className="font-normal text-f16 leading-4 text-ik_bluegreydarken6 ">
                ₹ 50000
              </Typography>
            </Box>
            <Box className="flex justify-between my-2">
              <Typography className="font-normal text-f16 leading-4 text-ik_bluegreydarken6 ">
                GST
              </Typography>
              <Typography className="font-normal text-f16 leading-4 text-ik_bluegreydarken6 ">
                ₹ 50000
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Box className="flex justify-between my-2">
        <Typography className="font-normal text-f18 leading-5 text-ik_bluegreydarken6 ">
          Convenience Fee
        </Typography>
        <Typography className="font-normal text-f20 leading-5 text-ik_bluegreydarken6 ">
          ₹ 50000
        </Typography>
      </Box>
      <Box className="flex justify-between">
        <Typography>Discount</Typography>
        <Typography>₹ 50000</Typography>
      </Box>
      <Box className="flex justify-between">
        <InputField />
        <CustomButton label="Apply" className={""} />
      </Box>
      <Box className="inline-flex my-3 gap-1 bg-ik_whitevariant p-2 rounded-lg">
        <ImageComponent
          src="/assets/static/image_37.png"
          alt="percentage"
          width={18}
          height={12}
        />
        <Typography>FIRST BOOK</Typography>
      </Box>
      <Divider className="my-2"></Divider>
      <Box className="flex justify-between my-2">
        <Typography className="font-normal text-f22 leading-6 text-ik_bluegreydarken6 ">
          Amount To Pay
        </Typography>
        <Typography className="font-bolds text-f28 leading-7 text-ik_bluegreydarken6 ">
          ₹ 50000
        </Typography>
      </Box>
    </>
  );
};

export default EventPayment;
