/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
// import CustomCard from "../CustomCard";
// import ImageComponent from "../ImageComponent";
import Link from "next/link";

import dynamic from "next/dynamic";

const CustomCard = dynamic(
  () => import("@/components/common/form-fields/CustomCard")
);

const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);

type Props = {
  cartData: any;
};

const CardComponent = (props: Props) => {
  const { cartData } = props;

  return (
    <Link
      href={`/business/${cartData?.slug || ""}/${cartData?.music_title || ""}`}
    >
      <div>
        <CustomCard
          variant="bottom-left"
          img={cartData.music_image}
          img1={cartData.music_logo}
          reviews={cartData.music_reviews}
          typebottomleft={true}
          text={""}
        />
      </div>
      <div className="pt-4">
        <div>
          <h6 className="text-ik_bluegreydarken3 text-f22 font-bold leading-[27.72px] mb-2">
            {cartData?.music_title}
          </h6>
        </div>
        <div className="flex items-center gap-1 mb-1">
          <ImageComponent
            src={"/assets/icons/location-icons.svg"}
            width={22}
            height={20}
            alt={"star"}
          />
          <span className="text-ik_bluegreydarken3 text-f18 font-normal leading-[22.68px]">
            {cartData?.music_location}
          </span>
        </div>
        {cartData.music_text && (
          <div className="text-ik_bluegreydarken1 text-f16  leading-[20.16px] flex gap-1 mb-[6px]">
            <p className="font-semibold">
              {cartData?.music_text?.split(" ")[0]}
            </p>
            <span className="font-normal">
              {cartData?.music_text?.split(" ").slice(1).join(" ")}
            </span>
          </div>
        )}
        {cartData?.music_dec && (
          <span className="text-ik_bluegreydarken1 text-f16  leading-[20.16px] font-normal">
            {cartData?.music_dec}
          </span>
        )}
        {cartData.music_reviewsnwe && (
          <div className="flex items-center gap-2 mb-[5px]">
            <ImageComponent
              src={"/assets/icons/star.svg"}
              width={20}
              height={19}
              alt={"star"}
              priority={true}
            />
            <span className="text-ik_bluegreydarken3 text-f18 font-semibold leading-[20.16px]">
              {cartData.music_reviewsnwe?.split(" ")[0]}
            </span>
            <span className="text-ik_bluegreydarken3 text-f18 font-normal leading-[20.16px]">
              {cartData.music_reviewsnwe?.split(" ").slice(1).join(" ")}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CardComponent;
