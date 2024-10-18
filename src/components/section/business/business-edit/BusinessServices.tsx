import React from "react";
import {
  Controller,
  useFieldArray,
  useFormContext,
} from "react-hook-form";

import { Box } from "@mui/material";

import dynamic from "next/dynamic";
import { businessEditApi } from "@/redux/services/listingService";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
const InputField = dynamic(
  () => import("@/components/common/form-fields/InputField")
);

const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);
const BusinessServices = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { handleSubmit, control } = useFormContext();
    const {
      fields: servicesFields,
      append: appendService,
      remove: removeService,
    } = useFieldArray({
      control,
      name: "services",
      defaultValue: [{ title: "" }],
    });

   const {
     fields: facilitiesFields,
     append: appendFacility,
     remove: removeFacility,
   } = useFieldArray({
     control,
     name: "facilities",
     defaultValue: [{ title: "" }],
   });

  const handleServices = async (values) => {
   const servicesData = {
     highlights: values.highlights || [],
     services: values.services || [],
     facilities: values.facilities || [],
     type: values.type === 1 ? "services" : values.type,
     logo: values.logo || null,
   };

    try {
      await dispatch(businessEditApi(servicesData)).unwrap();
    } catch (error) {}
    console.log(values, "Services Form Values");
  };

  return (
    <section>
      <Box component={"form"} onSubmit={handleSubmit(handleServices)}>
        <div>
          <div className="text-f22 font-semibold text-ik_bluegreydarken3">
            <h6>Store Highlights</h6>
          </div>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                className="bg-ik_bluegreylighten3 py-2.5 px-3 rounded-md mb-2.5"
                key={index}
              >
                <div className="text-f16 font-normal mb-2">
                  <p>{`Highlight ${index + 1}`}</p>
                </div>
                <div className="mb-2">
                  <InputField
                    name={`highlights[${index}][title]`}
                    placeholder="Business Name"
                    type="text"
                  />
                </div>
                <div>
                  <InputField
                    name={`highlights[${index}][description]`}
                    placeholder="Business Description"
                    type="text"
                  />
                </div>
              </div>
            ))}
        </div>
        <div>
          <div className="text-f22 font-semibold text-ik_bluegreydarken3">
            <h6>Services</h6>
          </div>
          {servicesFields.map((item, index) => (
            <div key={item.id} className="flex gap-4 w-full items-center">
              <div className="w-full mb-2">
                <Controller
                  name={`services[${index}].title`}
                  control={control}
                  render={({ field }) => <InputField {...field} type="text" />}
                />
              </div>
              <button type="button" onClick={() => removeService(index)}>
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
              onClick={() => appendService({ title: "" })}
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
        <div className="pt-6">
          <div className="text-f22 font-semibold text-ik_bluegreydarken3 ">
            <h6>Facilities Available</h6>
          </div>
          {facilitiesFields.map((item, index) => (
            <div key={item.id} className="flex gap-4 w-full items-center">
              <div className="w-full mb-2">
                <Controller
                  name={`facilities[${index}].title`}
                  control={control}
                  render={({ field }) => <InputField {...field} type="text" />}
                />
              </div>
              <button type="button" onClick={() => removeFacility(index)}>
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
              onClick={() => appendFacility({ title: "" })}
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

export default BusinessServices;
