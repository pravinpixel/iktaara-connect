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

const FilterEventData = dynamic(() => import("./FilterEventData"));
type Props = {
  categoryData: any;
};

export default function FilterSectionEvents(props: Props) {
  const { categoryData } = props;
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
          <Tab
            icon={<FilterListIcon />}
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
          />
          {/* <Tab
            icon={<StandupIcon />}
            iconPosition="start"
            label="Standup Comedian"
            className="text-f16 font-semibold h-auto min-h-[50px] w-auto max-[145px] rounded-full px-7"
          /> */}
        </Tabs>

        <FilterEventData Categorysection={getCategoryData()} />
      </CustomContainer>
    </section>
  );
}