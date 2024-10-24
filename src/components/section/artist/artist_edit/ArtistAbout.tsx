import React, { useState } from "react";

import { Box } from "@mui/material";

import dynamic from "next/dynamic";
import { useFormContext } from "react-hook-form";

import { Grid } from "@mui/material";
import { artistSaveApi } from "@/redux/services/artistService";
import { useDispatch } from "react-redux";
import { essentialLocationApi } from "@/redux/services/essentialService";
import { notify } from "@/utils/helpers/global-function";

const MultipleSelectField = dynamic(
  () => import("@/components/common/form-fields/MultipleSelectField")
);
const InputField = dynamic(
  () => import("@/components/common/form-fields/InputField")
);
const SelectField = dynamic(
  () => import("@/components/common/form-fields/SelectField")
);
const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);
const ArtistAbout = ({ essentialList }: { essentialList: any }) => {
  const { handleSubmit, setValue } = useFormContext();
  const dispatch = useDispatch();

  const [locationOptions, setLocationOptions] = useState([]);
  // const handleAbout = async (values: any) => {
  //   console.log(values, "values");
  //   const updatedValues = {
  //     ...values,
  //     type: values.type === 0 ? "about" : values.type, // Replace 0 with 'new_type_value'
  //   };
  //   console.log(updatedValues, "updated values");
  //   try {
  //     const res = await dispatch(artistSaveApi(updatedValues)).unwrap();
  //     console.log(res, "tttt");
  //     if (res?.artist?.id) {
  //       setValue("artist_id", res.artist.id); // Set artist_id in the form
  //       console.log("Artist ID set in form:", res.artist.id);
  //     }
  //   } catch (error) {
  //     console.log(error, "error");
  //   }
  // };

  const handleAbout = async (values: any) => {
    console.log(values, "values");

    try {
      const res = await dispatch(artistSaveApi(values)).unwrap();
      console.log(res, "tttt");
      notify(res);
      if (res?.artist?.id) {
        setValue("artist_id", res.artist.id);
        setValue("id", res.artist.id);
        console.log("Artist ID set in form:", res.artist.id);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  // const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const cityId = event.target.value;
  //   locationList(Number(cityId));
  // };
  const handleCityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const cityId = event.target.value as string;
    locationList(Number(cityId));
  };

  const locationList = async (cityId: number) => {
    try {
      const res = await dispatch(essentialLocationApi({ id: cityId })).unwrap();
      console.log(res, "Location List Response");
      setLocationOptions(res);
      setValue("location", res);
      notify(res.message);
    } catch (error) {
      console.log(error, "Location API Error");
    }
  };

  return (
    <section>
      <Box component={"form"} onSubmit={handleSubmit(handleAbout)}>
        <div className="mb-2">
          <InputField
            name="artist_name"
            label="Artist Name"
            placeholder="Enter Artist Name"
            type="text"
          />
        </div>
        <div className="mb-2">
          <InputField
            name="email"
            label="Email"
            placeholder="Enter Email"
            type="text"
          />
        </div>
        <div className="mb-2">
          <InputField
            name="mobile"
            label="Mobile Number"
            placeholder="Enter Mobile Number"
            type="text"
          />
        </div>
        <div className="mb-2">
          <SelectField
            label={"Artist Type"}
            name={"artist_type"}
            options={essentialList?.artist_type}
          />
        </div>
        <div className="mb-2">
          <InputField
            name="artist_description"
            label="Profile Description"
            placeholder="Business Description"
            type="text"
            rows={5}
            multiline={true}
            InputProps={{ variant: "customtextarea" }}
          />
        </div>
        <div className="mb-2">
          <MultipleSelectField
            label={"Performing Languages"}
            name={"perform_languages"}
            // placeholder={"Select Languages"}
            options={essentialList?.languages}
          />
        </div>
        <div className="mb-2">
          <MultipleSelectField
            label={"Instruments"}
            name={"instruments"}
            // placeholder={"Select Instruments"}
            // options={[
            //   { id: 10, name: "Engilsh" },
            //   { id: 20, name: "Hindi" },
            //   { id: 30, name: "Bengali" },
            //   { id: 40, name: "Punjabi" },
            // ]}
            options={essentialList?.instrument_type}
          />
        </div>
        <div className="mb-2">
          <MultipleSelectField
            label={"Genre"}
            name={"perform_genere"}
            // placeholder={"Select Genre"}
            options={essentialList?.genere}
          />
        </div>
        <div className="mb-2">
          <MultipleSelectField
            label={"Preferred Events"}
            name={"prefered_events"}
            // placeholder={"Select Events"}
            options={essentialList?.event_type}
          />
        </div>
        <div className="mb-2">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              {" "}
              <SelectField
                label={"City"}
                name={"city"}
                options={essentialList?.city}
                onChange={handleCityChange}
              />
            </Grid>
            <Grid item xs={5}>
              {" "}
              <SelectField
                label={"Location"}
                name={"location"}
                options={locationOptions}
              />
            </Grid>
            <Grid item xs={3}>
              {" "}
              <InputField
                name="pincode"
                label="Pincode"
                placeholder="Enter Pincode"
                type="text"
              />
            </Grid>
          </Grid>
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

export default ArtistAbout;
