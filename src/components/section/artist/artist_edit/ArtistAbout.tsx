import React from "react";

import { Box } from "@mui/material";

import dynamic from "next/dynamic";
import { useFormContext } from "react-hook-form";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import { artistSaveApi } from "@/redux/services/artistService";
import { useDispatch } from "react-redux";

const MultipleSelectField = dynamic(
  () => import("@/components/common/form-fields/MultipleSelectField")
);
const InputField = dynamic(
  () => import("@/components/common/form-fields/InputField")
);
const SelectField = dynamic(
  () => import("@/components/common/form-fields/SelectField")
);
const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);
const ArtistAbout = () => {
  const { handleSubmit } = useFormContext();
  const dispatch = useDispatch();
  const handleAbout = async (values: any) => {
    console.log(values, "values");
    try {
      const res = await dispatch(artistSaveApi(values)).unwrap();
      console.log(res, "tttt");
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <section>
      <Box component={"form"} onSubmit={handleSubmit(handleAbout)}>
        <div className="mb-2">
          <InputField
            name="artist_name"
            label="Artist Name"
            placeholder="Enter Artist Name"
            type="text"
          />
        </div>
        <div className="mb-2">
          <InputField
            name="email"
            label="Email"
            placeholder="Enter Email"
            type="text"
          />
        </div>
        <div className="mb-2">
          <InputField
            name="mobile"
            label="Mobile Number"
            placeholder="Enter Mobile Number"
            type="text"
          />
        </div>
        <div className="mb-2">
          <SelectField
            label={"Artist Type"}
            name={"artist_type"}
            options={[
              { id: 10, name: "Repair Services" },
              { id: 20, name: "Repair" },
              { id: 30, name: "Services" },
            ]}
          />
        </div>
        <div className="mb-2">
          <InputField
            name="artist_description"
            label="Profile Description"
            placeholder="Business Description"
            type="text"
            rows={5}
            multiline={true}
            InputProps={{ variant: "customtextarea" }}
          />
        </div>
        <div className="mb-2">
          <MultipleSelectField
            label={"Performing Languages"}
            name={"perform_languages"}
            placeholder={"Select Languages"}
            options={[
              { id: 10, name: "Engilsh" },
              { id: 20, name: "Hindi" },
              { id: 30, name: "Bengali" },
              { id: 40, name: "Punjabi" },
            ]}
          />
        </div>
        <div className="mb-2">
          <MultipleSelectField
            label={"Instruments"}
            name={"instruments"}
            placeholder={"Select Instruments"}
            options={[
              { id: 10, name: "Engilsh" },
              { id: 20, name: "Hindi" },
              { id: 30, name: "Bengali" },
              { id: 40, name: "Punjabi" },
            ]}
          />
        </div>
        <div className="mb-2">
          <MultipleSelectField
            label={"Genre"}
            name={"perform_genere"}
            placeholder={"Select Genre"}
            options={[
              { id: 10, name: "Classical" },
              { id: 20, name: "Western" },
              { id: 30, name: "Hindustani" },
            ]}
          />
        </div>
        <div className="mb-2">
          <MultipleSelectField
            label={"Preferred Events"}
            name={"prefered_events"}
            placeholder={"Select Events"}
            options={[
              { id: 10, name: "Corporate Parties" },
              { id: 20, name: "Large Events" },
              { id: 30, name: "Concerts" },
            ]}
          />
        </div>
        <div className="mb-2">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              {" "}
              <SelectField
                label={"City"}
                name={"city"}
                options={[
                  { id: 10, name: "Repair Services" },
                  { id: 20, name: "Repair" },
                  { id: 30, name: "Services" },
                ]}
              />
            </Grid>
            <Grid item xs={5}>
              {" "}
              <SelectField
                label={"Location"}
                name={"location"}
                options={[
                  { id: 10, name: "Repair Services" },
                  { id: 20, name: "Repair" },
                  { id: 30, name: "Services" },
                ]}
              />
            </Grid>
            <Grid item xs={3}>
              {" "}
              <InputField
                name="pincode"
                label="Pincode"
                placeholder="Enter Pincode"
                type="text"
              />
            </Grid>
          </Grid>
        </div>
        <Box className="flex justify-start w-full mt-6">
          <CustomButton type="submit" className="px-16 py-3.5" label="Save">
            Save
          </CustomButton>
        </Box>
      </Box>
    </section>
  );
};

export default ArtistAbout;
