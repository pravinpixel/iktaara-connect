/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Grid, Stack, Typography } from "@mui/material";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import CustomButton from "../form-fields/CustomButton";
import InputField from "../form-fields/InputField";
import ImageComponent from "../ImageComponent";

export default function PromotionalCreatives() {
  const methods = useForm();
  const { control, register } = useForm({
    defaultValues: {
      eventhosting: [{ event_description: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "eventhosting", // unique name for your Field Array
  });
  return (
    <Box className="p-6 ">
      <Typography className="text-f22 font-semibold leading-7 text-ik_bluegreydarken3 pb-2">
        Upload Promotional Creatives
      </Typography>
      <Box>
        <Grid container spacing={2} className="max-w-[750px]">
          <Grid item xs={6}>
            {" "}
            <Box className="bg-ik_bluegreylighten5 rounded-md p-5">
              <ImageComponent
                src="/images/static/image_46.png"
                className="aspect-[135/55]"
                type={2}
              />
              <Box className="text-center mt-2">
                {" "}
                <Typography className="font-semibold text-f20 leading-6 text-ik_bluegreydarken3">
                  Event Banner
                </Typography>
                <Typography className="font-normal text-f14 leading-5 text-ik_bluegreybluegrey">
                  (Featured in event detail page) (1400 x 210px)
                </Typography>
                <Typography className="font-normal text-f14 leading-5 text-ik_bluegreydarken3">
                  Click to Upload or{" "}
                  <span className="font-normal text-f14 leading-5 text-ik_darkblue1">
                    Browse
                  </span>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <Box className="bg-ik_bluegreylighten5 rounded-md p-5">
              <ImageComponent
                src="/images/static/image_46.png"
                className="aspect-[135/55]"
                type={2}
              />
              <Box className="text-center mt-2">
                {" "}
                <Typography className="font-semibold text-f20 leading-6 text-ik_bluegreydarken3">
                  Event Banner
                </Typography>
                <Typography className="font-normal text-f14 leading-5 text-ik_bluegreybluegrey">
                  (Featured in event detail page) (1400 x 210px)
                </Typography>
                <Typography className="font-normal text-f14 leading-5 text-ik_bluegreydarken3">
                  Click to Upload or{" "}
                  <span className="font-normal text-f14 leading-5 text-ik_darkblue1">
                    Browse
                  </span>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <FormProvider {...methods}>
            <Stack
              direction={"column"}
              component={"form"}
              // onSubmit={handleSubmit(handleLogin)}
              spacing={2}
              mt={2}
              my={8}
            >
              <InputField
                className="max-w-[750px]"
                name="event"
                placeholder="Need Singham Dhan by SID SRIRAMail"
                type="text"
                InputProps={{ variant: "customEventInput" } as any}
                label={
                  <Typography className="font-normal text-f16 leading-5 text-ik_bluegreybluegrey">
                    Name of the Event (100 character max)
                  </Typography>
                }
              ></InputField>
              <InputField
                className="max-w-[750px]"
                name="event_description"
                placeholder="Calling all music lovers! Brace yourselves for the arrival of Nee Singham Dhan, a captivating live concert experience featuring the phenomenal Sid Sriram!"
                type="text"
                InputProps={{ variant: "customEventInput" } as any}
                label={
                  <Typography className="font-normal text-f16 leading-5 text-ik_bluegreybluegrey">
                    Event Description
                  </Typography>
                }
              ></InputField>
              {/* <div>
                {fields.map((field, index) => (
                  <div key={field.id}>
                    <Stack direction="row" alignItems={"center"} spacing={2}>
                      <InputField
                        {...register(`event_description.${index}`)}
                        placeholder="Witness the maestro weave his soulful magic live, fusing Indian classical with contemporary..."
                        type="text"
                        InputProps={{ variant: "customEventInput" } as any}
                        label={
                          <Typography className="font-normal text-f16 leading-5 text-ik_bluegreybluegrey">
                            Reasons to attend (Add a max of 5 points to sell)
                          </Typography>
                        }
                      />

                      <DeleteIcon onClick={() => remove(index)} />
                    </Stack>
                  </div>
                ))}
                <Button
                  onClick={() => append({ event_description: "" })}
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                >
                  Add More
                </Button>
              </div> */}
              <div>
                <div>
                  {fields.map((field, index) => (
                    <Stack
                      direction="row"
                      spacing={2}
                      key={field.id}
                      mt={1}
                      alignItems={"center"}
                    >
                      <InputField
                        {...register(`eventhosting.${index}.event_description`)}
                        placeholder="Witness the maestro weave his soulful magic live, fusing Indian classical with contemporary..."
                        type="text"
                        InputProps={{ variant: "customEventInput" } as any}
                        label={
                          <Typography className="font-normal text-f16 leading-5 text-ik_bluegreybluegrey">
                            Reasons to attend (Add a max of 5 points to sell)
                          </Typography>
                        }
                        // className="max-w-[750px]"
                        sx={{ width: "750px" }}
                      />
                      {index != 0 && (
                        <>
                          <Box className="" onClick={() => remove(index)}>
                            <ImageComponent
                              src={"/images/static/image_47.png"}
                              alt=""
                              width={21}
                              height={21}
                            />
                          </Box>
                        </>
                      )}
                      {/* <Stack direction="row" alignItems={"center"} spacing={2}> */}
                      {/* <InputField
                        {...register(`eventhosting.${index}.event_description`)}
                        placeholder="Witness the maestro weave his soulful magic live, fusing Indian classical with contemporary..."
                        type="text"
                        InputProps={{ variant: "customEventInput" } as any}
                        className="max-w-[750px]"
                        label={
                          <Typography className="font-normal text-f16 leading-5 text-ik_bluegreybluegrey">
                            Reasons to attend (Add a max of 5 points to sell)
                          </Typography>
                        }
                      />
                      {index != 0 && (
                        <DeleteIcon onClick={() => remove(index)} />
                      )} */}
                    </Stack>
                    // </div>
                  ))}
                </div>
              </div>
              <CustomButton
                onClick={() => append({ event_description: "" })}
                variant="event-button"
                label="Add"
                className="w-[150px]"
              ></CustomButton>
            </Stack>
          </FormProvider>
        </Box>
      </Box>
    </Box>
  );
}
