/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
import ImageComponent from "../ImageComponent";
import Link from "next/link";

type Props = {
  Categorysection: any;
};

const CategoryComponent = (props: Props) => {
  const { Categorysection } = props;

  const settings = {
    slidesToShow: 5,
    slidesToScroll: Categorysection?.length > 4 ? true : false,
    swipe: Categorysection?.length > 8 ? true : false,
    dots: Categorysection?.length > 8 ? true : false,
    infinite: Categorysection?.length > 8 ? true : false,
    autoplay: false,
    autoplaySpeed: 3000,
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
          <Link key={item?.id} href={'/artists/' + item?.category_name || ''}>
            <div>
              <div className="relative w-full h-full image-category">
                <ImageComponent
                  src={item?.category_image}
                  alt={item?.category_name}
                  aspectRatio={1.4}
                  objectFit={"content"}
                  type={1}
                  priority={true}
                />
                <div className=" absolute bottom-2.5 left-3.5 ">
                  <span className="text-ik_pink-foreground text-f22 font-semibold">
                    {item?.category_name}
                  </span>
                </div>
              </div>
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <ImageComponent
                    src={"/assets/icons/star.svg"}
                    width={20}
                    height={19}
                    alt={"star"}
                    priority={true}
                  />
                  <span className="text-ik_bluegreydarken3 text-f18 font-normal">
                    {item?.category_reviews}
                  </span>
                </div>
                <span className="text-ik_bluegreydarken1 text-f16 font-normal">
                  {item?.category_text}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryComponent;
