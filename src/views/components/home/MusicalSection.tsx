/* eslint-disable @typescript-eslint/no-explicit-any */
import Musicscomponent from "@/views/components/cart-component/MusicsComponent";
import CustomContainer from "@/views/components/Container";
import ImageComponent from "@/views/components/ImageComponent";
import React from "react";

type Props = {
  musicsection: any;
};
const MusicalSection = (props: Props) => {
  const { musicsection } = props;
  return (
    <section className="pt-7 pb-9 relative">
      <CustomContainer>
        <div className="absolute top-10 left-0">
          <ImageComponent
            src={"/assets/image/star1.webp"}
            width={60}
            height={60}
            alt={"arrowdown"}
            priority={true}
          />
        </div>
        <div className="text-f28 font-semibold mb-3 text-ik_bluegreydarken4">
          <span>Destination for everyone with musical interest</span>
        </div>
        <Musicscomponent musicsection={musicsection} />
        <div className="absolute bottom-5 right-2">
          <ImageComponent
            src={"/assets/image/star2.webp"}
            width={60}
            height={60}
            alt={"arrowdown"}
            priority={true}
          />
        </div>
      </CustomContainer>
    </section>
  );
};

export default MusicalSection;
