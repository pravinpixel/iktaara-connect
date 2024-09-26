/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";
import Slider from "react-slick";

import CustomCardEvents from "../CustomCardsEvents";

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
    <div className="category-section-sec py-4">
      <Slider {...settings}>
        {Categorysection?.map((item: any) => (
          <Fragment key={item?.id}>
            <div>
              <CustomCardEvents
                variant="bottom-left"
                img={item.category_image}
                text={"Art"}
                reviews={""}
                typebottom={false}
              />
            </div>
            <div className="py-2">
              <div>
                <h6 className="text-ik_bluegreydarken6 text-f20 font-semibold leading-6">
                  {item?.category_name}
                </h6>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-ik_bluegreydarken6 text-f16 font-normal leading-6">
                  {item?.category_name}
                </span>
              </div>
              <span className="text-ik_bluegreydarken6 text-f16 font-semibold leading-6">
                {item?.category_reviews}
              </span>
            </div>
          </Fragment>
        ))}
      </Slider>
    </div>
  );
};

export default FilterEventData;
