/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from "next/dynamic";
import React from "react";
const CustomCardEvents = dynamic(() => import("../CustomCardsEvents"));

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
          img={cartData.thumbnail_image}
          text={cartData?.event_type}
          reviews={""}
          typebottom={false}
        />
      </div>
      <div className="py-2">
        <div>
          <h6 className="text-ik_bluegreydarken6 text-f20 font-semibold leading-6">
            {cartData?.event_name}
          </h6>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-ik_bluegreydarken6 text-f16 font-normal leading-6">
            {cartData?.event_type}
          </span>
        </div>
        <span className="text-ik_bluegreydarken6 text-f16 font-semibold leading-6">
          {cartData?.event_price} Onwards
        </span>
      </div>
    </section>
  );
};

export default ThisWeekData;
