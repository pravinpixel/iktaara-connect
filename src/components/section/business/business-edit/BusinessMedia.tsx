import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Box } from "@mui/material";

import dynamic from "next/dynamic";

const ImageUpload = dynamic(
  () => import("@/components/common/form-fields/ImageUpload")
);

const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);

const BusinessMedia = () => {
  const methods = useForm();

  const { handleSubmit } = methods;

  const handleAbout = async () => {};
  return (
    <section>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleAbout)}>
          <div className="mb-3">
            <div className="mb-3">
              <span className="text-f22 font-semibold text-ik_bluegreydarken3">
                Cover Update
              </span>
            </div>
            <ImageUpload
              typeupload={true}
              type={false}
              control={undefined}
              multiple={false}
            />
          </div>
          <div className="mb-3">
            <div className="mb-3">
              <span className="text-f22 font-semibold text-ik_bluegreydarken3">
                Post Update
              </span>
            </div>
            <ImageUpload
              typeupload={true}
              type={false}
              control={undefined}
              multiple={true}
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

export default BusinessMedia;
