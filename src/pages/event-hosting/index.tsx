/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";

import { Box, Grid } from "@mui/material";

import VerticalLinearStepper from "@/views/components/event-hostingcomponent/Stepper";
import StepperContent from "@/views/components/event-hostingcomponent/StepperContent";
// import ImageComponent from "@/views/components/ImageComponent";
import NextSection from "@/views/components/event-book/NextSection";

import dynamic from "next/dynamic";

const StepperContentOne = dynamic(
  () => import("@/views/components/event-hostingcomponent/StepperContentOne")
);
// const VenueSection = dynamic(
//   () => import("@/views/components/event-book/VenueSection")
// );
// const BookingTicket = dynamic(
//   () => import("@/views/components/event-book/BookTicket")
// );
const EventHosting = () => {
  const [activeStep, setActiveStep] = useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <>
      {" "}
      <Box className="">
        <Grid container>
          <Grid item xs={3} className="bg-ik_blue h-[991px]">
            <Box className="h-[100vh] overflow-y-hidden fixed">
              <VerticalLinearStepper onStepChange={handleStepChange} />
              {/* <Box className="">
                <ImageComponent
                  src={"/images/static/image_45.png"}
                  className="aspect-[174/168]"
                  type={2}
                />
              </Box> */}
            </Box>
          </Grid>
          <Grid item xs={9}>
            {activeStep === 0 && (
              <>
                <StepperContent />
                <NextSection
                  key="next-section"
                  justifyContent="flex-start"
                  className="fixed bottom-0 w-full"
                />
              </>
            )}
            {activeStep === 1 && (
              <>
                <StepperContentOne />
                <NextSection
                  key="next-section"
                  justifyContent="flex-start"
                  className="fixed bottom-0 w-full"
                />
              </>
            )}
            {activeStep === 2 && (
              <>
                <StepperContent />
                <NextSection
                  key="next-section"
                  justifyContent="flex-start"
                  className="fixed bottom-0 w-full"
                />
              </>
            )}
            {activeStep === 3 && (
              <>
                <StepperContent />
                <NextSection
                  key="next-section"
                  justifyContent="flex-start"
                  className="fixed bottom-0 w-full"
                />
              </>
            )}
            {activeStep === 4 && (
              <>
                <StepperContent />
                <NextSection
                  key="next-section"
                  justifyContent="flex-start"
                  className="fixed bottom-0 w-full"
                />
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EventHosting;
