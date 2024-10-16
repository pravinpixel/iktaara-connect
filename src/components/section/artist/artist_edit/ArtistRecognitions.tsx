import React from "react";
import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
// import InputField from "../form-fields/InputField";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

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
  const { control, register, handleSubmit, getValues } = useFormContext({
    defaultValues: {
      recognitions: [{ name: "", description: "", date: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "recognitions",
  });

  const handleRecognitions = async (values) => {
    console.log(values, "Recognition Form Values");
  };
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
                  <InputField
                    {...register(`recognitions.${index}.name`)}
                    placeholder="Business Name"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <InputField
                    {...register(`recognitions.${index}.description`)}
                    placeholder="Business Description"
                    type="text"
                  />
                </div>
                <div>
                  <DatePickerField
                    {...register(`recognitions.${index}.date`)}
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
        {/* <div>
              <div className="text-f22 font-semibold text-ik_bluegreydarken3">
                <h6>Services</h6>
              </div>
              {fields.map((item, index) => (
                <div key={item.id} className="flex gap-4 w-full items-center">
                  <div className="w-full mb-2">
                    <Controller
                      name={`fields.${index}.text`}
                      control={control}
                      render={({ field }) => (
                        <InputField
                          {...field}
                          name="description"
                          // placeholder="Business Description"
                          type="text"
                        />
                      )}
                    />
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
              ))}
              <div className="mt-5">
                <button
                  type="button"
                  className="bg-ik_bluegreylighten3 rounded-md p-3"
                  onClick={() => append({ description: "" })}
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
            </div> */}
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
