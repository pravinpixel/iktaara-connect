/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import CustomContainer from "@/views/components/Container";
// import ImageComponent from "@/views/components/imageComponent";
// import { Container } from "@mui/material";
// import React, { Fragment, useState } from "react";
// import Slider from "react-slick";

// type Props = {
//   Categorysection: any;
// };

// const CategorySection = (props: Props) => {
//   const { Categorysection } = props;
//   const [selectedButton, setSelectedButton] = useState("Pianist");
//   const handleButtonClick = (buttonName: string) => {
//     setSelectedButton(buttonName);
//   };
//   const settings = {
//     slidesToShow: 4,
//     slidesToScroll: Categorysection?.length > 4 ? true : false,
//     swipe: Categorysection?.length > 8 ? true : false,
//     dots: Categorysection?.length > 8 ? true : false,
//     infinite: Categorysection?.length > 8 ? true : false,
//     autoplay: false,
//     autoplaySpeed: 3000,
//     arrows: false,
//     rows: 2,
//     speed: 500,
//     customPaging: () => <div className="reactslick-custom-dots" />,
//     responsive: [
//       {
//         breakpoint: 420,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           swipe: true,
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//         },
//       },
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//         },
//       },
//     ],
//   };
//   return (
//     <section className="section-padding pt-5 pb-14">
//       <CustomContainer>
//         <div className="flex items-center gap-3 mb-4">
//           <div className="text-f28 font-semibold text-ik_bluegreydarken4">
//             <span>Find Talent by Category</span>
//           </div>
//           <div>
//             <button>
//               <span className=" text-f18 text-ik_pink font-normal">
//                 View All
//               </span>
//             </button>
//           </div>
//         </div>
//         <div>
//           <div className="flex gap-2 items-center">
//             <button
//               className={`Category-button py-3 px-7 flex gap-2 rounded-full ${
//                 selectedButton === "Pianist" ? "active" : ""
//               }`}
//               onClick={() => handleButtonClick("Pianist")}
//             >
//               <div>
//                 <ImageComponent
//                   src={"assets/icons/pianist.svg"}
//                   width={22}
//                   height={22}
//                   alt={"arrowdown"}
//                   priority={true}
//                 />
//               </div>
//               <span className="text-f16 font-semibold">Pianist</span>
//             </button>
//             <button
//               className={`Category-button py-3 px-7 flex gap-2 rounded-full ${
//                 selectedButton === "Dancer" ? "active" : ""
//               }`}
//               onClick={() => handleButtonClick("Dancer")}
//             >
//               <div>
//                 <ImageComponent
//                   src={"assets/icons/dancer.svg"}
//                   width={22}
//                   height={22}
//                   alt={"arrowdown"}
//                   priority={true}
//                 />
//               </div>
//               <span className="text-f16 font-semibold">Dancer</span>
//             </button>
//             <button
//               className={`Category-button py-3 px-7 flex gap-2 rounded-full ${
//                 selectedButton === "Sound" ? "active" : ""
//               }`}
//               onClick={() => handleButtonClick("Sound")}
//             >
//               <div>
//                 <ImageComponent
//                   src={"assets/icons/sound.svg"}
//                   width={22}
//                   height={22}
//                   alt={"arrowdown"}
//                   priority={true}
//                 />
//               </div>
//               <span className="text-f16 font-semibold">Sound Engineer</span>
//             </button>
//             <button
//               className={`Category-button py-3 px-7 flex gap-2 rounded-full ${
//                 selectedButton === "Artists" ? "active" : ""
//               }`}
//               onClick={() => handleButtonClick("Artists")}
//             >
//               <div>
//                 <ImageComponent
//                   src={"assets/icons/Artists.svg"}
//                   width={22}
//                   height={22}
//                   alt={"arrowdown"}
//                   priority={true}
//                 />
//               </div>
//               <span className="text-f16 font-semibold">Theatre Artists</span>
//             </button>
//             <button
//               className={`Category-button py-3 px-7 flex gap-2 rounded-full ${
//                 selectedButton === "Party" ? "active" : ""
//               }`}
//               onClick={() => handleButtonClick("Party")}
//             >
//               <div>
//                 <ImageComponent
//                   src={"assets/icons/party.svg"}
//                   width={22}
//                   height={22}
//                   alt={"arrowdown"}
//                   priority={true}
//                 />
//               </div>
//               <span className="text-f16 font-semibold"> Party DJ</span>
//             </button>
//             <button
//               className={`Category-button py-3 px-7 flex gap-2 rounded-full ${
//                 selectedButton === "Standup" ? "active" : ""
//               }`}
//               onClick={() => handleButtonClick("Standup")}
//             >
//               <div>
//                 <ImageComponent
//                   src={"assets/icons/standup.svg"}
//                   width={22}
//                   height={22}
//                   alt={"arrowdown"}
//                   priority={true}
//                 />
//               </div>
//               <span className="text-f16 font-semibold"> Standup Comedian</span>
//             </button>
//           </div>
//         </div>
//         {selectedButton === "Pianist" && (
//           <div className="category-section-sec py-4">
//             <Slider {...settings}>
//               {Categorysection?.pianist?.map((item: any) => (
//                 <Fragment key={item?.id}>
//                   <div>
//                     <div className="relative w-full h-full image-category">
//                       <ImageComponent
//                         src={item?.category_image}
//                         alt={item?.category_name}
//                         aspectRatio={1.4}
//                         objectFit={"content"}
//                         type={1}
//                         priority={true}
//                       />
//                       <div className=" absolute bottom-2.5 left-3.5 ">
//                         <span className="text-ik_pink-foreground text-f22 font-semibold">
//                           {item?.category_name}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="py-2">
//                       <div className="flex items-center gap-2">
//                         <ImageComponent
//                           src={"assets/icons/star.svg"}
//                           width={20}
//                           height={19}
//                           alt={"star"}
//                           priority={true}
//                         />
//                         <span className="text-ik_bluegreydarken3 text-f18 font-normal">
//                           {item?.category_reviews}
//                         </span>
//                       </div>
//                       <span className="text-ik_bluegreydarken1 text-f16 font-normal">
//                         {item?.category_text}
//                       </span>
//                     </div>
//                   </div>
//                 </Fragment>
//               ))}
//             </Slider>
//           </div>
//         )}
//         {selectedButton === "Dancer" && (
//           <div className="category-section-sec py-4">
//             <Slider {...settings}>
//               {Categorysection?.dancer?.map((item: any) => (
//                 <Fragment key={item?.id}>
//                   <div>
//                     <div className="relative w-full h-full image-category">
//                       <ImageComponent
//                         src={item?.category_image}
//                         alt={item?.category_name}
//                         aspectRatio={1.4}
//                         objectFit={"content"}
//                         type={1}
//                         priority={true}
//                       />
//                       <div className=" absolute bottom-2.5 left-3.5 ">
//                         <span className="text-ik_pink-foreground text-f22 font-semibold">
//                           {item?.category_name}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="py-2">
//                       <div className="flex items-center gap-2">
//                         <ImageComponent
//                           src={"assets/icons/star.svg"}
//                           width={20}
//                           height={19}
//                           alt={"star"}
//                           priority={true}
//                         />
//                         <span className="text-ik_bluegreydarken3 text-f18 font-normal">
//                           {item?.category_reviews}
//                         </span>
//                       </div>
//                       <span className="text-ik_bluegreydarken1 text-f16 font-normal">
//                         {item?.category_text}
//                       </span>
//                     </div>
//                   </div>
//                 </Fragment>
//               ))}
//             </Slider>
//           </div>
//         )}
//         {selectedButton === "Sound" && (
//           <div className="category-section-sec py-4">
//             <Slider {...settings}>
//               {Categorysection?.sound_engineer?.map((item: any) => (
//                 <Fragment key={item?.id}>
//                   <div>
//                     <div className="relative w-full h-full image-category">
//                       <ImageComponent
//                         src={item?.category_image}
//                         alt={item?.category_name}
//                         aspectRatio={1.4}
//                         objectFit={"content"}
//                         type={1}
//                         priority={true}
//                       />
//                       <div className=" absolute bottom-2.5 left-3.5 ">
//                         <span className="text-ik_pink-foreground text-f22 font-semibold">
//                           {item?.category_name}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="py-2">
//                       <div className="flex items-center gap-2">
//                         <ImageComponent
//                           src={"assets/icons/star.svg"}
//                           width={20}
//                           height={19}
//                           alt={"star"}
//                           priority={true}
//                         />
//                         <span className="text-ik_bluegreydarken3 text-f18 font-normal">
//                           {item?.category_reviews}
//                         </span>
//                       </div>
//                       <span className="text-ik_bluegreydarken1 text-f16 font-normal">
//                         {item?.category_text}
//                       </span>
//                     </div>
//                   </div>
//                 </Fragment>
//               ))}
//             </Slider>
//           </div>
//         )}
//         {selectedButton === "Artists" && (
//           <div className="category-section-sec py-4">
//             <Slider {...settings}>
//               {Categorysection?.theatre_artists?.map((item: any) => (
//                 <Fragment key={item?.id}>
//                   <div>
//                     <div className="relative w-full h-full image-category">
//                       <ImageComponent
//                         src={item?.category_image}
//                         alt={item?.category_name}
//                         aspectRatio={1.4}
//                         objectFit={"content"}
//                         type={1}
//                         priority={true}
//                       />
//                       <div className=" absolute bottom-2.5 left-3.5 ">
//                         <span className="text-ik_pink-foreground text-f22 font-semibold">
//                           {item?.category_name}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="py-2">
//                       <div className="flex items-center gap-2">
//                         <ImageComponent
//                           src={"assets/icons/star.svg"}
//                           width={20}
//                           height={19}
//                           alt={"star"}
//                           priority={true}
//                         />
//                         <span className="text-ik_bluegreydarken3 text-f18 font-normal">
//                           {item?.category_reviews}
//                         </span>
//                       </div>
//                       <span className="text-ik_bluegreydarken1 text-f16 font-normal">
//                         {item?.category_text}
//                       </span>
//                     </div>
//                   </div>
//                 </Fragment>
//               ))}
//             </Slider>
//           </div>
//         )}
//         {selectedButton === "Party" && (
//           <div className="category-section-sec py-4">
//             <Slider {...settings}>
//               {Categorysection?.party_dJ?.map((item: any) => (
//                 <Fragment key={item?.id}>
//                   <div>
//                     <div className="relative w-full h-full image-category">
//                       <ImageComponent
//                         src={item?.category_image}
//                         alt={item?.category_name}
//                         aspectRatio={1.4}
//                         objectFit={"content"}
//                         type={1}
//                         priority={true}
//                       />
//                       <div className=" absolute bottom-2.5 left-3.5 ">
//                         <span className="text-ik_pink-foreground text-f22 font-semibold">
//                           {item?.category_name}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="py-2">
//                       <div className="flex items-center gap-2">
//                         <ImageComponent
//                           src={"assets/icons/star.svg"}
//                           width={20}
//                           height={19}
//                           alt={"star"}
//                           priority={true}
//                         />
//                         <span className="text-ik_bluegreydarken3 text-f18 font-normal">
//                           {item?.category_reviews}
//                         </span>
//                       </div>
//                       <span className="text-ik_bluegreydarken1 text-f16 font-normal">
//                         {item?.category_text}
//                       </span>
//                     </div>
//                   </div>
//                 </Fragment>
//               ))}
//             </Slider>
//           </div>
//         )}
//         {selectedButton === "Standup" && (
//           <div className="category-section-sec py-4">
//             <Slider {...settings}>
//               {Categorysection?.standup_comedian?.map((item: any) => (
//                 <Fragment key={item?.id}>
//                   <div>
//                     <div className="relative w-full h-full image-category">
//                       <ImageComponent
//                         src={item?.category_image}
//                         alt={item?.category_name}
//                         aspectRatio={1.4}
//                         objectFit={"content"}
//                         type={1}
//                         priority={true}
//                       />
//                       <div className=" absolute bottom-2.5 left-3.5 ">
//                         <span className="text-ik_pink-foreground text-f22 font-semibold">
//                           {item?.category_name}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="py-2">
//                       <div className="flex items-center gap-2">
//                         <ImageComponent
//                           src={"assets/icons/star.svg"}
//                           width={20}
//                           height={19}
//                           alt={"star"}
//                           priority={true}
//                         />
//                         <span className="text-ik_bluegreydarken3 text-f18 font-normal">
//                           {item?.category_reviews}
//                         </span>
//                       </div>
//                       <span className="text-ik_bluegreydarken1 text-f16 font-normal">
//                         {item?.category_text}
//                       </span>
//                     </div>
//                   </div>
//                 </Fragment>
//               ))}
//             </Slider>
//           </div>
//         )}
//       </CustomContainer>
//     </section>
//   );
// };

// export default CategorySection;


import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomContainer from "@/views/components/Container";
import CategoryComponent from "@/views/components/cartComponent/categorycomponent";
import { ArtistsIcon, DancerIcon, PartyIcon, PianistIcon, SoundIcon, StandupIcon } from "@/utils/theme/svg";


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
            <button>
              <span className="text-f18 text-ik_pink font-normal">
                View All
              </span>
            </button>
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
