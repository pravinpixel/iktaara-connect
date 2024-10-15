/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";

import { Box, Grid } from "@mui/material";

import dynamic from "next/dynamic";

const VerticalLinearStepper = dynamic(
  () => import("@/components/section/events/event-hostingcomponent/Stepper")
);
const NextSection = dynamic(
  () => import("@/components/section/events/event-book/NextSection")
);
const StepperContent = dynamic(
  () =>
    import("@/components/section/events/event-hostingcomponent/StepperContent")
);
const StepperContentTwo = dynamic(
  () =>
    import(
      "@/components/section/events/event-hostingcomponent/StepperContentTwo"
    )
);
const StepperContentOne = dynamic(
  () =>
    import(
      "@/components/section/events/event-hostingcomponent/StepperContentOne"
    )
);
const StepperContentFour = dynamic(
  () =>
    import(
      "@/components/section/events/event-hostingcomponent/StepperContentFour"
    )
);
const StepperContentThree = dynamic(
  () =>
    import(
      "@/components/section/events/event-hostingcomponent/StepperContentThree"
    )
);
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
                  src={"/assets/static/image_45.png"}
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
                  <StepperContentFour />
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
