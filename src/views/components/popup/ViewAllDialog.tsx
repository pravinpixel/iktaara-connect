import * as React from "react";
import dynamic from "next/dynamic";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Stack } from "@mui/material";
const CustomCheckbox = dynamic(() => import("../form-fields/CheckBox"));
import { Grid } from "@mui/material";

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
      <Grid container>
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
