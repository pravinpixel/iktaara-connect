import React, { useEffect } from "react";
// import { FormProvider, useForm } from "react-hook-form";

import { Box } from "@mui/material";

import dynamic from "next/dynamic";
import { useFieldArray, useFormContext } from "react-hook-form";
import UploadFile from "@/components/common/form-fields/UploadFile";
import ImageComponent from "@/views/components/ImageComponent";
import { artistSaveApi } from "@/redux/services/artistService";
import { useDispatch } from "react-redux";
import UploadDocumentField from "@/components/common/form-fields/upload/MultiFileUpload";
import { notify } from "@/utils/helpers/global-function";
import { FormHelperText } from "@mui/material";
import SingleFileUpload from "@/components/common/form-fields/upload/SingleFileUpload";

const InputField = dynamic(
  () => import("@/components/common/form-fields/InputField")
);

const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);

const ArtistMedia = () => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  console.log(errors,"lllll");
  

  const { fields, append, remove } = useFieldArray({
    control,
    name: "videos",
  });
  const dispatch = useDispatch();

  const handleMedia = async (values: any) => {
    console.log(values, "values");
    try {
      const res = await dispatch(artistSaveApi(values)).unwrap();
      console.log(res, "Response from API");
      notify(res);
    } catch (error) {
      console.log(error, "Error from API");
    }
  };
  useEffect(() => {
    setValue("videos", [{ url: "", thumbnail: "" }]);
  }, [setValue]);
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
            name={"documents"}
          />
          {errors?.documents?.message && (
            <FormHelperText error>
              {errors?.documents?.message}
            </FormHelperText>
          )}
        </div>
        {/* {fields.map((field, index) => (
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
        ))} */}
        <Box>
          <div>
            {fields.map((field, index) => (
              <div key={field.id}>
                <div className=" py-2.5 px-3 rounded-md mb-2.5">
                  <div className="flex justify-between items-center">
                    <div className="text-f16 font-normal mb-2">
                      <p>Videos {index + 1}</p>
                    </div>
                    <button type="button" onClick={() => remove(index)}>
                      <ImageComponent
                        src={"/assets/icons/delete-icons.svg"}
                        width={20}
                        height={20}
                        alt={"delete"}
                      />
                    </button>
                  </div>
                  <div className="mb-2">
                    {/* <InputField
                    {...register(`recognitions.${index}.name`)}
                    placeholder="Business Name"
                    type="text"
                  /> */}
                    <InputField
                      name={`videos[${index}].url`}
                      label="Video Url"
                      placeholder="Enter video url"
                      type="text"
                    />
                  </div>

                  <div>
                    <SingleFileUpload
                      control={control}
                      multiple={false}
                      name={`videos[${index}].thumbnail`}
                    />
                   
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-5">
              <button
                type="button"
                className="bg-ik_bluegreylighten3 rounded-md p-3"
                onClick={() => append({ url: "", thumbnail: "" })}
              >
                <div className="flex gap-1">
                  <ImageComponent
                    src={"/assets/icons/add-icons.svg"}
                    width={26}
                    height={26}
                    alt={"add-icons"}
                  />
                  <span className="text-f20 font-semibold text-ik_bluegreydarken3">
                    Add New
                  </span>
                </div>
              </button>
            </div>
          </div>
        </Box>
        {/* <CustomButton
          className="px-16 py-3.5"
          label="Add"
          onClick={() => append({ url: "" })}
        ></CustomButton> */}
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
