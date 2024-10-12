import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomContainer from "@/views/components/Container";

import //   ArtistsIcon,
//   DancerIcon,
//   PartyIcon,
//   PianistIcon,
//   SoundIcon,
"@/utils/theme/svg";
import FilterListIcon from "@mui/icons-material/FilterList";
import dynamic from "next/dynamic";
import EventFilterPopup from "../popup/EventFilterPopup";

const FilterEventData = dynamic(() => import("./FilterEventData"));
type CategoryItem = {
  id: number;
  category_image: string;
  category_name: string;
  category_reviews: string;
  category_text: string;
};

type CategoryData = {
  pianist: CategoryItem[];
  dancer: CategoryItem[];
  sound_engineer: CategoryItem[];
  theatre_artists: CategoryItem[];
  party_dJ: CategoryItem[];
};

type Props = {
  categoryData: CategoryData;
};

type TabInfo = {
  label: string;
  icon?: JSX.Element;
  categoryKey: keyof CategoryData; // categoryData keys like 'pianist', 'dancer', etc.
  onClick?: () => void;
};

export default function FilterSectionEvents(props: Props) {
  const { categoryData } = props;
  console.log(categoryData, "categoryData");

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const getCategoryData = () => {
    switch (selectedTab) {
      case 0:
        return categoryData.pianist;
      case 1:
        return categoryData.dancer;
      case 2:
        return categoryData.sound_engineer;
      case 3:
        return categoryData.theatre_artists;
      case 4:
        return categoryData.party_dJ;

      default:
        return [];
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const tabs: TabInfo[] = [
    {
      label: "Filter by",
      icon: <FilterListIcon />,
      categoryKey: "pianist",
      onClick: handleClickOpen,
    },
    { label: "Performances", categoryKey: "dancer" },
    { label: "FREE ENTRY", categoryKey: "sound_engineer" },
    { label: "English", categoryKey: "theatre_artists" },
    { label: "Theatre Artists", categoryKey: "party_dJ" },
  ];
  return (
    <section className="section-padding pt-5 pb-14 bg-ik_lightbluevariant">
      <CustomContainer>
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
          {/* <Tab
            icon={<FilterListIcon onClick={handleClickOpen} />}
            iconPosition="start"
            label="Filter by"
            className="text-f16 font-semibold h-auto min-h-[50px] w-auto max-[145px] rounded-full px-7"
          />
          <Tab
            // icon={<DancerIcon />}
            iconPosition="start"
            label="Performances"
            className="text-f16 font-semibold h-auto min-h-[50px] w-auto max-[145px] rounded-full px-7"
          />
          <Tab
            // icon={<SoundIcon />}
            iconPosition="start"
            label="FREE ENTRY"
            className="text-f16 font-semibold h-auto min-h-[50px] w-auto max-[145px] rounded-full px-7"
          />
          <Tab
            // icon={<ArtistsIcon />}
            iconPosition="start"
            label="English"
            className="text-f16 font-semibold h-auto min-h-[50px] w-auto max-[145px] rounded-full px-7"
          />
          <Tab
            // icon={<PartyIcon />}
            iconPosition="start"
            label="Theatre Artists"
            className="text-f16 font-semibold h-auto min-h-[50px] w-auto max-[145px] rounded-full px-7"
          /> */}
          {/* <Tab
            icon={<StandupIcon />}
            iconPosition="start"
            label="Standup Comedian"
            className="text-f16 font-semibold h-auto min-h-[50px] w-auto max-[145px] rounded-full px-7"
          /> */}
        </Tabs>

        <FilterEventData Categorysection={getCategoryData()} />
        {open && <EventFilterPopup handleClose={handleClose} open={open} />}
      </CustomContainer>
    </section>
  );
}
