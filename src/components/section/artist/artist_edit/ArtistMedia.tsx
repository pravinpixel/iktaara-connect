import React from "react";
// import { FormProvider, useForm } from "react-hook-form";

import { Box } from "@mui/material";

import dynamic from "next/dynamic";
import { useFormContext } from "react-hook-form";
import UploadFile from "@/components/common/form-fields/UploadFile";

const InputField = dynamic(
  () => import("@/components/common/form-fields/InputField")
);

const ImageUpload = dynamic(
  () => import("@/components/common/form-fields/ImageUpload")
);

const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);

const ArtistMedia = () => {
  const { handleSubmit, control } = useFormContext();

  const handleMedia = async (values) => {
    console.log(values, "customer_services");
  };
  return (
    <section>
      <Box component={"form"} onSubmit={handleSubmit(handleMedia)}>
        {" "}
        <div className="mb-3">
          <div className="mb-3">
            <span className="text-f22 font-semibold text-ik_bluegreydarken3">
              Image Upload
            </span>
          </div>
          {/* <ImageUpload
            typeupload={true}
            type={false}
            control={undefined}
            multiple={true}
          /> */}
          <UploadFile
            typeupload={true}
            type={false}
            control={control}
            multiple={true}
          />
        </div>
        <div className="mb-2">
          <InputField
            name="url"
            label="Video Url"
            placeholder="Enter video url"
            type="text"
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

export default ArtistMedia;
