import React from "react";

import { Box } from "@mui/material";

import dynamic from "next/dynamic";
import { useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import { businessEditApi } from "@/redux/services/listingService";
import { AppDispatch } from "@/redux/store";


const InputField = dynamic(
  () => import("@/components/common/form-fields/InputField")
);
const SelectField = dynamic(
  () => import("@/components/common/form-fields/SelectField")
);
const DatePickerField = dynamic(
  () => import("@/components/common/form-fields/DatePickerField")
);
const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);
const MultipleSelectField = dynamic(
  () => import("@/components/common/form-fields/MultipleSelectField")
);

type Props = {
  business_description: string;
  business_name: string;
  business_specialist: string;
  business_type: string;
  established_year: string | number;
  type: string | number;
  logo: string | null;
};

const BusinessAbout = ({ essentialList }: { essentialList: any }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { handleSubmit } = useFormContext();

  const handleAbout = async (values: Props) => {
    const aboutData = {
      business_description: values.business_description || "",
      business_name: values.business_name || "",
      business_specialist: values.business_specialist || "",
      business_type: values.business_type || "",
      established_year: values.established_year || "",
      type: values.type === 0 ? "about" : values.type,
      logo: values.logo || null,
    };

    try {
      await dispatch(businessEditApi(aboutData)).unwrap();
    } catch (error) {}
    console.log(values, "about");
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
            options={essentialList?.business_type.map((item) => ({
              id: item.id,
              name: item.name,
            }))}
            // options={[
            //   { id: 10, name: "Repair Services" },
            //   { id: 20, name: "Repair" },
            //   { id: 30, name: "Services" },
            // ]}
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
            options={essentialList?.instrument_type.map((item) => ({
              id: item.id,
              name: item.name,
            }))}
            // options={[
            //   { id: 10, name: "Repair Services" },
            //   { id: 20, name: "Repair" },
            //   { id: 30, name: "Services" },
            // ]}
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
          <CustomButton type="submit" className="px-16 py-3.5" label="Save">
            Save
          </CustomButton>
        </Box>
      </Box>
    </section>
  );
};

export default BusinessAbout;


