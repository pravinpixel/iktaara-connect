import * as React from "react";

import { FormProvider, useForm } from "react-hook-form";
import { Box, Stack } from "@mui/material";
import { Grid } from "@mui/material";
import dynamic from "next/dynamic";
const CustomCheckbox = dynamic(() => import("../common/form-fields/CheckBox"));

// interface LocationDialogProps {
//   handleClose: () => void;
//   open?: boolean;
// }

export default function ViewAllDialog() {
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
    // <Box sx={{ "& .MuiPaper": { padding: "200px!important" } }}>
    <>
      <Grid container className="mt-[12px]">
        <FormProvider {...methods}>
          {location?.map((row) => (
            <Grid item xs={5} key={row.id}>
              <Stack
                direction="row"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <CustomCheckbox name={`rating_${row.id}`} label="" />
                <Box sx={{ paddingTop: "5px" }}>
                  <p className="font-noraml text-f18 text-ik_bluegreydarken6 leading-9">
                    {row.name}
                  </p>
                </Box>
              </Stack>
            </Grid>
          ))}
        </FormProvider>
      </Grid>
    </>

    // </Box>
  );
}
