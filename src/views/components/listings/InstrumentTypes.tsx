/* eslint-disable react/jsx-key */
import React from "react";

import { Box, Stack } from "@mui/material";
const CustomCheckbox = dynamic(() => import("../form-fields/CheckBox"));

import { FormProvider, useForm } from "react-hook-form";
import dynamic from "next/dynamic";

const InstrumentType = () => {
  const methods = useForm();

  const location = [
    {
      id: 1,

      name: "Adayar",
    },
    {
      id: 2,

      name: "Nungampakkam",
    },
    {
      id: 3,

      name: "Velachery",
    },
  ];
  return (
    <FormProvider {...methods}>
      <Box mt={1}>
        <>
          {" "}
          <p className="font-semibold text-f18 leading-6 text-ik_bluegreydarken3">
            Instrument Types
          </p>
          <Box mt={1}>
            {" "}
            {location?.map((row) => (
              <Stack key={row.id} direction="row" alignItems={"center"}>
                <CustomCheckbox name={`rating_${row.id}`} label="" />
                <Box sx={{ paddingTop: "5px" }}>
                  <p className="font-normal text-f18 leading-9 text-ik_bluegreydarken1">
                    {row.name}
                  </p>
                </Box>
              </Stack>
            ))}
            <p className="font-normal text-f18 leading-9 text-ik_pink ">
              View All
            </p>
          </Box>
        </>
      </Box>
    </FormProvider>
  );
};

export default InstrumentType;
