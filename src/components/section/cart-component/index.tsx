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
      <div className="py-2">
        <div>
          <h6 className="text-ik_bluegreydarken3 text-f22 font-bold">
            {cartData?.music_title}
          </h6>
        </div>
        <div className="flex items-center gap-1">
          <ImageComponent
            src={"/assets/icons/location-icons.svg"}
            width={22}
            height={20}
            alt={"star"}
          />
          <span className="text-ik_bluegreydarken3 text-f18 font-normal">
            {cartData?.music_location}
          </span>
        </div>
        <span className="text-ik_bluegreydarken1 text-f16 font-normal">
          {cartData?.music_text}
        </span>
      </div>
    </Link>
  );
};

export default CardComponent;