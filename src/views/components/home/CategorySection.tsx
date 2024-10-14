/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomContainer from "@/views/components/Container";
import CategoryComponent from "@/views/components/cart-component/CategoryComponent";
import {
  ArtistsIcon,
  DancerIcon,
  PartyIcon,
  PianistIcon,
  SoundIcon,
  StandupIcon,
} from "@/utils/theme/svg";
import Link from "next/link";

type Props = {
  categoryData: any;
};

export default function CategorySection(props: Props) {
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
      case 5:
        return categoryData.standup_comedian;
      default:
        return [];
    }
  };

  return (
    <section className="section-padding pt-5 pb-14">
      <CustomContainer>
        <div className="flex items-center gap-3 mb-4">
          <div className="text-f28 font-semibold text-ik_bluegreydarken4">
            <span>Find Talent by Category</span>
          </div>
          <div>
            <Link href="" className="pt-[10px]">
              <span className="text-f18 text-ik_pink font-normal">
                View All
              </span>
            </Link>
          </div>
        </div>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons={false}
          allowScrollButtonsMobile
          aria-label="category tabs"
          className="w-full category-table gap-4"
        >
          <Tab
            icon={<PianistIcon />}
            iconPosition="start"
            label="Pianist"
            className="text-f16 font-semibold h-auto min-h-[50px] w-auto max-[145px] rounded-full px-7"
          />
          <Tab
            icon={<DancerIcon />}
            iconPosition="start"
            label="Dancer"
            className="text-f16 font-semibold h-auto min-h-[50px] w-auto max-[145px] rounded-full px-7"
          />
          <Tab
            icon={<SoundIcon />}
            iconPosition="start"
            label="Sound Engineer"
            className="text-f16 font-semibold h-auto min-h-[50px] w-auto max-[145px] rounded-full px-7"
          />
          <Tab
            icon={<ArtistsIcon />}
            iconPosition="start"
            label="Theatre Artists"
            className="text-f16 font-semibold h-auto min-h-[50px] w-auto max-[145px] rounded-full px-7"
          />
          <Tab
            icon={<PartyIcon />}
            iconPosition="start"
            label="Party DJ"
            className="text-f16 font-semibold h-auto min-h-[50px] w-auto max-[145px] rounded-full px-7"
          />
          <Tab
            icon={<StandupIcon />}
            iconPosition="start"
            label="Standup Comedian"
            className="text-f16 font-semibold h-auto min-h-[50px] w-auto max-[145px] rounded-full px-7"
          />
        </Tabs>

        <CategoryComponent Categorysection={getCategoryData()} />
      </CustomContainer>
    </section>
  );
}
