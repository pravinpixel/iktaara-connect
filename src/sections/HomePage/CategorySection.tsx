/* eslint-disable @typescript-eslint/no-explicit-any */
import ImageComponent from "@/views/components/imageComponent";
import { Container } from "@mui/material";
import React, { Fragment, useState } from "react";
import Slider from "react-slick";

type Props = {
  Categorysection: any;
};

const CategorySection = (props: Props) => {
  const { Categorysection } = props;
  console.log(Categorysection, "Categorysection");
  const [selectedButton, setSelectedButton] = useState("Pianist");
  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };
  const settings = {
    slidesToShow: 4,
    slidesToScroll: Categorysection?.length > 4 ? true : false,
    swipe: Categorysection?.length > 8 ? true : false,
    dots: Categorysection?.length > 8 ? true : false,
    infinite: Categorysection?.length > 8 ? true : false,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
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
    <section className="section-padding">
      <Container
        maxWidth={"lg"}
        sx={{ maxWidth: { xl: "81% !important", lg: "81%" } }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="Events-title">
            <span>Find Talent by Category</span>
          </div>
          <div>
            <button>
              <span className="view-text">View All</span>
            </button>
          </div>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <button
              className={`Category-button ${
                selectedButton === "Pianist" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Pianist")}
            >
              <div>
                <ImageComponent
                  src={"assets/icons/pianist.svg"}
                  width={18}
                  height={18}
                  alt={"arrowdown"}
                  priority={true}
                />
              </div>
              <span>Pianist</span>
            </button>
            <button
              className={`Category-button ${
                selectedButton === "Dancer" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Dancer")}
            >
              <div>
                <ImageComponent
                  src={"assets/icons/dancer.svg"}
                  width={18}
                  height={18}
                  alt={"arrowdown"}
                  priority={true}
                />
              </div>
              <span>Dancer</span>
            </button>
            <button
              className={`Category-button ${
                selectedButton === "Sound" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Sound")}
            >
              <div>
                <ImageComponent
                  src={"assets/icons/sound.svg"}
                  width={18}
                  height={18}
                  alt={"arrowdown"}
                  priority={true}
                />
              </div>
              <span>Sound Engineer</span>
            </button>
            <button
              className={`Category-button ${
                selectedButton === "Artists" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Artists")}
            >
              <div>
                <ImageComponent
                  src={"assets/icons/Artists.svg"}
                  width={18}
                  height={18}
                  alt={"arrowdown"}
                  priority={true}
                />
              </div>
              <span> Theatre Artists</span>
            </button>
            <button
              className={`Category-button ${
                selectedButton === "Party" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Party")}
            >
              <div>
                <ImageComponent
                  src={"assets/icons/party.svg"}
                  width={18}
                  height={18}
                  alt={"arrowdown"}
                  priority={true}
                />
              </div>
              <span> Party DJ</span>
            </button>
            <button
              className={`Category-button ${
                selectedButton === "Standup" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Standup")}
            >
              <div>
                <ImageComponent
                  src={"assets/icons/standup.svg"}
                  width={18}
                  height={18}
                  alt={"arrowdown"}
                  priority={true}
                />
              </div>
              <span> Standup Comedian</span>
            </button>
          </div>
        </div>
        {selectedButton === "Pianist" && (
          <div className="category-section-sec">
            <Slider {...settings}>
              {Categorysection?.pianist?.map((item: any) => (
                <Fragment key={item?.id}>
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
                      <div className=" absolute category-name">
                        <span>{item?.category_name}</span>
                      </div>
                    </div>
                    <div className="py-2">
                      <div className="flex items-center gap-2">
                        <ImageComponent
                          src={"assets/icons/star.svg"}
                          width={15}
                          height={15}
                          alt={"star"}
                          priority={true}
                        />
                        <span className="category-reviews">
                          {item?.category_reviews}
                        </span>
                      </div>
                      <span className="category-text">
                        {item?.category_text}
                      </span>
                    </div>
                  </div>
                </Fragment>
              ))}
            </Slider>
          </div>
        )}
        {selectedButton === "Dancer" && (
          <div className="category-section-sec">
            <Slider {...settings}>
              {Categorysection?.dancer?.map((item: any) => (
                <Fragment key={item?.id}>
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
                      <div className=" absolute category-name">
                        <span>{item?.category_name}</span>
                      </div>
                    </div>
                    <div className="py-2">
                      <div className="flex items-center gap-2">
                        <ImageComponent
                          src={"assets/icons/star.svg"}
                          width={15}
                          height={15}
                          alt={"star"}
                          priority={true}
                        />
                        <span className="category-reviews">
                          {item?.category_reviews}
                        </span>
                      </div>
                      <span className="category-text">
                        {item?.category_text}
                      </span>
                    </div>
                  </div>
                </Fragment>
              ))}
            </Slider>
          </div>
        )}
        {selectedButton === "Sound" && (
          <div className="category-section-sec">
            <Slider {...settings}>
              {Categorysection?.sound_engineer?.map((item: any) => (
                <Fragment key={item?.id}>
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
                      <div className=" absolute category-name">
                        <span>{item?.category_name}</span>
                      </div>
                    </div>
                    <div className="py-2">
                      <div className="flex items-center gap-2">
                        <ImageComponent
                          src={"assets/icons/star.svg"}
                          width={15}
                          height={15}
                          alt={"star"}
                          priority={true}
                        />
                        <span className="category-reviews">
                          {item?.category_reviews}
                        </span>
                      </div>
                      <span className="category-text">
                        {item?.category_text}
                      </span>
                    </div>
                  </div>
                </Fragment>
              ))}
            </Slider>
          </div>
        )}
        {selectedButton === "Artists" && (
          <div className="category-section-sec">
            <Slider {...settings}>
              {Categorysection?.theatre_artists?.map((item: any) => (
                <Fragment key={item?.id}>
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
                      <div className=" absolute category-name">
                        <span>{item?.category_name}</span>
                      </div>
                    </div>
                    <div className="py-2">
                      <div className="flex items-center gap-2">
                        <ImageComponent
                          src={"assets/icons/star.svg"}
                          width={15}
                          height={15}
                          alt={"star"}
                          priority={true}
                        />
                        <span className="category-reviews">
                          {item?.category_reviews}
                        </span>
                      </div>
                      <span className="category-text">
                        {item?.category_text}
                      </span>
                    </div>
                  </div>
                </Fragment>
              ))}
            </Slider>
          </div>
        )}
        {selectedButton === "Party" && (
          <div className="category-section-sec">
            <Slider {...settings}>
              {Categorysection?.party_dJ?.map((item: any) => (
                <Fragment key={item?.id}>
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
                      <div className=" absolute category-name">
                        <span>{item?.category_name}</span>
                      </div>
                    </div>
                    <div className="py-2">
                      <div className="flex items-center gap-2">
                        <ImageComponent
                          src={"assets/icons/star.svg"}
                          width={15}
                          height={15}
                          alt={"star"}
                          priority={true}
                        />
                        <span className="category-reviews">
                          {item?.category_reviews}
                        </span>
                      </div>
                      <span className="category-text">
                        {item?.category_text}
                      </span>
                    </div>
                  </div>
                </Fragment>
              ))}
            </Slider>
          </div>
        )}
        {selectedButton === "Standup" && (
          <div className="category-section-sec">
            <Slider {...settings}>
              {Categorysection?.standup_comedian?.map((item: any) => (
                <Fragment key={item?.id}>
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
                      <div className=" absolute category-name">
                        <span>{item?.category_name}</span>
                      </div>
                    </div>
                    <div className="py-2">
                      <div className="flex items-center gap-2">
                        <ImageComponent
                          src={"assets/icons/star.svg"}
                          width={15}
                          height={15}
                          alt={"star"}
                          priority={true}
                        />
                        <span className="category-reviews">
                          {item?.category_reviews}
                        </span>
                      </div>
                      <span className="category-text">
                        {item?.category_text}
                      </span>
                    </div>
                  </div>
                </Fragment>
              ))}
            </Slider>
          </div>
        )}
      </Container>
    </section>
  );
};

export default CategorySection;
