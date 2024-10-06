/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";

import { Box, Grid } from "@mui/material";

import VerticalLinearStepper from "@/views/components/event-hostingcomponent/Stepper";
import StepperContent from "@/views/components/event-hostingcomponent/StepperContent";
// import ImageComponent from "@/views/components/ImageComponent";
import NextSection from "@/views/components/event-book/NextSection";

import dynamic from "next/dynamic";
import StepperContentTwo from "@/views/components/event-hostingcomponent/StepperContentTwo";
import StepperContentThree from "@/views/components/event-hostingcomponent/StepperContentThree";

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
  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <>
      {" "}
      <Box className="h-[100vh] overflow-hidden">
        <Grid container className="h-full">
          <Grid item xs={3} className="bg-ik_blue h-full">
            <Box className="h-[100vh] fixed w-[25%]">
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
          <Grid item xs={9} className="h-full">
            <Box className="h-full overflow-y-auto" style={{ padding: "16px" }}>
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
                  <StepperContentOne />
                  <NextSection
                    key="next-section"
                    justifyContent="flex-start"
                    className="fixed bottom-0 w-full"
                  />
                </>
              )}
              {activeStep === 3 && (
                <>
                  <StepperContentTwo />
                  <NextSection
                    key="next-section"
                    justifyContent="flex-start"
                    className="fixed bottom-0 w-full"
                  />
                </>
              )}
              {activeStep === 4 && (
                <>
                  <StepperContentThree />
                  <NextSection
                    key="next-section"
                    justifyContent="flex-start"
                    className="fixed bottom-0 w-full"
                  />
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EventHosting;
