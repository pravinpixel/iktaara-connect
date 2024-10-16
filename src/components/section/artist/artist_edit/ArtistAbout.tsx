import React from "react";

import { Box } from "@mui/material";

import dynamic from "next/dynamic";
import { useFormContext } from "react-hook-form";

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
  // const methods = useForm();
  const {
    handleSubmit,
    setValue,

    formState: { isSubmitting },
  } = useFormContext();

  const handleAbout = async (values) => {
    console.log(values, "values");
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
          <SelectField
            label={"Performing Languages"}
            name={"perform_languages"}
            options={[
              { id: 10, name: "Engilsh" },
              { id: 20, name: "Hindi" },
              { id: 30, name: "Bengali" },
              { id: 40, name: "Punjabi" },
            ]}
          />
        </div>
        <div className="mb-2">
          <SelectField
            label={"Genre"}
            name={"perform_genere"}
            options={[
              { id: 10, name: "Classical" },
              { id: 20, name: "Western" },
              { id: 30, name: "Hindustani" },
            ]}
          />
        </div>
        <div className="mb-2">
          <SelectField
            label={"Preferred Events"}
            name={"prefered_events"}
            options={[
              { id: 10, name: "Corporate Parties" },
              { id: 20, name: "Large Events" },
              { id: 30, name: "Concerts" },
            ]}
          />
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
