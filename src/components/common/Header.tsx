import { NAV } from "@/utils/helpers/constant-helper";
import React from "react";

import { SearchBar } from "./SearchBar";

const Header = () => {
  return (
    <div
      className={`w-ful h-[${NAV.height}]  flex items-center shadow-md justify-between px-3 `}
    >
      <div className="flex items-center">
        <div className="h-[81px] w-[158.13px] flex items-center">Logo</div>
        <div>
          <span className="text-f16">Chennai</span>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      <div>
        <span className="pr-[28px]">Services</span>
        <button className="mr-[10px]">List Business/Talent</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
