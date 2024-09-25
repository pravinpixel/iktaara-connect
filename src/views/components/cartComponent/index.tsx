/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import CustomCard from '../CustomCard';
import ImageComponent from '../imageComponent';


type Props = {
  cartData: any;
};

const CaetComponent = (props: Props) => {
  const { cartData } = props;

  return (
    <section>
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

export default CaetComponent