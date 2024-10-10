import React, { useState } from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";

import { Typography } from "@mui/material";

import { FormProvider, useForm } from "react-hook-form";
import InputField from "../form-fields/InputField";
import ImageComponent from "../ImageComponent";
import { Stack } from "@mui/material";

export default function StepperContentThree() {
  const methods = useForm();
  const [isSelected, setIsSelected] = useState(false);
  return (
    <>
      <FormProvider {...methods}>
        {" "}
        <Box className="p-6 mb-[50px]">
          <Typography className="text-f16 font-normal leading-5 text-ik_bluegreybluegrey pb-2">
            Term and conditions
          </Typography>
          <Grid container spacing={2} className="max-w-[750px]">
            <Grid item xs={12} className="cursor-pointer">
              <Stack
                direction="row"
                spacing={isSelected ? 0 : 1}
                alignItems="center"
                className={isSelected ? "new" : ""}
                onClick={() => setIsSelected(true)}
              >
                <Box>
                  <ImageComponent
                    src="/images/static/image_49.png"
                    alt="image"
                    width={4}
                    height={44}
                  />
                </Box>

                <InputField
                  name="name"
                  label=""
                  placeholder="Tickets once booked cannot be exchanged or refunded"
                  type="text"
                  multiline={true}
                  rows={5}
                  InputProps={{ variant: "customtextarea" }}
                  sx={{ width: "720px" }}
                />
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Box>
                  <ImageComponent
                    src="/images/static/image_49.png"
                    alt="image"
                    width={4}
                    height={44}
                  />
                </Box>

                <InputField
                  name="name"
                  label=""
                  placeholder="Tickets once booked cannot be exchanged or refunded"
                  type="text"
                  multiline={true}
                  rows={5}
                  InputProps={{ variant: "customtextarea" }}
                  sx={{ width: "720px" }}
                />
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Box>
                  <ImageComponent
                    src="/images/static/image_49.png"
                    alt="image"
                    width={4}
                    height={44}
                  />
                </Box>

                <InputField
                  name="name"
                  label=""
                  placeholder="Tickets once booked cannot be exchanged or refunded"
                  type="text"
                  multiline={true}
                  rows={5}
                  InputProps={{ variant: "customtextarea" }}
                  sx={{ width: "720px" }}
                />
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Box>
                  <ImageComponent
                    src="/images/static/image_49.png"
                    alt="image"
                    width={4}
                    height={44}
                  />
                </Box>

                <InputField
                  name="name"
                  label=""
                  placeholder="Tickets once booked cannot be exchanged or refunded"
                  type="text"
                  multiline={true}
                  rows={5}
                  InputProps={{ variant: "customtextarea" }}
                  sx={{ width: "720px" }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </FormProvider>
    </>
  );
}
