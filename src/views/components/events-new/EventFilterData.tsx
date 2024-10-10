/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button } from "@mui/material";
import dynamic from "next/dynamic";
import * as React from "react";
// const CustomCheckbox = dynamic(
//   () => import("@/views/components/form-fields/CheckBox")
// );
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { Grid, Tab, Tabs } from "@mui/material";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FilterLanguage = dynamic(() => import("./FilterLanguage"));
const FilterCategoryData = dynamic(() => import("./FilterCategoryData"));

// interface LocationDialogProps {
//   handleClose: () => void;
//   open?: boolean;
// }

export default function EventFilterData() {
  // const methods = useForm();
  const location = [
    {
      id: 1,
      title: "Workshops",
      image: "/images/static/image_26.png",
    },
    {
      id: 3,
      title: "Workshops",
      image: "/images/static/image_26.png",
    },
    {
      id: 3,
      title: "Workshops",
      image: "/images/static/image_26.png",
    },
    {
      id: 4,
      title: "Workshops",
      image: "/images/static/image_26.png",
    },
    {
      id: 5,
      title: "Workshops",
      image: "/images/static/image_26.png",
    },
    {
      id: 6,
      title: "Workshops",
      image: "/images/static/image_26.png",
    },
  ];

  const language = [
    {
      id: 1,
      title: "Workshops",
    },
    {
      id: 3,
      title: "Workshops",
    },
    {
      id: 3,
      title: "Workshops",
    },
    {
      id: 4,
      title: "Workshops",
    },
  ];
  const [value, setValue] = React.useState("1");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    // <Box sx={{ "& .MuiPaper": { padding: "200px!important" } }}>
    <>
      {/* <Grid container>
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
      </Grid> */}
      <TabContext value={value}>
        <Box sx={{ display: "flex" }}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={(_, value) => handleChange(value)}
            aria-label="Vertical tabs example"
            variant={"primary" as any}
            sx={{
              " & .MuiButtonBase-root": {
                display: "flex",
                alignItems: "flex-start",
              },
              " &.MuiTabs-root": {
                borderRight: "1px solid var(--ik_bordervariant2)",
                width: "200px!important",
              },
            }}
          >
            <Tab label="Category" value="1"  component='div' />
            <Tab label="Language" value="2"  component='div'  />
            <Tab label="Genre" value="3"  component='div' />
            <Tab label="Price" value="4"  component='div' />
          </Tabs>
          <Box className="flex flex-col justify-between flex-grow min-h-[400px] w-[500px]">
            <TabPanel value="1">
              <Box>
                <Grid container spacing={2}>
                  {location?.map((item) => (
                    <Grid item xs={6} key={item.id}>
                      <FilterCategoryData filterCate={item} />
                      {/* <FilterLanguage filterLanguage={item} /> */}
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel value="2">
              {language?.map((item) => (
                <Grid item xs={6} key={item.id}>
                  <FilterLanguage filterLanguage={item} />
                </Grid>
              ))}
            </TabPanel>
            <TabPanel value="3">
              {" "}
              {language?.map((item) => (
                <Grid item xs={6} key={item.id}>
                  <FilterLanguage filterLanguage={item} />
                </Grid>
              ))}
            </TabPanel>
            <TabPanel value="4">
              {" "}
              {language?.map((item) => (
                <Grid item xs={6} key={item.id}>
                  <FilterLanguage filterLanguage={item} />
                </Grid>
              ))}
            </TabPanel>

            <Box className="absolute bottom-4 right-4">
              <Button
                autoFocus
                sx={{
                  textTransform: "capitalize",
                  width: "134px",
                }}
              >
                Done
              </Button>
            </Box>
          </Box>
        </Box>
      </TabContext>
    </>

    // </Box>
  );
}
