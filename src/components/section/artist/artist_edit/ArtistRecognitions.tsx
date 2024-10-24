import React, { useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { artistSaveApi } from "@/redux/services/artistService";
import { useDispatch } from "react-redux";
import { notify } from "@/utils/helpers/global-function";

const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);

const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);

const DatePickerField = dynamic(
  () => import("@/components/common/form-fields/DatePickerField")
);

const InputField = dynamic(
  () => import("@/components/common/form-fields/InputField")
);

const ArtistRecognitions = () => {
  const { control, register, handleSubmit } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "recognitions",
  });
  const dispatch = useDispatch();
  const handleRecognitions = async (values: any) => {
    console.log(values, "values");

    try {
      const res = await dispatch(artistSaveApi(values)).unwrap();
      console.log(res, "tttt");
      notify(res);
    } catch (error) {
      console.log(error, "error");
      notify(error);
    }
  };

  //  useEffect(() => {
  //   if (fields.length === 0) {
  //     append({ name: "", description: "", date: "" });
  //   }
  // }, [fields, append]);
  return (
    <section>
      <Box component={"form"} onSubmit={handleSubmit(handleRecognitions)}>
        <div>
          {fields.map((field, index) => (
            <div key={field.id}>
              <div className="bg-ik_bluegreylighten3 py-2.5 px-3 rounded-md mb-2.5">
                <div className="flex justify-between items-center">
                  <div className="text-f16 font-normal mb-2">
                    <p>Recognition {index + 1}</p>
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
                    name={`recognitions.${index}.title`}
                    label="Title"
                    placeholder="Title"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  {/* <InputField
                    {...register(`recognitions.${index}.description`)}
                    placeholder="Business Description"
                    type="text"
                  /> */}
                  <InputField
                    name={`recognitions.${index}.description`}
                    label="Descriptions"
                    placeholder="Descriptions"
                    type="text"
                  />
                </div>
                <div>
                  <DatePickerField
                    name={`recognitions.${index}.date`}
                    label=""
                    fieldProps={{
                      placeholder: "Date",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="mt-5">
            <button
              type="button"
              className="bg-ik_bluegreylighten3 rounded-md p-3"
              onClick={() => append({ name: "", description: "", date: "" })}
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

        <Box className="flex justify-start w-full mt-6">
          <CustomButton type="submit" className="px-16 py-3.5" label="Save">
            Save
          </CustomButton>
        </Box>
      </Box>
    </section>
  );
};

export default ArtistRecognitions;
