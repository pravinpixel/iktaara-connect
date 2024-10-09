import CustomButton from "@/views/components/form-fields/CustomButton";
import ImageComponent from "@/views/components/ImageComponent";
import { Container } from "@mui/material";
import React from "react";

import CityLocation from "../popup/CityLocation";
import { AutoCompleteSearch } from "@/components/common/AutoCompleteSearch";

const BannerSection = () => {
  const [opencity, setOpencity] = React.useState(false);

  const handleClickOpencity = () => {
    setOpencity(true);
  };

  const handleClosecity = () => {
    setOpencity(false);
  };
  return (
    <>
      <div>
        <div className="relative">
          <div className="absolute top-1/2 left-[27%] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <h1 className="text-ik_pink-foreground font-sora text-[64px] font-extrabold">
              Hire Music Talents <br />
              <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[18px] after:w-full after:h-[3px] after:bg-white">
                <a className="relative inline-block after:content-[''] after:absolute after:right-[-10px] after:top-[28px] after:h-[50px] after:w-[4px] after:bg-white">
                  Pop Singers
                </a>
              </span>
            </h1>
            <p className="mt-1 text-ik_pink-foreground text-[22px] font-semibold">
              One stop to find everything with music.
            </p>

            <div className="search">
              <div className="flex mt-6 md:mt-8 w-full bg-white rounded-md overflow-hidden">
                <div className="border-r border-ik_bluegreylighten4 pr-4">
                  <button
                    className="flex items-center gap-2 py-4 px-3.5"
                    onClick={handleClickOpencity}
                  >
                    <ImageComponent
                      src={"/assets/icons/location.svg"}
                      width={14}
                      height={14}
                      alt={"location"}
                      priority={true}
                    />
                    <span className="text-f14">Chennai</span>
                    <ImageComponent
                      src={"/assets/icons/arrowdown.svg"}
                      width={13}
                      height={6}
                      alt={"arrowdown"}
                      priority={true}
                    />
                  </button>
                </div>

                <AutoCompleteSearch
                  placeholder={"Artists, sound engineers, bands & more"}
                  typeheader={false}
                  typebanner={true}
                />
              </div>
            </div>
          </div>
          <ImageComponent
            src={"//assets/banner/banner1.webp"}
            alt={"banner"}
            aspectRatio={3.1}
            objectFit={"content"}
            type={1}
            priority={true}
          />
        </div>
        <div className="bg-ik_redvariant1 p-2.5">
          <Container>
            <div className="flex justify-center items-center gap-4">
              <ImageComponent
                src={"/assets/icons/enjoyfamily.svg"}
                width={40}
                height={40}
                alt={"enjoyfamily"}
                priority={true}
              />
              <div>
                <p className="text-f18 font-medium ">
                  Enjoy family time. Book event tickets &
                  <span className="font-bold"> Get 10% OFF </span>
                </p>
              </div>
              <div>
                <CustomButton
                  variant="task"
                  label={"VIEW SHOWS"}
                  className="text-f14 font-semibold text-ik_pink-foreground"
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
      {opencity && (
        <CityLocation handleClose={handleClosecity} open={opencity} />
      )}
    </>
  );
};

export default BannerSection;
