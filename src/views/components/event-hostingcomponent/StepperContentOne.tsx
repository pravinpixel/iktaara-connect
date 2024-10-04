import React from "react";
import { Box, InputAdornment } from "@mui/material";
import { Grid } from "@mui/material";

import { Typography } from "@mui/material";
import PaidData from "./PaidData";
import CustomImageButton from "../CustomImageButton";
import { FormProvider, useForm } from "react-hook-form";
import SelectField from "../form-fields/SelectField";
import InputField from "../form-fields/InputField";

export default function StepperContentOne() {
  const methods = useForm();
  const location = [
    {
      id: 1,
      title: "Free Entry",
      image: "/images/static/image_26.png",
    },
    {
      id: 2,
      title: "Paid Entry",
      image: "/images/static/image_26.png",
    },
  ];
  return (
    <>
      <FormProvider {...methods}>
        {" "}
        <Box className="p-6 ">
          <Typography className="text-f16 font-normal leading-5 text-ik_bluegreybluegrey pb-2">
            Select Ticket Type
          </Typography>
          <Grid container spacing={2} className="max-w-[750px]">
            {" "}
            {location?.map((item) => (
              <Grid item xs={6} key={item.id}>
                <PaidData filterCate={item} />
                {/* <FilterLanguage filterLanguage={item} /> */}
              </Grid>
            ))}
          </Grid>
          <CustomImageButton
            image="/images/static/image_48.png"
            label="Add Ticket"
            variant="event-button"
            width={16}
            height={16}
          ></CustomImageButton>
        </Box>
        <Box className="p-6">
          {/* <Typography className="text-f16 font-normal leading-5 text-ik_bluegreybluegrey pb-2">
            Ticket Type
          </Typography> */}
          <Grid container spacing={2} className="max-w-[750px]">
            <Grid item xs={4}>
              <SelectField
                label={"Ticket Type"}
                name={"Business"}
                options={[
                  { id: 10, name: "Repair Services" },
                  { id: 20, name: "Repair" },
                  { id: 30, name: "Services" },
                ]}
              />
            </Grid>
            <Grid item xs={4}>
              <InputField
                name="name"
                label="Price"
                placeholder="Business Name"
                type="text"
              />
            </Grid>
            <Grid item xs={4}>
              <InputField
                name="name"
                label="Max Tickets Allowed"
                placeholder="Business Name"
                type="text"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} className="max-w-[750px]">
            <Grid item xs={12}>
              <InputField
                name="name"
                label=""
                placeholder="Kids less than 2 years are allowed with no additional charges"
                type="text"
                multiline={true}
                rows={5}
                InputProps={{ variant: "customtextarea" }}
              />
            </Grid>
          </Grid>
        </Box>
      </FormProvider>
    </>
  );
}
