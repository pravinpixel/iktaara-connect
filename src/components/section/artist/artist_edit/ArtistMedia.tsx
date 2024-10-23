import React from "react";
// import { FormProvider, useForm } from "react-hook-form";

import { Box } from "@mui/material";

import dynamic from "next/dynamic";
import { useFieldArray, useFormContext } from "react-hook-form";
import UploadFile from "@/components/common/form-fields/UploadFile";
import ImageComponent from "@/views/components/ImageComponent";
import { artistSaveApi } from "@/redux/services/artistService";
import { useDispatch } from "react-redux";
import UploadDocumentField from "@/components/common/form-fields/upload/MultiFileUpload";

const InputField = dynamic(
  () => import("@/components/common/form-fields/InputField")
);

const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);

const ArtistMedia = () => {
  const { handleSubmit, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "videoUrls",
  });
  const dispatch = useDispatch();

  const handleMedia = async (values: any) => {
    console.log(values, "values");
    try {
      const res = await dispatch(artistSaveApi(values)).unwrap();
      console.log(res, "Response from API");
    } catch (error) {
      console.log(error, "Error from API");
    }
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
          {/* <UploadFile control={control} multiple={true} name={"documents"} /> */}
          <UploadDocumentField
            control={control}
            multiple={true}
            name={"documentsnew"}
          />
        </div>
        {fields.map((field, index) => (
          <div className="mb-2" key={field.id}>
            <InputField
              name={`videoUrls[${index}].url`}
              label="Video Url"
              placeholder="Enter video url"
              type="text"
            />
            <Box onClick={() => remove(index)}>
              <ImageComponent
                src="/assets/icons/delete-icons.svg"
                alt="delete"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </Box>
          </div>
        ))}
        <CustomButton
          className="px-16 py-3.5"
          label="Add"
          onClick={() => append({ url: "" })}
        ></CustomButton>
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
