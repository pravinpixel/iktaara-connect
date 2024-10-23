import React from "react";

import { Box } from "@mui/material";

import dynamic from "next/dynamic";
import { useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import { businessEditApi } from "@/redux/services/listingService";
import { AppDispatch } from "@/redux/store";
import { notify } from "@/utils/helpers/global-function";


const InputField = dynamic(
  () => import("@/components/common/form-fields/InputField")
);
const SelectField = dynamic(
  () => import("@/components/common/form-fields/SelectField")
);
const DatePickerField = dynamic(
  () => import("@/components/common/form-fields/DatePickerField")
);
const CustomLoadingButton = dynamic(
  () => import("@/components/common/form-fields/CustomLoadingButton")
);
const MultipleSelectField = dynamic(
  () => import("@/components/common/form-fields/MultipleSelectField")
);

interface BusinessAbout {
  essentialList: any;
  listingsView: BusinessTypeForm;
}

  export default function BusinessAbout({ essentialList, listingsView }: BusinessAbout) {
    console.log(listingsView, "listingsView");
    const dispatch = useDispatch<AppDispatch>();
    const {
      handleSubmit,
      setValue,
      formState: { isSubmitting },
    } = useFormContext();

    const handleAbout = async (values: BusinessTypeForm) => {
      const aboutData = {
        business_description: values?.business_description || "",
        business_name: values?.business_name || "",
        business_specialist: values?.business_specialist || "",
        business_type: values?.business_type || "",
        established_year: values?.established_year || "",
        type: "about",
        logo: values?.logo || "",
      };

      try {
        const res = await dispatch(businessEditApi(aboutData)).unwrap();
        if (res?.business?.id) {
          setValue("business_id", res?.business?.id);
        }
      } catch (error) {
        notify(error);
      }
    };

    return (
      <section>
        <Box component={"form"} onSubmit={handleSubmit(handleAbout)}>
          <div className="mb-2">
            <InputField
              name="business_name"
              label="Business Name"
              placeholder="Business Name"
              type="text"
            />
          </div>
          <div className="mb-2">
            <SelectField
              label={"Business Type"}
              name={"business_type"}
              options={essentialList?.business_type.map(
                (item: { id: number; name: string }) => ({
                  id: item.id,
                  name: item.name,
                })
              )}
            />
          </div>
          <div className="mb-2">
            <DatePickerField
              name="established_year"
              label="Date"
              fieldProps={{
                placeholder: "Date",
              }}
            />
          </div>
          <div className="mb-2">
            <MultipleSelectField
              label={"Instrument Types"}
              name={"business_specialist"}
              placeholder={"Select Instrument Types"}
              options={essentialList?.instrument_type.map(
                (item: { id: number; name: string }) => ({
                  id: item.id,
                  name: item.name,
                })
              )}
            />
          </div>
          <div className="mb-2">
            <InputField
              name="business_description"
              label="Business Description"
              placeholder="Business Description"
              type="text"
              rows={5}
              multiline={true}
              InputProps={{ variant: "customtextarea" }}
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




