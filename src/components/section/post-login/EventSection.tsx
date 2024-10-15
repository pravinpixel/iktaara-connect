/* eslint-disable @typescript-eslint/no-explicit-any */

import { Stack, Tabs } from "@mui/material";

import { Typography } from "@mui/material";

import { Box } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import { Tab } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import dynamic from "next/dynamic";

const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);
const EventContent = dynamic(() => import("./EventContent"));

type TabInfo = {
  label: string;
  icon?: JSX.Element;
  categoryKey: keyof CategoryData;
  onClick?: () => void;
};

const EventSection = () => {
  const methods = useForm();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const categoryData = {
    current_page: 1,
    data: [
      {
        id: 1,
        title: "Madras Crocodile Bank Zoo - FREE Sunday Entry",
        sub_title: "Performance",
        description: "120 Reparist available in Chennai",
        image: "/assets/static/image_70.png",
        logo_image: "/assets/static/image_12.png",
        rating: 4.2,
        reviews: 20,
        total_enquiries: 120,
        total_views: null,
        categories: null,
        location: "Medai - The Stage, Alwarpet, Chennai",
        experience: 10,
        created_at: "2024-09-22T12:34:56.000000Z",
        updated_at: "2024-09-22T12:34:56.000000Z",
      },
      {
        id: 2,
        title: "Madras Crocodile Bank Zoo - FREE Sunday Entry",
        sub_title: "Performance",
        description: "120 Reparist available in Chennai",
        image: "/assets/static/image_70.png",
        logo_image: "/assets/static/image_12.png",
        rating: 4.2,
        reviews: 20,
        total_enquiries: 120,
        total_views: null,
        categories: null,
        location: "Medai - The Stage, Alwarpet, Chennai",
        experience: 10,
        created_at: "2024-09-22T12:34:56.000000Z",
        updated_at: "2024-09-22T12:34:56.000000Z",
      },
      {
        id: 3,
        title: "Madras Crocodile Bank Zoo - FREE Sunday Entry",
        sub_title: "Performance",
        description: "120 Reparist available in Chennai",
        image: "/assets/static/image_70.png",
        logo_image: "/assets/static/image_12.png",
        rating: 4.2,
        reviews: 20,
        total_enquiries: 120,
        total_views: null,
        categories: null,
        location: "Medai - The Stage, Alwarpet, Chennai",
        experience: 10,
        created_at: "2024-09-22T12:34:56.000000Z",
        updated_at: "2024-09-22T12:34:56.000000Z",
      },
    ],
    first_page_url: "http://example.com/api/items?page=1",
    from: 1,
    last_page: 10,
    last_page_url: "http://example.com/api/items?page=10",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://example.com/api/items?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://example.com/api/items?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://example.com/api/items?page=3",
        label: "3",
        active: false,
      },
      {
        url: null,
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://example.com/api/items?page=2",
    path: "http://example.com/api/items",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 100,
  };

  const getCategoryData = () => {
    switch (selectedTab) {
      case 0:
        return categoryData;
      case 1:
        return categoryData;
      case 2:
        return categoryData;

      default:
        return [];
    }
  };

  const tabs: TabInfo[] = [
    {
      label: "Active",

      categoryKey: "active",
      //   onClick: handleClickOpen,
    },
    { label: "Completed", categoryKey: "completed" },
    { label: "Rejected", categoryKey: "rejected" },
  ];
  return (
    <>
      <FormProvider {...methods}>
        {" "}
        <Box className="bg-ik_white my-5 mx-2 rounded-[8px] p-3">
          <Grid container>
            <Grid item xs={8}>
              {" "}
              <Stack direction="row" alignItems={"center"} spacing={2}>
                <Box>
                  <ImageComponent
                    src="/assets/static/image_69.png"
                    alt="Ramakrishna Paramahamsa"
                    width={67}
                    height={67}
                  />
                </Box>
                <Box>
                  <Typography className="text-f24 font-bold leading-[30px] text-ik_bluegreydarken3">
                    Events
                  </Typography>
                  <Typography className="text-f18 font-normal leading-[26px] text-ik_bluegreydarken1">
                    Showcase the world the skills you have...
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={4} className="flex justify-end items-center">
              {" "}
              <Box>
                <CustomButton label="Create Event" />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className="bg-ik_white my-5 mx-2 rounded-[8px] p-3">
          {" "}
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons={false}
            allowScrollButtonsMobile
            aria-label="category tabs"
            className="w-full category-table1 gap-4 "
          >
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                icon={tab.icon || undefined}
                iconPosition="start"
                label={tab.label}
                onClick={tab.onClick ? tab.onClick : undefined}
                className="text-f16 font-semibold h-auto min-h-[50px] w-auto max-[145px] rounded-full px-7 "
                sx={{
                  "&:focus": {
                    outline: "none!important",
                  },
                  "&:hover": {
                    backgroundColor: "var(--ik_whitevariant)",
                    color: "var(--ik_pink)",
                    border: "1px solid var(--ik_pink)!important",
                    borderRadius: "34px",
                  },
                }}
              />
            ))}
          </Tabs>
          <EventContent buisnessListData={getCategoryData()} />
        </Box>
      </FormProvider>
    </>
  );
};

export default EventSection;
