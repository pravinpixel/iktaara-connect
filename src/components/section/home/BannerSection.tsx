// import CustomButton from "@/views/components/form-fields/CustomButton";
// import ImageComponent from "@/views/components/ImageComponent";
import { Container } from "@mui/material";
import React from "react";

// import CityLocation from "../popup/CityLocation";
import { AutoCompleteSearch } from "@/components/common/AutoCompleteSearch";
import dynamic from "next/dynamic";
import CustomContainer from "@/components/common/form-fields/Container";

const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);
const CityLocation = dynamic(() => import("@/components/popup/CityLocation"));

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
          <CustomContainer>
            <div className="absolute top-1/2 left-[25%] 2xl:left-[22.7%] transform -translate-x-1/2 -translate-y-1/2 z-10">
              <h1>
                <p className="text-ik_pink-foreground text-[64px] font-extrabold leading-[64px]">
                  Hire Music Talents
                </p>
                <br />
                <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[1px] after:w-full after:h-[3px] after:bg-white">
                  <a className="relative inline-block after:content-[''] after:absolute after:right-[-12px] after:top-[14px] after:h-[50px] after:w-[4px] after:bg-white text-ik_pink-foreground text-[64px] font-extrabold leading-[64px]">
                    Pop Singers
                  </a>
                </span>
              </h1>
              <p className="text-ik_pink-foreground text-[22px] font-semibold mt-[19px] mb-[23.11px]">
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
                    className={""}
                  />
                </div>
              </div>
            </div>
          </CustomContainer>
          <ImageComponent
            src={"/assets/banner/banner1.webp"}
            alt={"banner"}
            aspectRatio={3.1}
            objectFit={"content"}
            type={1}
            priority={true}
          />
        </div>
        <div className="bg-ik_redvariant1 p-2.5">
          <Container>
            <div className="flex justify-center items-center gap-[18px]">
              <ImageComponent
                src={"/assets/icons/enjoyfamily.svg"}
                width={40}
                height={40}
                alt={"enjoyfamily"}
                priority={true}
              />
              <div>
                <p className="text-f18 font-medium leading-[22.68px]">
                  Enjoy family time. Book event tickets &
                  <span className="font-bold"> Get 10% OFF </span>
                </p>
              </div>
              <div>
                <CustomButton
                  variant="task"
                  label={"VIEW SHOWS"}
                  className="text-f14 font-bold leading-[17.64px] text-ik_pink-foreground py-3 px-[23.84px]"
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
