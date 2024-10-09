import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../form-fields/InputField";
import SelectField from "../form-fields/SelectField";
import { Box } from "@mui/material";
import CustomButton from "../form-fields/CustomButton";

const ArtistAbout = () => {
  const methods = useForm();

  const { handleSubmit } = methods;

  const handleAbout = async () => {};
  return (
    <section>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleAbout)}>
          <div className="mb-2">
            <InputField
              name="name"
              label="Artist Name"
              placeholder="Enter Artist Name"
              type="text"
            />
          </div>
          <div className="mb-2">
            <SelectField
              label={"Artist Type"}
              name={"Business"}
              options={[
                { id: 10, name: "Repair Services" },
                { id: 20, name: "Repair" },
                { id: 30, name: "Services" },
              ]}
            />
          </div>
          <div className="mb-2">
            <InputField
              name="description"
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
              name={"languages"}
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
              name={"genre"}
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
              name={"events"}
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
        </form>
      </FormProvider>
    </section>
  );
};

export default ArtistAbout;
