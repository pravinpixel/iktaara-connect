import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";

const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
const steps = [
  {
    label: "Event Information (1/2)",
  },
  {
    label: "Setup Venue & Date",
  },
  {
    label: "Setup Fee/Ticket",
  },
  {
    label: "Payment",
  },
  {
    label: "General",
  },
];

export default function VerticalLinearStepper({
  onStepChange,
}: {
  onStepChange: (step: number) => void;
}) {
  const [activeStep, setActiveStep] = React.useState(0);

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  // const handleNext = () => {
  //   if (activeStep < steps.length - 1) {
  //     setActiveStep((prevActiveStep) => {
  //       const newStep = prevActiveStep + 1;
  //       onStepChange(newStep); // Notify the parent component about the step change
  //       return newStep;
  //     });
  //   }
  // };

  // const handleBack = () => {
  //   if (activeStep > 0) {
  //     setActiveStep((prevActiveStep) => {
  //       const newStep = prevActiveStep - 1;
  //       onStepChange(newStep); // Notify the parent component about the step change
  //       return newStep;
  //     });
  //   }
  // };

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    onStepChange(index); // Notify parent component about the change
  };

  // const handleStepClick = (index) => {
  //   if (index > activeStep) {
  //     handleNext();
  //   } else if (index < activeStep) {
  //     handleBack();
  //   }
  // };
  const handleReset = () => {
    setActiveStep(0);
    onStepChange(0); // Reset the parent step
  };

  return (
    <Box className="w-full flex items-center justify-center p-4">
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        sx={{
          "& .MuiStepConnector-line": {
            // borderWidth: " 2px!important",
            display: "block",
            borderColor: "var(--ik_pink-foreground)",
            borderLeftStyle: "solid",
            borderLeftWidth: "2px",
            minHeight: "24px",
            opacity: 0.2,
          },
        }}
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              //   optional={
              //     index === steps.length - 1 ? (
              //       <Typography variant="caption">Last step</Typography>
              //     ) : null
              //   }
              StepIconComponent={() => (
                <ImageComponent
                  src={
                    activeStep === index
                      ? "/assets/static/image_42.png"
                      : "/assets/static/image_43.png"
                  }
                  alt="image"
                  width={24}
                  height={24}
                />
              )}
            >
              <Typography
                className="font-semibold text-f18 leading-6 text-ik_green-foreground cursor-pointer"
                onClick={() => handleStepClick(index)}
              >
                {" "}
                {step.label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}></Box>

      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
