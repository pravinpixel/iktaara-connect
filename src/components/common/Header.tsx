import { NAV } from "@/utils/helpers/constant-helper";
import React from "react";

// import { SearchBar } from "./SearchBar";

import Link from "next/link";
import { AutoCompleteSearch } from "./AutoCompleteSearch";
import CustomButton from "@/views/components/form-fields/CustomButton";
import ImageComponent from "@/views/components/imageComponent";
import CustomContainer from "@/views/components/Container";

const Header = () => {
  return (
    <div className="shadow-md">
      {/* <Container
        maxWidth={"lg"}
        sx={{ maxWidth: { xl: "90% !important", lg: "90%" } }}
      > */}
      <CustomContainer>
        <div
          className={`w-ful h-[${NAV.height}]  flex items-center justify-between px-3 `}
        >
          <div className="flex items-center justify-between gap-5 w-100">
            <div className="h-[71px] w-[110px] flex items-center">
              <Link href="/">
                <ImageComponent
                  src={"assets/logo/logo.svg"}
                  width={158}
                  height={60}
                  alt={"iktaraa"}
                  priority={true}
                />
              </Link>
            </div>
            <div>
              <button className="flex items-center gap-2">
                <ImageComponent
                  src={"assets/icons/location.svg"}
                  width={12}
                  height={15}
                  alt={"location"}
                  priority={true}
                />
                <span className="text-f12">Chennai</span>
                <ImageComponent
                  src={"assets/icons/arrowdown.svg"}
                  width={13}
                  height={6}
                  alt={"arrowdown"}
                  priority={true}
                />
              </button>
            </div>
            <div className="w-auto">
              {/* <SearchBar /> */}
              <AutoCompleteSearch
                placeholder={"Find artists, sound engineers, bands..."}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button className="flex items-center gap-2 ">
                <span className="text-f12 font-semibold">Services</span>
                <ImageComponent
                  src={"assets/icons/arrowdown.svg"}
                  width={13}
                  height={6}
                  alt={"arrowdown"}
                  priority={true}
                />
              </button>
            </div>
            <CustomButton
              variant="primary-button"
              label={"List Business/Talent"}
              className="text-f12 font-semibold"
            />
            <CustomButton
              variant="contained"
              label={"Login"}
              className="text-f12 font-semibold text-ik_pink-foreground"
            />
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Header;
