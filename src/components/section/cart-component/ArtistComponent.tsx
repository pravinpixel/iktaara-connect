import React from "react";
// import ImageComponent from "../ImageComponent";
// import CustomCard from "../CustomCard";
import dynamic from "next/dynamic";

const CustomCard = dynamic(
  () => import("@/components/common/form-fields/CustomCard")
);
const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
type Props = {
  cartData: {
    artists_image: string;
    artists_name: string;
    artists_title: string;
    artists_reviews: string;
    artists_text: string;
  };
};

const ArtistComponent = (props: Props) => {
  const { cartData } = props;
  return (
    <section>
      <div>
        <CustomCard
          variant="bottom-left"
          img={cartData.artists_image}
          text={cartData?.artists_name}
          typeleftbottom={true}
        />
      </div>
      <div className="py-2">
        <div>
          <h6 className="text-ik_bluegreydarken3 text-f18 font-semibold">
            {cartData?.artists_title}
          </h6>
        </div>
        <div className="flex items-center gap-1">
          <ImageComponent
            src={"/assets/icons/star.svg"}
            width={20}
            height={19}
            alt={"star"}
            priority={true}
          />
          <span className="text-ik_bluegreydarken3 text-f16 font-semibold">
            {cartData?.artists_reviews}
          </span>
        </div>
        <span className="text-ik_bluegreydarken1 text-f16 font-normal">
          {cartData?.artists_text}
        </span>
      </div>
    </section>
  );
};

export default ArtistComponent;