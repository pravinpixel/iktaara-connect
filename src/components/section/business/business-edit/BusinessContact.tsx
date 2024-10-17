import React, { useState } from "react";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { useFormContext } from "react-hook-form";

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
const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);

const BusinessContact = () => {
  const daysOfWeek = [
    { id: 1, name: "Monday" },
    { id: 2, name: "Tuesday" },
    { id: 3, name: "Wednesday" },
    { id: 4, name: "Thursday" },
    { id: 5, name: "Friday" },
    { id: 6, name: "Saturday" },
    { id: 7, name: "Sunday" },
  ];

  const [entries, setEntries] = useState([daysOfWeek[0]]);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleChange = (index, field, value) => {
    const newEntries = [...entries];
    newEntries[index][field] = value;
    setEntries(newEntries);
  };

  const append = () => {
    if (currentIndex < daysOfWeek.length) {
      const newEntry = daysOfWeek[currentIndex];
      setEntries([...entries, newEntry]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const {
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = useFormContext();

  const handleCustomer = async (values) => {
    const open_hours = entries.map((entry, index) => {
      const open_time = getValues(`open_hours[${index}][open_time]`);
      const close_time = getValues(`open_hours[${index}][close_time]`);
      
      return {
        day_of_week: entry.name,
        open_time: open_time || null,
        close_time: close_time || null,
        is_closed: !open_time && !close_time ? 1 : 0, // 1 if closed, 0 if open
      };
    });

    const temp = {
      ...values,
      open_hours,
    };

    console.log(temp, "open_hours");
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
                    <th className="text-f16 text-ik_bluegreybluegrey text-start font-normal w-[200px]">
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
                    <tr key={entry.id} className="cart-border">
                      <td>
                        <div>
                          <button
                            type="button"
                            className="border border-ik_bluegreylighten1 p-3.5 w-full rounded-md max-[232px] text-start"
                          >
                            <span>{entry.name}</span>
                          </button>
                          <input
                            type="hidden"
                            name={`open_hours[${index}][day_of_week]`}
                            value={entry.name}
                          />
                        </div>
                      </td>
                      <td>
                        <div>
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
                        <div>
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
                        <div>
                          <button
                            type="button"
                            className="bg-ik_bluegreylighten3 rounded-md p-3"
                            onClick={append}
                          >
                            <div className="flex gap-1">
                              <ImageComponent
                                src={"/assets/icons/add-icons.svg"}
                                width={86}
                                height={86}
                                alt={"add-icons"}
                              />
                            </div>
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
                  alt={"home"}
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
                  alt={"distance"}
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
          <CustomButton type="submit" className="px-16 py-3.5" label="Save">
            Save
          </CustomButton>
        </Box>
      </Box>
    </section>
  );
};

export default BusinessContact;
