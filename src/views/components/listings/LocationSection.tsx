/* eslint-disable react/jsx-key */
import React from "react";

import { Box, Stack } from "@mui/material";

import CustomCheckbox from "../form-fields/CheckBox";
import { FormProvider, useForm } from "react-hook-form";

import ViewAllPopup from "../popup/ViewAllPopup";

const LocationSection = () => {
  const methods = useForm();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
    <>
      {" "}
      <FormProvider {...methods}>
        <Box mt={1}>
          <>
            {" "}
            <p className="font-semibold text-f18 leading-6 text-ik_bluegreydarken3">
              Location
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
              <p
                className="font-normal text-f18 leading-9 text-ik_pink "
                onClick={handleClickOpen}
                style={{ cursor: "pointer" }}
              >
                View All
              </p>
            </Box>
          </>
        </Box>
      </FormProvider>
      {open && (
        <ViewAllPopup handleClose={handleClose} open={open}></ViewAllPopup>
      )}
    </>
  );
};

export default LocationSection;
