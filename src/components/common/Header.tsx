// import { NAV } from "@/utils/helpers/constant-helper";
import React, { useState } from "react";
// import { SearchBar } from "./SearchBar";
import Link from "next/link";
import { Box } from "@mui/material";
import { ArrowdownIcon } from "@/utils/theme/svg";
import { AutoCompleteSearch } from "./AutoCompleteSearch";
import Slider from "react-slick";
import zustandStore from "@/utils/helpers/zustand";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";

const CustomButton = dynamic(
  () => import("@/views/components/form-fields/CustomButton")
);
const ImageComponent = dynamic(
  () => import("@/views/components/ImageComponent")
);
const CustomContainer = dynamic(() => import("@/views/components/Container"));
const CityLocation = dynamic(() => import("@/views/components/popup/CityLocation"));
const Musicscomponent = dynamic(
  () => import("@/views/components/cart-component/MusicsComponent")
);
const Startedpopup = dynamic(
  () => import("@/views/components/popup/Startedpopup")
);
const CustomImageButton = dynamic(
  () => import("@/views/components/CustomImageButton")
);

const Header = () => {
  const [opencity, setOpencity] = React.useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [openStarted, setOpenStarted] = React.useState(false);

  const { status } = useSession()

  const { setPopup } = zustandStore();

  const music = [
    {
      id: 1,
      image: "/assets/image/music1.webp",
      music_title: "Artists",
    },
    {
      id: 2,
      image: "/assets/image/music2.webp",
      music_title: "Recording /JAM Studios",
      music_text: "Find venues for every musical occasions",
    },
    {
      id: 3,
      image: "/assets/image/music3.webp",
      music_title: "Music Instrument Sales & Service",
    },
    {
      id: 4,
      image: "/assets/image/music4.webp",
      music_title: "Events",
    },
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: music?.length > 4 ? true : false,
    dots: music?.length > 4 ? true : false,
    infinite: music?.length > 4 ? true : false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: music?.length >= 4 ? 4 : 1,
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

  const handleClickOpenStarted = () => {
    setOpenStarted(true);
  };

  const handleCloseStarted = () => {
    setOpenStarted(false);
  };

  const handleClickOpencity = () => {
    setOpencity(true);
  };

  const handleClosecity = () => {
    setOpencity(false);
  };

  const handleLoginPopup = () => {
    setPopup("login");
  };

  const handleMouseEnter = (value: string) => {
    setSelected(value);
  };

  const handleMouseLeave = () => {
    setSelected(null);
  };

  return (
    <div className="shadow-md">
      <CustomContainer>
        <div className={`w-ful h-[110px]  flex items-center w-full `}>
          <div className="flex items-center gap-5 w-full">
            <div className="h-[71px] w-[110px] flex items-center">
              <Link href="/">
                <ImageComponent
                  src={"/assets/logo/logo.svg"}
                  width={158}
                  height={81}
                  alt={"iktaraa"}
                />
              </Link>
            </div>
            <div>
              <button
                className="flex items-center gap-2"
                onClick={handleClickOpencity}
              >
                <ImageComponent
                  src={"/assets/icons/location.svg"}
                  width={17}
                  height={21}
                  alt={"location"}
                />
                <span className="text-f16 text-ik_bluegreydarken3 font-normal">
                  Chennai
                </span>
                <ImageComponent
                  src={"/assets/icons/arrowdown.svg"}
                  width={14}
                  height={7}
                  alt={"arrowdown"}
                />
              </button>
            </div>
            <div className="w-[60%]">
              <AutoCompleteSearch
                placeholder={"Find artists, sound engineers, bands..."}
                typeheader={true}
                typebanner={false}
                className={""}
              />
            </div>
          </div>
          <div
            className="flex items-center gap-3 w-full justify-end"
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative">
              <button
                className="flex items-center py-[22px] gap-2 hover:text-ik_whitevariant-foreground hover:underline underline-offset-8 decoration-2"
                onMouseEnter={() => handleMouseEnter("Services")}
              >
                <span className="text-f16 text-ik_bluegreydarken3 font-semibold transition-colors duration-200 ease-in-out ">
                  Services
                </span>
                <ArrowdownIcon
                  sx={{
                    fontSize: "13px",
                  }}
                />
              </button>
            </div>
            <CustomButton
              variant="primary-button"
              label={"List Business/Talent"}
              className="text-f16 font-semibold h-[48px]"
              onClick={handleClickOpenStarted}
            />
            {
              status === 'authenticated' ? "Logged In" : <CustomImageButton
              width={16}
              height={19}
              image="/assets/icons/login-icons.svg"
              label={"Login"}
              newclass="h-[48px]" 
              className="text-f16 font-semibold text-ik_pink-foreground"
              onClick={() => handleLoginPopup()}
            />
            }
          
          </div>
        </div>
      </CustomContainer>

      {openStarted && (
        <Startedpopup handleClose={handleCloseStarted} open={openStarted} />
      )}

      {opencity && (
        <CityLocation handleClose={handleClosecity} open={opencity} />
      )}

      {selected === "Services" && (
        <>
          <Box
            className="shadow-md"
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              zIndex: 999,
              background: "white",
              paddingY: "20px",
            }}
            onMouseEnter={() => handleMouseEnter(selected)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`sectionmusic ${selected ? "open" : ""}`}>
              {selected === "Services" && (
                <CustomContainer>
                  <div className="music-select">
                    <Slider {...settings}>
                      {music?.map((item) => (
                        <Musicscomponent musicsection={item} key={item?.id} />
                      ))}
                    </Slider>
                  </div>
                </CustomContainer>
              )}
            </div>
          </Box>
        </>
      )}
    </div>
  );
};

export default Header;
