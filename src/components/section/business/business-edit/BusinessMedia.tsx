import React from "react";

import { Box } from "@mui/material";

import dynamic from "next/dynamic";
import { useFormContext } from "react-hook-form";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { businessEditApi } from "@/redux/services/listingService";
import { notify } from "@/utils/helpers/global-function";
import UploadDocumentField from "@/components/common/form-fields/upload/MultiFileUpload";

const UploadFile = dynamic(
  () => import("@/components/common/form-fields/UploadFile")
);

const CustomLoadingButton = dynamic(
  () => import("@/components/common/form-fields/CustomLoadingButton")
);

const BusinessMedia = () => {
    const dispatch = useDispatch<AppDispatch>();
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useFormContext();

  const handleMedia = async (values: BusinessTypeForm) => {
    const mediaData = {
      ...values,
      type: "media",
      business_id: values.id,
      cover_image: values?.cover_image || "",
      documents: values?.documents || [],
      logo: values?.logo || "",
    };
    

    try {
      await dispatch(businessEditApi(mediaData)).unwrap();
    } catch (error) {
       notify(error);
    }
    console.log(values, "mediaData");
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
          <UploadDocumentField
            control={control}
            multiple={false}
            name={"cover_image"}
          />
        </div>
        <div className="mb-3">
          <div className="mb-3">
            <span className="text-f22 font-semibold text-ik_bluegreydarken3">
              Post Update
            </span>
          </div>
          <UploadDocumentField
            control={control}
            multiple={true}
            name={"documents"}
          />
        </div>
        <Box className="flex justify-start w-full mt-6">
          <CustomLoadingButton
            type="submit"
            className="px-16 py-3.5"
            label="Save"
            loading={isSubmitting}
          />
        </Box>
      </Box>
    </section>
  );
};

export default BusinessMedia;
