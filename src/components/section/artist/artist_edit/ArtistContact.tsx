import React from "react";
// import ImageComponent from "../ImageComponent";

import { useForm, useFormContext } from "react-hook-form";
// import InputField from "../form-fields/InputField";
import { Box } from "@mui/material";
// import CustomButton from "../form-fields/CustomButton";
import dynamic from "next/dynamic";
import CustomCheckbox from "@/components/common/form-fields/CheckBox";

const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);

const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);

const InputField = dynamic(
  () => import("@/components/common/form-fields/InputField")
);
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ArtistContact = () => {
  // const methods = useForm();

  // const { handleSubmit } = methods;

  // const handleAbout = async () => {};
  const {
    handleSubmit,
    watch, // To track the form values
    setValue,
    formState: { isSubmitting },
  } = useFormContext();

  const handleAbout = async (values) => {
    // const customer_services = {
    //   0: {
    //     live_online: values.live_online || 0,
    //     live_online_description: values.live_online_description,
    //     home_pickup: values.home_pickup || 0,
    //     home_pickup_description: values.home_pickup_description,
    //     distance_service: values.distance_service || 0,
    //     distance_service_description: values.distance_service_description,
    //   },
    // };
    console.log(values, "customer_services");
  };
  return (
    <section>
      <Box component={"form"} onSubmit={handleSubmit(handleAbout)}>
        {" "}
        <div>
          <div className="flex gap-4 pb-3">
            <div className="pt-5">
              <CustomCheckbox label="" name="live_online" />
            </div>
            <div className="w-full">
              <div className="flex items-center gap-3">
                <ImageComponent
                  src={"/assets/icons/live-icons.svg"}
                  width={60}
                  height={60}
                  alt={"arrowdown"}
                />
                <div className="text-f18 font-semibold text-ik_bluegreydarken3">
                  <span>LIVE Online</span>
                </div>
              </div>
              <div className="mt-2">
                <InputField
                  name="live_online_description"
                  label=""
                  placeholder="Business Name"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 pb-3">
            <div className="pt-5">
              <CustomCheckbox label="" name="home_pickup" />
            </div>
            <div className="w-full">
              <div className="flex items-center gap-3">
                <ImageComponent
                  src={"/assets/icons/home-icons.svg"}
                  width={60}
                  height={60}
                  alt={"arrowdown"}
                />
                <div className="text-f18 font-semibold text-ik_bluegreydarken3">
                  <span>Home Pickup</span>
                </div>
              </div>
              <div className="mt-2">
                <InputField
                  name="home_pickup_description"
                  label=""
                  placeholder="Business Name"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 pb-3">
            <div className="pt-5">
              <CustomCheckbox label="" name="distance_service" />
            </div>
            <div className="w-full">
              <div className="flex items-center gap-3">
                <ImageComponent
                  src={"/assets/icons/distance-icons.svg"}
                  width={60}
                  height={60}
                  alt={"arrowdown"}
                />
                <div className="text-f18 font-semibold text-ik_bluegreydarken3">
                  <span>Distance</span>
                </div>
              </div>
              <div className="mt-2">
                <InputField
                  name="distance_service_description"
                  label=""
                  placeholder="Business Name"
                  type="text"
                />
              </div>
            </div>
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

export default ArtistContact;
