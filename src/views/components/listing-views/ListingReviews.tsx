import React from 'react'
import ImageComponent from '../ImageComponent';
import { Rating, styled } from '@mui/material';
import { Avatar } from '@mui/material';
import Slider from 'react-slick';

const ListingReviewsComponents = () => {
    const [value, setValue] = React.useState<number | null>(2);

    const StyledRating = styled(Rating)({
      "& .MuiRating-iconFilled": {
        color: "#FFE4EA",
        border: "1px sold #ff3d47",
      },
      "& .MuiRating-iconHover": {
        color: "#FFE4EA",
        border: "1px sold #ff3d47",
      },
    });
    const reviews = [
      {
        id: 1,
        reviews_text:
          "Learning guitar from Ramakrishna Paramahamsa has been a transformative experience. With his 8 years of online teaching expertise, Ramakrishna combines technical proficiency with a deep passion for music, creating a supportive and engaging learning environment. His patience, clear instructions,...",
        reviews_name: "Ramakrishnan",
        reviews_location: "Chennai",
      },
      {
        id: 2,
        reviews_text:
          "Learning guitar from Ramakrishna Paramahamsa has been a transformative experience. With his 8 years of online teaching expertise, Ramakrishna combines technical proficiency with a deep passion for music, creating a supportive and engaging learning environment. His patience, clear instructions,...",
        reviews_name: "Ramakrishnan",
        reviews_location: "Chennai",
      },
      {
        id: 3,
        reviews_text:
          "Learning guitar from Ramakrishna Paramahamsa has been a transformative experience. With his 8 years of online teaching expertise, Ramakrishna combines technical proficiency with a deep passion for music, creating a supportive and engaging learning environment. His patience, clear instructions,...",
        reviews_name: "Ramakrishnan",
        reviews_location: "Chennai",
      },
  
    ];

     const settings = {
       autoplay: true,
       autoplaySpeed: 3000,
       arrows: true,
       swipe: reviews?.length > 3 ? true : false,
       dots: reviews?.length > 3 ? true : false,
       infinite: reviews?.length > 3 ? true : false,
       speed: 500,
       slidesToShow: 3,
       slidesToScroll: reviews?.length >= 3 ? 3 : 1,
       lazyLoad: "ondemand" as "ondemand" | "progressive" | undefined,
       customPaging: () => <div className="reactslick-custom-dots" />,
       responsive: [
         {
           breakpoint: 420,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             swipe: true,
           },
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             swipe: true,
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
             swipe: true,
           },
         },
         {
           breakpoint: 1200,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             swipe: true,
           },
         },
       ],
     };

  return (
    <section className="reviews-section">
      <Slider {...settings}>
        {reviews?.map((row) => (
          <>
            <div className="shadow-color p-6 rounded-3xl" key={row.id}>
              <div>
                <ImageComponent
                  src={"/assets/icons/arrow-icons.svg"}
                  width={37}
                  height={37}
                  alt={"arrowdown"}
                />
              </div>
              <div className="text-f18 font-normal text-ik_bluegreydarken3 h-[100%] max-h-[250px] py-4">
                <p>{row.reviews_text}</p>
              </div>
              <div className="flex gap-3 items-center">
                <StyledRating
                  name="simple-controlled"
                  value={value}
                  size="large"
                  // onChange={(event, newValue) => {
                  //   setValue(newValue);
                  // }}
                />
                <div className="text-center">
                  <span className="text-ik_bluegreydarken2 text-f16 font-normal">
                    July 1, 2024
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center pt-7">
                <Avatar alt="Remy Sharp" src="" className="w-[70px] h-[70px]" />
                <div>
                  <h6 className="text-ik_bluegreydarken2 text-f16 font-semibold">
                    {row.reviews_name}
                  </h6>
                  <span className="text-ik_bluegreydarken2 text-f16 font-normal">
                    {row.reviews_location}
                  </span>
                </div>
              </div>
            </div>
          </>
        ))}
      </Slider>
    </section>
  );
}

export default ListingReviewsComponents;