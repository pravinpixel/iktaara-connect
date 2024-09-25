/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ImageComponent from "../ImageComponent";
import CustomCardEvents from "../CustomCardsEvents";

type Props = {
  cartData: any;
};

const ThisWeekData = (props: Props) => {
  const { cartData } = props;

  return (
    <section>
      <div>
        <CustomCardEvents
          variant="bottom-left"
          img={cartData.music_image}
          text={""}
          reviews={""}
          typebottom={false}
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
            src={"assets/icons/location-icons.svg"}
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
    </section>
  );
};

export default ThisWeekData;
