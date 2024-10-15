/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
// import CustomCard from "../CustomCard";
import Link from "next/link";

import dynamic from "next/dynamic";

const CustomCard = dynamic(
  () => import("@/components/common/form-fields/CustomCard")
);
type Props = {
  musicsection: any;
};
const Musicscomponent = (props: Props) => {
  const { musicsection } = props;
  return (
    <Link href={musicsection.url}>
      {" "}
      <CustomCard
        variant="top-right"
        img={musicsection.image}
        text={musicsection.music_title}
        Contenttext={musicsection.music_text}
        typetop={true}
        reviews={""}
      />
    </Link>
  );
};

export default Musicscomponent;
