import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import dynamic from "next/dynamic";
import { useFormContext } from "react-hook-form";
import SelectField from "@/components/common/form-fields/SelectField";
import { businessEditApi } from "@/redux/services/listingService";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { essentialLocationApi } from "@/redux/services/essentialService";
import { notify } from "@/utils/helpers/global-function";

const CustomCheckbox = dynamic(
  () => import("@/components/common/form-fields/CheckBox")
);
const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
const InputField = dynamic(
  () => import("@/components/common/form-fields/InputField")
);
const TimePickerField = dynamic(
  () => import("@/components/common/form-fields/TimePickerField")
);
const CustomLoadingButton = dynamic(
  () => import("@/components/common/form-fields/CustomLoadingButton")
);

const BusinessContact = ({ essentialList }: { essentialList: any }) => {
  const daysOfWeek = [
    { id: 1, name: "Monday" },
    { id: 2, name: "Tuesday" },
    { id: 3, name: "Wednesday" },
    { id: 4, name: "Thursday" },
    { id: 5, name: "Friday" },
    { id: 6, name: "Saturday" },
    { id: 7, name: "Sunday" },
  ];

  const [entries, setEntries] = useState([{ day_of_week: daysOfWeek[0].name }]);
  // const [currentIndex, setCurrentIndex] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  const [locationOptions, setLocationOptions] = useState([]);

  const handleChange = (index, field, value) => {
    const newEntries = [...entries];
    newEntries[index][field] = value;
    setEntries(newEntries);
  };

  // const append = () => {
  //   if (currentIndex < daysOfWeek.length) {
  //     const newEntry = { day_of_week: daysOfWeek[currentIndex].name };
  //     setEntries([...entries, newEntry]);
  //     setCurrentIndex(currentIndex + 1);
  //   }
  // };
  const append = () => {
    setEntries([...entries, { day_of_week: daysOfWeek[0].name }]);
  };

  const remove = (index: number) => {
    const newEntries = entries.filter((_, i) => i !== index);
    setEntries(newEntries);
  };

  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useFormContext();

  const handleCustomer = async (values: BusinessTypeForm) => {
    // const open_hours = entries.map((entry, index) => {
    //   const open_time = getValues(`open_hours[${index}][open_time]`);
    //   const close_time = getValues(`open_hours[${index}][close_time]`);
    //   return {
    //     day_of_week: entry.day_of_week,
    //     open_time: open_time || null,
    //     close_time: close_time || null,
    //   };
    // });
    const customer_services = [
      {
        live_online: values.live_online ? 1 : 0,
        live_online_description: values.live_online_description || "",
        home_pickup: values.home_pickup ? 1 : 0,
        home_pickup_description: values.home_pickup_description || "",
        distance_service: values.distance_service ? 1 : 0,
        distance_service_description: values.distance_service_description || "",
      },
    ];
    const contactData = {
      ...values,
      customer_services,
      type: "contact",
      business_id: values.business_id,
      logo: values?.logo || "",
    };

    try {
      await dispatch(businessEditApi(contactData)).unwrap();
    } catch (error) {}
  };

  const handleCityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const cityId = event.target.value as string;
    locationList(Number(cityId));
  };

  const locationList = async (cityId: number) => {
    try {
      const res = await dispatch(essentialLocationApi({ id: cityId })).unwrap();
      setLocationOptions(res);
      setValue("location", res);
    } catch (error) {
      notify(error);
    }
  };

  return (
    <section>
      <Box component={"form"} onSubmit={handleSubmit(handleCustomer)}>
        <div>
          <div className="text-f22 font-semibold text-ik_bluegreydarken3 mb-2">
            <h6>Open Hours</h6>
          </div>
          <div>
            <div className="cart-table-overflow table-scroll">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-f16 text-ik_bluegreybluegrey text-start font-normal w-[140px]">
                      Selected Dates
                    </th>
                    <th className="text-f16 text-ik_bluegreybluegrey text-start font-normal">
                      From
                    </th>
                    <th className="text-f16 text-ik_bluegreybluegrey text-start font-normal">
                      To
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map((entry, index) => (
                    <tr key={index} className="cart-border">
                      <td>
                        <div className="pt-0">
                          <SelectField
                            label={""}
                            name={`open_hours[${index}][day_of_week]`}
                            options={daysOfWeek}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="pt-[6px]">
                          <TimePickerField
                            label={""}
                            name={`open_hours[${index}][open_time]`}
                            onChange={(value) =>
                              handleChange(index, "open_time", value)
                            }
                          />
                        </div>
                      </td>
                      <td>
                        <div className="pt-[6px]">
                          <TimePickerField
                            label={""}
                            name={`open_hours[${index}][close_time]`}
                            onChange={(value) =>
                              handleChange(index, "close_time", value)
                            }
                          />
                        </div>
                      </td>
                      <td>
                        <button type="button" onClick={() => remove(index)}>
                          <ImageComponent
                            src={"/assets/icons/delete-icons.svg"}
                            width={20}
                            height={20}
                            alt={"delete"}
                          />
                        </button>
                        <div className="">
                          <button
                            type="button"
                            className="bg-ik_bluegreylighten3 rounded-md p-2"
                            onClick={append}
                          >
                            <ImageComponent
                              src={"/assets/icons/add-icons.svg"}
                              width={46}
                              height={46}
                              alt={"add-icons"}
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <div className="text-f22 font-semibold text-ik_bluegreydarken3 mb-2">
            <h6>Location</h6>
          </div>
          <div className="mb-2">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <SelectField
                  label={"City"}
                  name={"city_id"}
                  options={essentialList?.city.map(
                    (item: { id: number; name: string }) => ({
                      id: item.id,
                      name: item.name,
                    })
                  )}
                  onChange={handleCityChange}
                />
              </Grid>
              <Grid item xs={6}>
                <SelectField
                  label={"Location"}
                  name={"location_id"}
                  options={locationOptions?.map(
                    (item: { id: number; name: string }) => ({
                      id: item.id,
                      name: item.name,
                      onChange: () => {},
                    })
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <InputField
                  name="address_line_1"
                  label="Address 1"
                  placeholder="Address"
                  type="text"
                />
              </Grid>
              <Grid item xs={6}>
                <InputField
                  name="address_line_2"
                  label="Address 2"
                  placeholder="Address"
                  type="text"
                />
              </Grid>
              <Grid item xs={6}>
                <InputField
                  name="pincode"
                  label="Pincode "
                  placeholder="Enter Pincode"
                  type="text"
                />
              </Grid>
            </Grid>
          </div>
          <div className="mt-2">
            <h6 className="text-f20 font-semibold">
              Narada Gana Sabha in Alwarpet, Chennai
            </h6>
            <div className="text-f18 w-[60%] text-ik_bluegreydarken2 mt-2">
              <p>
                No 314, Ttk Road, Alwarpet, Chennai - 600018 Near Sankara Hall
              </p>
              <div>
                <button type="button" className="mt-3">
                  <div className="flex gap-2">
                    <ImageComponent
                      src={"/assets/icons/icons-delete.svg"}
                      width={20}
                      height={20}
                      alt={"delete"}
                    />
                    <span className="text-ik_pink">Delete</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-f22 font-semibold text-ik_bluegreydarken3 mb-2">
            <h6>Customer Services</h6>
          </div>
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
                  alt={"live"}
                />
                <div className="text-f18 font-semibold text-ik_bluegreydarken3">
                  <span>LIVE Online</span>
                </div>
              </div>
              <div className="mt-2">
                <InputField
                  name="live_online_description"
                  label=""
                  placeholder="Enter Live Online"
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
                  placeholder="Enter Home Pickup"
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
                  placeholder="Enter Distance"
                  type="text"
                />
              </div>
            </div>
          </div>
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

export default BusinessContact;
