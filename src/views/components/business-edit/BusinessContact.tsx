import { IconButton, TextField } from "@mui/material";
import React from "react";
import ImageComponent from "../ImageComponent";
import { Checkbox } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../form-fields/InputField";
import { Box } from "@mui/material";
import CustomButton from "../form-fields/CustomButton";
import SelectField from "../form-fields/SelectField";


const label = { inputProps: { "aria-label": "Checkbox demo" } };

const BusinessContact = () => {
  const methods = useForm();

  const { handleSubmit } = methods;

  const handleAbout = async () => { };
  return (
    <section>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleAbout)}>
          <div>
            <div className="text-f22 font-semibold text-ik_bluegreydarken3 mb-2">
              <h6>Open Hours</h6>
            </div>
            <div>
              <div className="cart-table-overflow table-scroll">
                <table className="w-full">
                  <thead className=" ">
                    <tr>
                      <th className="text-f16 text-ik_bluegreybluegrey text-start font-normal">
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
                    <tr className="cart-border">
                      <td>
                        <button className="border border-ik_bluegreylighten1 p-3.5 w-full rounded-md max-[232px] text-start">
                          <span>Monday</span>
                        </button>
                      </td>
                      <td>
                        <div className="mb-2">
                          <SelectField
                            label={""}
                            name={"form"}
                            options={[
                              { id: 10, name: "9.00" },
                              { id: 20, name: "10.00" },
                              { id: 30, name: "11.00" },
                              { id: 40, name: "12.00" },
                            ]}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="mb-2">
                          <SelectField
                            label={""}
                            name={"to"}
                            options={[
                              { id: 10, name: "9.00" },
                              { id: 20, name: "10.00" },
                              { id: 30, name: "11.00" },
                              { id: 40, name: "12.00" },
                            ]}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div className="text-f22 font-semibold text-ik_bluegreydarken3 mb-2">
              <h6>Location</h6>
            </div>
            <div className="w-[80%]">
              <TextField
                size="small"
                placeholder="Find Address"
                variant="outlined"
                className="filter-search-bar"
                autoFocus
                fullWidth
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "var(--ik_white)",
                    borderColor: "var(--ik_bluegreydarken3)",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <IconButton>
                      <ImageComponent
                        src="//assets/icons/search-icon.svg"
                        width={20}
                        height={20}
                        alt="search_icon"
                      />
                    </IconButton>
                  ),
                }}
              />
            </div>
            <div className="mt-2">
              <h6 className="text-f20 font-semibold">
                Narada Gana Sabha in Alwarpet, Chennai
              </h6>
              <div className="text-f18 w-[60%] text-ik_bluegreydarken2 mt-2">
                <p>
                  No 314, Ttk Road,  Alwarpet, Chennai - 600018 Near Sankara
                  Hall
                </p>
                <div>
                  <button type="button" className="mt-3">
                    <div className="flex gap-2">
                      <ImageComponent
                        src={"//assets/icons/icons-delete.svg"}
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
                <Checkbox {...label} className="p-0" />
              </div>
              <div className="w-full">
                <div className="flex items-center gap-3">
                  <ImageComponent
                    src={"//assets/icons/live-icons.svg"}
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
                    src={"//assets/icons/home-icons.svg"}
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
                    src={"//assets/icons/distance-icons.svg"}
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

export default BusinessContact;
