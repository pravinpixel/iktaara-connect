/* eslint-disable @typescript-eslint/no-explicit-any */
// import { NAV } from "@/utils/helpers/constant-helper";
import React, { useState } from "react";
// import { SearchBar } from "./SearchBar";
import Link from "next/link";
import { Avatar, Box, Menu } from "@mui/material";
import { ArrowdownIcon } from "@/utils/theme/svg";
import { AutoCompleteSearch } from "./AutoCompleteSearch";
import Slider from "react-slick";
import zustandStore from "@/utils/helpers/zustand";
import dynamic from "next/dynamic";
import { signOut, useSession } from "next-auth/react";
import { MenuItem } from "@mui/material";

const CustomButton = dynamic(() => import("./form-fields/CustomButton"));
const ImageComponent = dynamic(() => import("./form-fields/ImageComponent"));
const CustomContainer = dynamic(() => import("./form-fields/Container"));
const CityLocation = dynamic(() => import("../popup/CityLocation"));
const Musicscomponent = dynamic(
  () => import("../section/cart-component/MusicsComponent")
);
const Startedpopup = dynamic(() => import("../popup/Startedpopup"));
const CustomImageButton = dynamic(
  () => import("./form-fields/CustomImageButton")
);

const Header = () => {
  const [opencity, setOpencity] = React.useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [openStarted, setOpenStarted] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const { status } = useSession();

  const { setPopup } = zustandStore();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloses = () => {
    setAnchorEl(null);
  };

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

  const handleLogout = () => {
    signOut();
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
            {status === "authenticated" ? (
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src="/assets/image/artist-logo.png"
                  sx={{ width: "48px", height: "48px" }}
                  onClick={handleClick}
                />
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleCloses}
                  elevation={0}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  sx={{
                    "& .MuiPaper-elevation": {
                      padding: "0px",
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    },
                    "& .MuiList-padding": {
                      paddingTop: "0px",
                      paddingBottom: "30px",
                    },
                  }}
                >
                  <MenuItem onClick={handleCloses} className="p-1">
                    <div className="bg-ik_bluegreylighten7 px-4 py-3 rounded-lg">
                      <div className="text-f18 text-ik_bluegreydarken6 font-semibold leading-[23px]">
                        Hi Ramakrishna
                      </div>
                      <div className="text-f16 font-normal text-ik_lightgrey leading-[22.44px]">
                        ramakrishnan@gmail.com
                      </div>
                    </div>
                  </MenuItem>
                  <Link href={"/post-login"}>
                    <MenuItem className="py-3 px-5 bg-ik_bordervariant2 gap-[15px] text-f18 font-normal leading-[22px] text-ik_bluegreydarken3">
                      <ImageComponent
                        src="/assets/icons/view-profile.svg"
                        width={24}
                        height={24}
                        alt="view-profile"
                      />
                      View Profile
                    </MenuItem>
                  </Link>
                  <Link href={""}>
                    <MenuItem className="py-3 px-5 gap-[15px] text-f18 font-normal leading-[22px] text-ik_bluegreydarken3">
                      <ImageComponent
                        src="/assets/icons/enquiries-pr.svg"
                        width={24}
                        height={24}
                        alt="enquiries"
                      />
                      Enquiries
                    </MenuItem>
                  </Link>
                  <Link href={""}>
                    <MenuItem className="py-3 px-5 gap-[15px] text-f18 font-normal leading-[22px] text-ik_bluegreydarken3">
                      <ImageComponent
                        src="/assets/icons/host-event.svg"
                        width={24}
                        height={24}
                        alt="host-event"
                      />
                      Host Event
                      <span>New</span>
                    </MenuItem>
                  </Link>
                  <MenuItem
                    className="py-3 px-5 gap-[15px] text-f18 font-normal leading-[22px] text-ik_pink"
                    onClick={() => handleLogout()}
                  >
                    <ImageComponent
                      src="/assets/icons/logout.svg"
                      width={24}
                      height={24}
                      alt="logout"
                    />
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <CustomImageButton
                width={16}
                height={19}
                image="/assets/icons/login-icons.svg"
                label={"Login"}
                newclass="h-[48px]"
                className="text-f16 font-semibold text-ik_pink-foreground"
                onClick={() => handleLoginPopup()}
              />
            )}
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
