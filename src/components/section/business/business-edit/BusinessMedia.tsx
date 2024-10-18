import React from "react";

import { Box } from "@mui/material";

import dynamic from "next/dynamic";
import { useFormContext } from "react-hook-form";
// import UploadFile from "@/components/common/form-fields/UploadFile";


// const ImageUpload = dynamic(
//   () => import("@/components/common/form-fields/ImageUpload")
// );

const UploadFile = dynamic(
  () => import("@/components/common/form-fields/UploadFile")
);

const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);

const BusinessMedia = () => {
   const { handleSubmit, control } = useFormContext();

   const handleMedia = async (values) => {
     console.log(values, "customer_services");
   };

  return (
    <section>
      <Box component={"form"} onSubmit={handleSubmit(handleMedia)}>
        <div className="mb-3">
          <div className="mb-3">
            <span className="text-f22 font-semibold text-ik_bluegreydarken3">
              Cover Update
            </span>
          </div>
          <UploadFile
            typeupload={true}
            type={false}
            control={control}
            multiple={false}
          />
        </div>
        <div className="mb-3">
          <div className="mb-3">
            <span className="text-f22 font-semibold text-ik_bluegreydarken3">
              Post Update
            </span>
          </div>
          <UploadFile
            typeupload={true}
            type={false}
            control={control}
            multiple={true}
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

export default BusinessMedia;
