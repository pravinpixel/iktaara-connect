import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../form-fields/InputField";
import SelectField from "../form-fields/SelectField";
import { Box } from "@mui/material";
import CustomButton from "../form-fields/CustomButton";

const BusinessAbout = () => {
  const methods = useForm();

  const { handleSubmit } = methods;

   const handleAbout = async () => {

   }
  return (
    <section>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleAbout)}>
          <div className="mb-2">
            <InputField
              name="name"
              label="Business Name"
              placeholder="Business Name"
              type="text"
            />
          </div>
          <div className="mb-2">
            <SelectField
              label={"Business Type"}
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
              label="Business Description"
              placeholder="Business Description"
              type="text"
              rows={5}
              multiline={true}
              InputProps={{ variant: "customtextarea" }}
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

export default BusinessAbout;
