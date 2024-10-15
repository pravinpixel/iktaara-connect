import React from "react";
// import ImageComponent from "../ImageComponent";
import { Checkbox } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
// import InputField from "../form-fields/InputField";
import { Box } from "@mui/material";
// import CustomButton from "../form-fields/CustomButton";
import dynamic from "next/dynamic";

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
  const methods = useForm();

  const { handleSubmit } = methods;

  const handleAbout = async () => {};
  return (
    <section>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleAbout)}>
          <div>
            <div className="flex gap-4 pb-3">
              <div className="pt-5">
                <Checkbox {...label} className="p-0" />
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
                    name="name"
                    label=""
                    placeholder="Business Name"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 pb-3">
              <div className="pt-5">
                <Checkbox {...label} className="p-0" />
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
                    name="name"
                    label=""
                    placeholder="Business Name"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 pb-3">
              <div className="pt-5">
                <Checkbox {...label} className="p-0" />
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
                    name="name"
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
        </form>
      </FormProvider>
    </section>
  );
};

export default ArtistContact;
