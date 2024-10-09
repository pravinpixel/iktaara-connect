import React from "react";
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import InputField from "../form-fields/InputField";
import { Box } from "@mui/material";
import CustomButton from "../form-fields/CustomButton";
import ImageComponent from "../ImageComponent";

const BusinessServices = () => {
  const methods = useForm();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      fields: [{ description: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });

  const handleServices = async () => { };
  return (
    <section>
      <div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleServices)}>
            <div>
              <div className="text-f22 font-semibold text-ik_bluegreydarken3">
                <h6>Store Highlights</h6>
              </div>
              <div className="bg-ik_bluegreylighten3 py-2.5 px-3 rounded-md mb-2.5">
                <div className="text-f16 font-normal mb-2">
                  <p>Highlight 1</p>
                </div>
                <div className="mb-2">
                  <InputField
                    name="name"
                    placeholder="Business Name"
                    type="text"
                  />
                </div>
                <div>
                  <InputField
                    name="description"
                    placeholder="Business Description"
                    type="text"
                  />
                </div>
              </div>
              <div className="bg-ik_bluegreylighten3 py-2.5 px-3 rounded-md mb-2.5">
                <div className="text-f16 font-normal mb-2">
                  <p>Highlight 2</p>
                </div>
                <div className="mb-2">
                  <InputField
                    name="name"
                    placeholder="Business Name"
                    type="text"
                  />
                </div>
                <div>
                  <InputField
                    name="description"
                    placeholder="Business Description"
                    type="text"
                  />
                </div>
              </div>
              <div className="bg-ik_bluegreylighten3 py-2.5 px-3 rounded-md mb-2.5">
                <div className="text-f16 font-normal mb-2">
                  <p>Highlight 3</p>
                </div>
                <div className="mb-2">
                  <InputField
                    name="name"
                    placeholder="Business Name"
                    type="text"
                  />
                </div>
                <div>
                  <InputField
                    name="description"
                    placeholder="Business Description"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div>
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
                      src={"//assets/icons/delete-icons.svg"}
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
                      src={"//assets/icons/add-icons.svg"}
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
            <div className="pt-6">
              <div className="text-f22 font-semibold text-ik_bluegreydarken3 ">
                <h6>Facilities Available</h6>
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
                      src={"//assets/icons/delete-icons.svg"}
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
                      src={"//assets/icons/add-icons.svg"}
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
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default BusinessServices;
