/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";

import ThisWeekData from "./ThisWeekData";
import { Box } from "@mui/material";

type Props = {
  Categorysection: any;
};

const FilterEventData = (props: Props) => {
  const { Categorysection } = props;

  const settings = {
    slidesToShow: 5,
    slidesToScroll: Categorysection?.length > 4 ? 1 : Categorysection.length,

    swipe: Categorysection?.length > 8 ? true : false,
    dots: Categorysection?.length > 8 ? true : false,
    infinite: Categorysection?.length > 8 ? true : false,
    autoplay: false,
    autoplaySpeed: 3000,
    lazyLoad: "progressive" as const,
    arrows: Categorysection?.length > 8 ? true : false,
    rows: 2,
    speed: 500,
    customPaging: () => <div className="reactslick-custom-dots" />,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          swipe: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="category-section-sec py-2 pt-[30.37px]">
      {/* <Slider {...settings}> */}
       
      {/* </Slider> */}

         <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={2}  // Adds spacing between items
          className=" cursor-pointer"
        >
          {Categorysection?.map((item: any) => (
           <ThisWeekData cartData={item} key={item?.id} />
        ))}
        </Box>
    </div>
  );
};

export default FilterEventData;
